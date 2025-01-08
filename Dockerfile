# Stage 1: Build the Nuxt application
FROM node:20 AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Nuxt application
RUN npm run generate

# Stage 2: Serve with NGINX
FROM nginx:stable-alpine

# Copy built app to NGINX's default folder
COPY --from=builder /app/.output/public /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
