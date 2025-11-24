# ---------------------------
# Stage 1: Build
# ---------------------------
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install build dependencies
RUN apk add --no-cache python3 make g++ 

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies (including devDependencies)
RUN npm ci

# Copy source code
COPY . .

# Build TypeScript
RUN npm run build

# ---------------------------
# Stage 2: Production
# ---------------------------
FROM node:18-alpine AS production

WORKDIR /app

# Copy only package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy built files from builder
COPY --from=builder /app/dist ./dist

# Expose the app port
EXPOSE 3000

# Start the app
CMD ["node", "dist/index.js"]
