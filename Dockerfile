FROM nginx:1.23.0

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
