# Stage 1: Build React/Vite app
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn
COPY . /app
RUN yarn build

# Stage 2: Copy build output to Nginx image
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
