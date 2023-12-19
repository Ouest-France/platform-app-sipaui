FROM nginx:1.25.2

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
