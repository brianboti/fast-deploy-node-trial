import { app } from './app.js';

const port = Number(process.env.PORT) || 8080;
const server = app.listen(port, () => {
  console.log(JSON.stringify({ severity: 'INFO', message: `listening on ${port}` }));
});

process.on('SIGTERM', () => {
  server.close(() => process.exit(0));
});
