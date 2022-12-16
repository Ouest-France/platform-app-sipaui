FROM nginx:1.23.2

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
