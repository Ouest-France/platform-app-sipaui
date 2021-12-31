FROM nginx:1.21.4

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
