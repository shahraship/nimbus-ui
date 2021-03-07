FROM nginx:alpine
LABEL author="Raship Shah"
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
