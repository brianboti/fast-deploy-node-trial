import express from 'express';
import { readFile } from 'node:fs/promises';
import ort from 'onnxruntime-node';

export const app = express();

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/', (_req, res) => {
  res.json({ service: 'fast-deploy-node-trial', variant: 'node-onnx', node: process.version });
});

// model.onnx adds two numbers: an inference here proves that onnxruntime-node's native binary loads in the image,
// although no install script ran.
let session;

export async function add(a, b) {
  session ??= await ort.InferenceSession.create(await readFile(new URL('./model.onnx', import.meta.url)));
  const feeds = { a: new ort.Tensor('float32', [a], [1]), b: new ort.Tensor('float32', [b], [1]) };
  const { sum } = await session.run(feeds);
  return sum.data[0];
}

app.get('/add', async (req, res) => {
  const a = Number(req.query.a ?? 2);
  const b = Number(req.query.b ?? 3);
  res.json({ a, b, sum: await add(a, b), platform: `${process.platform}-${process.arch}` });
});
