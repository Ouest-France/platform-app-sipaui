FROM nginx:1.27.2

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
