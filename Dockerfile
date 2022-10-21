FROM nginx:1.22.1

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
