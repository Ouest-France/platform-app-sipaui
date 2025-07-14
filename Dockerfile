FROM nginx:1.29.0

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
