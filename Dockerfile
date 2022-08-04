FROM nginx:1.22

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
