FROM node:11.10.0

RUN apt-get update -y && \
    apt-get install -y gettext libgettextpo-dev && \
    rm -rf /var/lib/apt/lists/*

RUN mkdir -p /app
WORKDIR /app

COPY package-lock.json package.json /app/
RUN npm install

EXPOSE 8000