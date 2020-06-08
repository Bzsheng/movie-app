FROM node:12-alpine as builder

ENV NODE_ENV production
WORKDIR /app

ADD package.json /app
RUN npm install

ADD . /app
RUN npm run build

FROM nginx:alpine
COPY --from=buileder code/build /usr/share/nginx/html