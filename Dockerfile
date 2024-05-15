FROM nginx:1.25.5

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
