FROM node:18-alpine

# Path: /app
WORKDIR /app

# Path: /app/package.json
COPY package.json .

# Path: /app
RUN npm install

# Path: /app
COPY . .

RUN npx prisma generate

EXPOSE 8000

# Path: /app
CMD [ "npm",  "start"]