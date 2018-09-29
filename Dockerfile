FROM mhart/alpine-node:latest

RUN apk add --update nodejs nodejs-npm
RUN npm install -g babel-runtime

# Only copy over the node pieces we need from the above image
# FROM alpine:3.7
# COPY --from=0 /usr/bin/node /usr/bin/
# COPY --from=0 /usr/lib/libgcc* /usr/lib/libstdc* /usr/lib/

# RUN apk add --update --no-cache \
#   --repository http://dl-3.alpinelinux.org/alpine/edge/testing \
#   vips-dev fftw-dev python gcc g++ make libc6-compat \
#   nodejs nodejs-npm

WORKDIR /app

# Create app directory
RUN mkdir -p /usr/app
RUN mkdir -p /usr/app/uploads
RUN mkdir -p /usr/app/photos
WORKDIR /usr/app

# Install app dependencies
# COPY package.json /usr/app/

# RUN npm install and make production build
# RUN npm install --prod

# Bundle app source
COPY . /usr/app

# Build production (dist) folder
# RUN npm run build

# Make photos available outside container
VOLUME  ["/usr/app/photos"]

EXPOSE 3001

# Serve dist folder
CMD [ "node", "dist/index.js" ]
