FROM ubuntu:20.04

# Basic setup
RUN rm /bin/sh && ln -s /bin/bash /bin/sh
ENV TZ=Europe/Moscow
ENV DEBIAN_FRONTEND=noninteractive
ENV NVM_DIR /nvm


RUN apt update
RUN apt install -y tzdata
RUN apt install -y curl

# Install NVM
RUN mkdir /nvm
RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.39.0/install.sh | bash
RUN . ${NVM_DIR}/nvm.sh && nvm install 16.14.2

# Copy files
WORKDIR /app

COPY package.json .
COPY tsconfig.json .
COPY webpack.config.js .
COPY src src
COPY public public

# Setup environment
RUN . ${NVM_DIR}/nvm.sh && npm install

# Build application
RUN . ${NVM_DIR}/nvm.sh && npm run build