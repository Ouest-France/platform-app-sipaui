FROM nginx:1.27

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
