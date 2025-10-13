FROM nginx:1.29.2

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
