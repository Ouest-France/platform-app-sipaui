FROM nginx:1.20.2

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
