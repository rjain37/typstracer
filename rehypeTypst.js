/**
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('hast').Root} Root
 * @typedef {import('vfile').VFile} VFile
 */

import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic';
import { toText } from 'hast-util-to-text';
import { NodeCompiler } from '@myriaddreamin/typst-ts-node-compiler';
import { SKIP, visitParents } from 'unist-util-visit-parents';
/** @type {Readonly<Options>} */
const emptyOptions = {};
/** @type {ReadonlyArray<unknown>} */
const emptyClasses = [];

/**
 * Render elements with a `language-math` (or `math-display`, `math-inline`)
 * class with KaTeX.
 *
 * @param {Readonly<Options> | null | undefined} [options]
 *   Configuration (optional).
 * @returns
 *   Transform.
 */
export default function rehypeTypst(options) {
  const settings = options || emptyOptions;

  /**
   * Transform.
   *
   * @param {Root} tree
   *   Tree.
   * @param {VFile} file
   *   File.
   * @returns {undefined}
   *   Nothing.
   */
  return async function (tree, file) {
    const matches = [];
    visitParents(tree, 'element', (...args) => {
      matches.push(args);
      return tree;
    });
    const visitor = async function (element, parents) {
      const classes = Array.isArray(element.properties.className)
        ? element.properties.className
        : emptyClasses;
      // This class can be generated from markdown with ` ```math `.
      const languageMath = classes.includes('language-math');
      // This class is used by `remark-math` for flow math (block, `$$\nmath\n$$`).
      const mathDisplay = classes.includes('math-display');
      // This class is used by `remark-math` for text math (inline, `$math$`).
      const mathInline = classes.includes('math-inline');
      let displayMode = mathDisplay;

      // Any class is fine.
      if (!languageMath && !mathDisplay && !mathInline) {
        return;
      }

      let parent = parents[parents.length - 1];
      let scope = element;

      // If this was generated with ` ```math `, replace the `<pre>` and use
      // display.
      if (
        element.tagName === 'code' &&
        languageMath &&
        parent &&
        parent.type === 'element' &&
        parent.tagName === 'pre'
      ) {
        scope = parent;
        parent = parents[parents.length - 2];
        displayMode = true;
      }

      /* c8 ignore next -- verbose to test. */
      if (!parent) return;

      const value = toText(scope, { whitespace: 'pre' });

      /** @type {Array<ElementContent> | string | undefined} */
      let result;

      try {
        result = await renderToSVGString(value, displayMode);
      } catch (error) {
        const cause = /** @type {Error} */ (error);
        file.message('Could not render math with typst', {
          ancestors: [...parents, element],
          cause,
          place: element.position,
          source: 'rehype-typst',
        });

        result = [
          {
            type: 'element',
            tagName: 'span',
            properties: {
              className: ['typst-error'],
              style: 'color:' + (settings.errorColor || '#cc0000'),
              title: String(error),
            },
            children: [{ type: 'text', value }],
          },
        ];
      }

      if ('svg' in result) {
        const root = fromHtmlIsomorphic(result.svg, { fragment: true });
        const defaultEm = 11;
        const height = parseFloat(root.children[0].properties['dataHeight']);
        const width = parseFloat(root.children[0].properties['dataWidth']);
        const shift = height - result.baselinePosition;
        const shiftEm = shift / defaultEm;
        root.children[0].properties.style = `vertical-align: -${shiftEm}em;`;
        root.children[0].properties.height = `${height / defaultEm}em`;
        root.children[0].properties.width = `${width / defaultEm}em`;
        if (!root.children[0].classNames) root.children[0].classNames = [];
        if (displayMode) {
          root.children[0].properties.style += '; display: block; margin: 0 auto;';
          root.children[0].classNames;
        } else {
          root.children[0].classNames.push('typst-inline');
        }
        result = /** @type {Array<ElementContent>} */ (root.children);
      }

      const index = parent.children.indexOf(scope);
      parent.children.splice(index, 1, ...result);
      return SKIP;
    };
    const promises = matches.map(async args => {
      await visitor(...args);
    });
    await Promise.all(promises);
  };
}

/**
 * @type {NodeCompiler}
 */
let compilerIns;

async function initCompiler() {
  if (!compilerIns) {
    try {
      compilerIns = await NodeCompiler.new();
      await compilerIns.compile(""); // Test compilation
    } catch (error) {
      console.error('Error initializing Typst compiler:', error);
      throw new Error('Failed to initialize Typst compiler');
    }
  }
  return compilerIns;
}

async function renderToSVGString(code, displayMode) {
  try {
    const compiler = await initCompiler();
    return await renderToSVGString_(compiler, code, displayMode);
  } catch (error) {
    console.error('Error rendering Typst:', error);
    throw error;
  }
}

async function renderToSVGString_(compiler, code, displayMode) {
  try {
    const svg = await compiler.compile2svg(code);
    if (!svg) {
      throw new Error('Failed to compile Typst to SVG');
    }
    return svg;
  } catch (error) {
    console.error('Error in Typst compilation:', error);
    throw error;
  }
}