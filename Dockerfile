FROM nginx:1.27.5

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
