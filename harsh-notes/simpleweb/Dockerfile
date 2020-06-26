# Specify a base image
FROM node:alpine

#Creates a specific folder inside container where the files would be copied.
WORKDIR /usr/app

# Install some dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default command
CMD ["npm", "start"]
