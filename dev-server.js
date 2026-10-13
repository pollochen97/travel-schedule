const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const crypto = require('node:crypto');

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
};

function revision(root) {
  const hash = crypto.createHash('sha256');
  function walk(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      if (entry.name.startsWith('.') || ['node_modules', 'tests', 'docs'].includes(entry.name)) continue;
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) walk(file);
      else if (entry.isFile() && contentTypes[path.extname(file).toLowerCase()]) {
        const stat = fs.statSync(file);
        hash.update(`${path.relative(root, file)}:${stat.mtimeMs}:${stat.ctimeMs}:${stat.size}\n`);
      }
    }
  }
  walk(root);
  return hash.digest('hex');
}

function reloadScript(version) {
  return `<script>
(() => {
  const version = ${JSON.stringify(version)};
  setInterval(async () => {
    try {
      const response = await fetch('/__dev/version', { cache: 'no-store' });
      if (!response.ok) return;
      const current = await response.json();
      if (current.version !== version) location.reload();
    } catch {} // Retry when the local server becomes available again.
  }, 1000);
})();
</script>`;
}

function createDevServer({ root = __dirname } = {}) {
  root = path.resolve(root);
  return http.createServer((request, response) => {
    response.setHeader('Cache-Control', 'no-store');
    let requestedPath;
    try {
      const url = new URL(request.url, 'http://localhost');
      requestedPath = decodeURIComponent(url.pathname);
    } catch {
      response.writeHead(400); response.end('Bad request'); return;
    }
    if (requestedPath === '/__dev/version') {
      try {
        response.setHeader('Content-Type', 'application/json; charset=utf-8');
        response.end(JSON.stringify({ version: revision(root) }));
      } catch {
        response.writeHead(503); response.end('Files are changing; retry');
      }
      return;
    }
    if (requestedPath === '/') requestedPath = '/index.html';
    const filePath = path.resolve(root, `.${requestedPath}`);
    const relative = path.relative(root, filePath);
    if (relative.startsWith('..') || path.isAbsolute(relative) || relative.split(path.sep).some((part) => part.startsWith('.'))) {
      response.writeHead(403); response.end('Forbidden'); return;
    }
    fs.readFile(filePath, (error, content) => {
      if (error) { response.writeHead(404); response.end('Not found'); return; }
      const extension = path.extname(filePath).toLowerCase();
      if (extension === '.html') {
        try {
          const script = reloadScript(revision(root));
          const html = content.toString('utf8');
          content = html.includes('</body>') ? html.replace('</body>', `${script}</body>`) : html + script;
        } catch {
          response.writeHead(503); response.end('Files are changing; retry'); return;
        }
      }
      response.setHeader('Content-Type', contentTypes[extension] || 'application/octet-stream');
      response.end(content);
    });
  });
}

if (require.main === module) {
  const port = Number(process.env.PORT || 8000);
  const server = createDevServer();
  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') console.error(`Port ${port} is in use. Stop the old preview server or set PORT to another port.`);
    else console.error(error);
    process.exitCode = 1;
  });
  server.listen(port, '127.0.0.1', () => {
    console.log(`Serving ${__dirname}`);
    console.log(`Open http://127.0.0.1:${port}/ (automatic reload enabled)`);
  });
}
module.exports = { createDevServer };
