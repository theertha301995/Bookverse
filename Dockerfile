FROM node:18-alpine

WORKDIR /app

# Copy package files and install all dependencies (including dev)
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Ensure permissions are correct
RUN chmod -R 755 /app

# Run TypeScript build
RUN npm run build

EXPOSE 3000
CMD ["node", "dist/index.js"]