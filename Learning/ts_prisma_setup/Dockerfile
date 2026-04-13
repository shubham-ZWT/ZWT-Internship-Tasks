# Stage 1: Build
FROM node:20-slim AS builder
RUN apt-get update && apt-get install -y openssl
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate
RUN npm run build

# Stage 2: Run
FROM node:20-slim
RUN apt-get update && apt-get install -y openssl
WORKDIR /app
# Only copy the compiled code and production dependencies
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000
CMD ["node", "dist/server.js"]