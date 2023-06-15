FROM nginx:1.25

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
