FROM nginx:1.29.3

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
