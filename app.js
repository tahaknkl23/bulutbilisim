const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});

  // Yunus için özel HTML sayfası
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Merhaba Taha Nasılsın</title>
      <style>
        body {
          font-family: 'Helvetica', sans-serif;
          background-color: #66c2ff;
          text-align: center;
          padding: 50px;
        }
        h1 {
          color: #fff;
          background-color: #003366;
          padding: 10px;
          border-radius: 5px;
        }
        p {
          color: #003366;
        }
      </style>
    </head>
    <body>
      <h1>Merhaba Taha!</h1>
      <p>Mükemmel Taha !</p>
    </body>
    </html>
  `;

  res.end(html);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor...`);
});
