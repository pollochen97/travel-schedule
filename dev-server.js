const fs = require('fs');
const http = require('http');
const path = require('path');

const port = Number(process.env.PORT || 8000);
const host = '127.0.0.1';
const root = __dirname;

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp'
};

const server = http.createServer((request, response) => {
  const requestUrl = new URL(request.url, `http://${host}:${port}`);
  const requestedPath = requestUrl.pathname === '/' ? '/index.html' : requestUrl.pathname;
  const filePath = path.normalize(path.join(root, decodeURIComponent(requestedPath)));

  if (!filePath.startsWith(root)) {
    response.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Not found');
      return;
    }

    response.writeHead(200, {
      'Content-Type': contentTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream'
    });
    response.end(content);
  });
});

server.listen(port, host, () => {
  console.log(`Serving ${root}`);
  console.log(`Open http://localhost:${port}/`);
});
