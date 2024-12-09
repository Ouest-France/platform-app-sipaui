FROM nginx:1.27.3

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
