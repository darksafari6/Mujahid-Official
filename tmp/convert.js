const fs = require('fs');

let html = fs.readFileSync('/tmp/input.html', 'utf8');

// Replace class= with className=
html = html.replace(/class=/g, 'className=');

// Replace style="..." with style={{...}}
html = html.replace(/style="([^"]*)"/g, (match, p1) => {
    const styleObj = {};
    p1.split(';').forEach(rule => {
        if (!rule.trim()) return;
        const parts = rule.split(':');
        if (parts.length < 2) return;
        let key = parts[0].trim();
        let value = parts.slice(1).join(':').trim();
        if (key.startsWith('-webkit-')) {
            key = key.replace(/^-webkit-/, 'Webkit');
        }
        key = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        styleObj[key] = value;
    });
    return `style={${JSON.stringify(styleObj)}}`;
});

// Replace for= with htmlFor=
html = html.replace(/for=/g, 'htmlFor=');

// Self close tags like <img ...>
html = html.replace(/<img([^>]*[^\/])>/g, '<img$1 />');
html = html.replace(/<input([^>]*[^\/])>/g, '<input$1 />');
html = html.replace(/<br>/g, '<br />');
html = html.replace(/<hr>/g, '<hr />');

fs.writeFileSync('/tmp/output.jsx', html);
