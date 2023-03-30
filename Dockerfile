FROM nginx:1.23.3

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
