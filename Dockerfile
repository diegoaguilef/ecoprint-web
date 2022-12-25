FROM ruby:3.1.3-alpine3.16
RUN apk --no-cache update && apk add --update --no-cache nodejs
RUN apk --update --no-cache add --virtual build_deps \
    build-base ruby-dev libc-dev linux-headers \
    postgresql-dev libxml2-dev libxslt-dev \
    tzdata curl yarn vips-dev shared-mime-info
RUN mkdir /usr/src/app/
WORKDIR /usr/src/app/
COPY Gemfile Gemfile.lock ./
RUN RAILS_ENV=production bundle install
COPY . /usr/src/app/
EXPOSE 3000
RUN ["chmod", "+x", "/usr/src/app/init.sh"]