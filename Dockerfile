FROM nginx:1.26

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
