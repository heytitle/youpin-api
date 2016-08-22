FROM mhart/alpine-node:6.3

MAINTAINER YouPin Team <dev@youpin.city>

RUN echo "ipv6" >> /etc/modules
RUN echo "http://dl-1.alpinelinux.org/alpine/edge/main" >> /etc/apk/repositories; \
    echo "http://dl-2.alpinelinux.org/alpine/edge/main" >> /etc/apk/repositories; \
    echo "http://dl-3.alpinelinux.org/alpine/edge/main" >> /etc/apk/repositories; \
    echo "http://dl-4.alpinelinux.org/alpine/edge/main" >> /etc/apk/repositories; \
    echo "http://dl-5.alpinelinux.org/alpine/edge/main" >> /etc/apk/repositories

RUN apk add -U libc6-compat
COPY package.json /code/package.json
RUN cd /code && npm install

COPY . /code

WORKDIR /code

CMD ["npm", "start"]
