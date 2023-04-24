FROM nginx:1.21-alpine

## Copy our default nginx config
COPY ./www /etc/nginx

## Create an empty logs folder
RUN mkdir /etc/nginx/logs

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY ./dist/pr-flow-demo /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]