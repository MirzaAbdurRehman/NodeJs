const http = require("http");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" }); // For Knowing This is Html text not simple plain text
    response.write("<h1> Welcome Server Start Message!!!</h1>");
    response.end();
  })
  .listen(1000);
