FROM nginx:1.27.4

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
