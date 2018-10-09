FROM nginx:1.11

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
