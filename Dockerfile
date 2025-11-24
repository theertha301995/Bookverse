# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app

# Install build tools
RUN apk add --no-cache python3 make g++ bash git

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev)
RUN npm ci

# Copy source code
COPY . .

# Make sure all scripts are executable
RUN chmod +x ./scripts/*.sh || true

# Build
RUN npm run build

# Stage 2: Production
FROM node:18-alpine AS production
WORKDIR /app

# Copy only package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy built files from builder
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["node", "dist/index.js"]
