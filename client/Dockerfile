FROM node:6

RUN mkdir -p /opt/app && \
  cd /opt/app && \
  wget https://github.com/Yelp/dumb-init/releases/download/v1.2.0/dumb-init_1.2.0_amd64.deb && \
  dpkg -i dumb-init_*.deb && \
  npm i -g yarn --silent && npm uninstall -g npm --silent

WORKDIR /opt/app

COPY package.json yarn.lock ./

RUN yarn install --pure-lockfile --silent

COPY . ./

RUN yarn run build

ENTRYPOINT [ "dumb-init", "--" ]
CMD [ "yarn", "start" ]
