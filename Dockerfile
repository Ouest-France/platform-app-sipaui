FROM nginx:1.26.2

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
