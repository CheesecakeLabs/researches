FROM node:16.13-bullseye-slim AS builder
RUN apt update && apt install -y make
WORKDIR /usr/src/app
COPY . .
RUN apt-get update && apt-get install make
RUN make clean-setup
ENTRYPOINT [ "src/config/entrypoint.sh" ]
