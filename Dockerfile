FROM nginx:1.20

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
