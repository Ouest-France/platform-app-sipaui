FROM nginx:1.26.1

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
