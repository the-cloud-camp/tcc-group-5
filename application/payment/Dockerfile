# Stage 1: Build stage
FROM node:18-alpine AS builder

# Set to a non-root built-in user `node`
USER node

# Create app directory and set it as the working directory
WORKDIR /home/node/app

# Copy only package files first to leverage Docker caching
COPY --chown=node package*.json ./

# Install app dependencies
RUN yarn --production=false

# Copy the rest of the application code
COPY --chown=node . .

# Build the application
RUN npm run build

# Stage 2: Production stage
FROM node:18-alpine

# Set to a non-root built-in user `node`
USER node

# Create app directory and set it as the working directory
WORKDIR /home/node/app

# Copy only necessary files from the builder stage
COPY --from=builder --chown=node /home/node/app/package*.json ./
COPY --from=builder --chown=node /home/node/app/dist ./dist

# Install only production dependencies
RUN yarn --production

# Set environment variables
ENV HOST=0.0.0.0 \
    PORT=3000

# Expose the specified port
EXPOSE ${PORT}

# Start the application
CMD [ "node", "." ]
