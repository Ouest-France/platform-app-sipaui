FROM nginx:1.29.4

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
