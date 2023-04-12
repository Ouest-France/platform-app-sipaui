FROM nginx:1.24

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
