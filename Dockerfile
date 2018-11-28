FROM mhart/alpine-node:10.10

# Install build dependencies
RUN apk add --update --no-cache gcc g++ make libc6-compat nodejs nodejs-npm
RUN apk add vips-dev fftw-dev build-base --no-cache \
  --repository https://dl-3.alpinelinux.org/alpine/edge/testing/ \
  --repository https://dl-3.alpinelinux.org/alpine/edge/main

# Create app directory
RUN mkdir -p /usr/app
RUN mkdir -p /usr/app/uploads
RUN mkdir -p /usr/app/photos
WORKDIR /usr/app

# Install app dependencies
COPY package.json /usr/app/

# Bundle app source
COPY . /usr/app

# Install npm dependencies and make production build
RUN npm install nopt
RUN npm install -g webpack webpack-cli

RUN npm install --prod

# Build production (dist) folder
RUN npm run build

# Make photos available outside container
VOLUME  ["/usr/app/photos", "/usr/app/uploads"]

EXPOSE 4001

# Serve dist folder
CMD [ "node", "dist/index.js" ]
