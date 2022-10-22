FROM nginx:1.23.1

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
