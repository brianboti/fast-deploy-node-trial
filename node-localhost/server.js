import { app } from './app.js';

const port = Number(process.env.PORT) || 8080;
const server = app.listen(port, 'localhost', () => {
  console.log(JSON.stringify({ severity: 'INFO', message: `listening on localhost:${port}` }));
});

process.on('SIGTERM', () => {
  server.close(() => process.exit(0));
});
