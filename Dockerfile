FROM mhart/alpine-node:latest

# Create app directory
RUN mkdir -p /usr/app
RUN mkdir -p /usr/app/uploads
RUN mkdir -p /usr/app/photos
WORKDIR /usr/app

# Install app dependencies
# COPY package.json /usr/app/

# RUN npm install and make production build
# RUN npm install

# Bundle app source
COPY . /usr/app

# Build production (dist) folder
# RUN npm run build

# Make photos available outside container
VOLUME  ["/usr/app/photos"]

EXPOSE 3001

# Serve dist folder
CMD [ "node", "dist/index.js" ]
