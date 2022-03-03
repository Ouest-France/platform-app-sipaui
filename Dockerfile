FROM nginx:stable

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
