# Fast Deploy: Node.js trial services

Test fixtures for the live exercise of [Fast Deploy](https://github.com/brianboti/fast-deploy)'s roadmap Phase 18
(Node.js web services). Each folder is one small Express service, read by the platform as it is:

| Folder | What it tries |
|---|---|
| `node-bare` | a lockfile and no Dockerfile: built on the platform's own Node.js image |
| `node-docker` | the same service with a Dockerfile of its own |
| `node-procfile` | the same service with a Procfile, built by Google's buildpacks (reviewed code only) |
| `node-onnx` | `onnxruntime-node` installed with every install script off, its native binary loaded at run time |
| `node-nolock` | no lockfile, Node.js 22: the platform makes the lock |
| `node-nodemon` | a start script that runs nodemon: refused |
| `node-localhost` | a server that listens on localhost: refused |
| `node-pnpm` | a pnpm lockfile: refused |

None of them is a real service. Nothing here holds data or secrets.
