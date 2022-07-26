FROM node:16

# Create app directory
WORKDIR /bullish_coding_challenge

# Install linux tools
RUN apt-get -y update
RUN apt-get install -y curl libnss3

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY . /bullish_coding_challenge

CMD ["npm", "run", "all_tests"]