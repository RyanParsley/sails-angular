FROM node:latest

# Build dependencies
RUN apt-get update \
          && apt-get -y install ruby-full \
          && gem install sass

RUN npm install -g pm2@latest

ADD docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

RUN mkdir -p /var/www/rf-client-org
WORKDIR /var/www/rf-client-org

EXPOSE 80 443

ENTRYPOINT ["/docker-entrypoint.sh"]
