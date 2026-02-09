FROM nginx:1.29.5

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
