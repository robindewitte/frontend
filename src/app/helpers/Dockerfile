FROM node:lts-alpine as build-stage
WORKDIR /app

ARG ANGULAR_APP_APIGATEWAY="http://172.29.80.1:8123"
ENV ANGULAR_APP_API_GATEWAY ${ANGULAR_APP_APIGATEWAY}

COPY package*.json ./
RUN npm install
COPY . /app
RUN npm run build --prod

# production stage
FROM nginx:1.17.1-alpine as production-stage
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 8083
CMD ["nginx", "-g", "daemon off;"]