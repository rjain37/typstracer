import express from 'express';
import rehypeTypst from './rehypeTypst.js';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import {unified} from 'unified';

const app = express();
app.use(express.json());
app.use(express.static('public'));

// Endpoint for rendering Typst code
app.post('/api/typst-render', async (req, res) => {
    try {
        const { code } = req.body;
        // console.log('Received code:', code);
        
        // if (!code) {
        //     console.log('No code provided');
        //     return res.status(400).send('No code provided');
        // }
        
        // Create proper HTML structure for Typst code
        const wrappedCode = `<pre><code class="language-math">\n${code}\n</code></pre>`;
        // console.log('Wrapped code:', wrappedCode);
        
        // Process using rehype and typst
        const file = await unified()
            .use(rehypeParse, { fragment: true })
            .use(rehypeTypst)
            .use(rehypeStringify)
            .process(wrappedCode);
            
        const result = String(file);
        // console.log('Rendered result:', result);
        
        if (!result || result.trim() === '') {
            console.log('Empty rendering result');
            throw new Error('Empty rendering result');
        }
        
        res.send(result);
    } catch (error) {
        console.error('Render error:', error);
        console.error('Error stack:', error.stack);
        res.status(500).json({
            error: 'Error rendering Typst code',
            message: error.message,
            stack: error.stack
        });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
