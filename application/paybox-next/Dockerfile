FROM node:21-alpine
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn
COPY . /app/
RUN yarn build

EXPOSE 3000
RUN yarn build
CMD [ "yarn", "dev" ]