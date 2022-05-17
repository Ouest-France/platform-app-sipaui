FROM nginx:mainline

# Configuration nginx
COPY ./dist/ /usr/share/nginx/html
