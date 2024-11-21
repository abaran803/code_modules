const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Plain Text
  //   res.writeHead(200, { "content-type": "text/plain" });
  //   res.end("Ayush");

  //   JSON
  //   res.writeHead(200, { "content-type": "application/json" });
  //   res.end(
  //     JSON.stringify({
  //       name: "ayush",
  //       age: 50,
  //     })
  //   );

  //   HTML
  //   res.writeHead(200, { "content-type": "text/html" });
  //   res.end("<h1>ABC</h1>");

  // HTML from File
  //   const htmlContent = fs.readFileSync("./index.html");
  //   res.writeHead(200, { "content-type": "text/html" });
  //   res.end(htmlContent);

  //   Routing
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Welcome to homepage");
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("About page");
  } else {
    res.writeHead(404);
    res.end("Oops! Page not found");
  }
});

server.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
