# Stage 1: Build the Nuxt application
FROM node:20 AS builder

# Set the working directory
WORKDIR /app

# Copy only package.json and lock files for caching
COPY package*.json ./

# Clean cache and install dependencies
RUN rm -rf node_modules && npm cache clean --force && npm ci

# Apply permissions to the working directory
RUN chmod -R 777 /app

# Copy the rest of the application files
COPY . .

# Run the Nuxt prepare step (explicitly)
RUN npx nuxt prepare || (echo "Nuxt prepare failed" && cat /app/npm-debug.log)

# Build the Nuxt application (static site generation)
RUN npm run generate

# Stage 2: Serve with NGINX
FROM nginx:stable-alpine

# Copy built files to NGINX's default folder
COPY --from=builder /app/.output/public /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
