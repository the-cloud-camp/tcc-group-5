FROM node:21-alpine
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn
COPY . /app/

RUN yarn build

COPY .next ./.next

EXPOSE 3000
CMD [ "yarn", "dev" ]