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
        
        // Create proper HTML structure for Typst code
        const wrappedCode = `<pre><code class="language-math">\n${code}\n</code></pre>`;
        
        // Process using rehype and typst
        const file = await unified()
            .use(rehypeParse, { fragment: true })
            .use(rehypeTypst)
            .use(rehypeStringify)
            .process(wrappedCode);
            
        res.send(String(file));
    } catch (error) {
        console.error('Render error:', error);
        res.status(500).send('Error rendering Typst code');
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
