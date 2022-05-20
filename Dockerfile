FROM nginx:latest

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
