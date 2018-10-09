FROM nginx:1.11

# Configuration nginx
COPY ./dist/ /usr/local/nginx/html
