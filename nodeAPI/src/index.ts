import { createServer } from 'http';

const server = createServer((req, res) => {
  res.end('Hello NODE!');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
