FROM nginx:1.28.0

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
