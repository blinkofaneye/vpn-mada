FROM node:17.9-alpine3.14 as dev
WORKDIR /opt/app
RUN apk update && apk add sudo git openssh
