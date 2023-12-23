# Stage 1: Build stage
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy only the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies using npm ci
RUN npm ci

# Copy the rest of the application files
COPY . .

# Run any build commands if needed
# RUN npm run build

# Stage 2: Production stage
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app .

# Expose the port if your application needs it
EXPOSE 5001

# Start the application
CMD ["npm", "start"]
