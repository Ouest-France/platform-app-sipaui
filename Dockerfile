FROM nginx:1.25.1

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
