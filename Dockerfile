FROM nginx:1.26.0

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
