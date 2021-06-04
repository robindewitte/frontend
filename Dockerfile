# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app

ARG ANGULAR_APP_APIGATEWAY="http://localhost:8123"
ENV ANGULAR_APP_API_GATEWAY ${ANGULAR_APP_APIGATEWAY}

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod


# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist/twatter /usr/share/nginx/html
EXPOSE 8083
CMD ["nginx", "-g", "daemon off;"]
