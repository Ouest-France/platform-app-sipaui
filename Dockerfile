FROM nginx:1.29.1

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
