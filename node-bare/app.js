import express from 'express';

export const app = express();

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/', (_req, res) => {
  res.json({ service: 'fast-deploy-node-trial', variant: 'node-bare', node: process.version });
});
