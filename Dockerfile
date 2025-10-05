FROM nginx:1.25-alpine

RUN rm -rf /usr/share/nginx/html/*
COPY public /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD wget -qO- http://127.0.0.1/ || exit 1
