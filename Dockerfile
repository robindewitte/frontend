FROM node:lts-alpine as build-stage
WORKDIR /app

ARG APIGATEWAY_URL="http://localhost:8123"
ENV ANGULAR_APP_API_GATEWAY ${APIGATEWAY_URL}}
ARG APP_URL="http://localhost:8082"
ENV ANGULAR_APP_URL = ${APP_URL}

COPY package*.json ./
RUN npm install
COPY . /app
RUN npm run build --prod

# production stage
FROM nginx:1.17.1-alpine as production-stage
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist/twatter /usr/share/nginx/html
EXPOSE 8082
CMD ["nginx", "-g", "daemon off;"]
