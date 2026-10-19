# The service's own image: Node.js 24 on Debian slim, pinned by its multi-architecture index digest.
FROM node:24-slim@sha256:a5f4366e834695d5f363b920c104953a535d3a9864d1bdf74566a0ebe01daee5
ENV NODE_ENV=production
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts --no-audit --no-fund && npm cache clean --force
COPY app.js server.js ./
USER node
EXPOSE 8080
CMD ["node", "server.js"]
