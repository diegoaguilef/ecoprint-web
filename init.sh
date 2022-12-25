#!/bin/sh
ln -snf /usr/share/zoneinfo/America/Santiago /etc/localtime && echo "America/Santiago" > /etc/timezone
rm -rf /usr/src/app/tmp/pids/server.pid
bundle exec rails db:create
bundle exec rails db:migrate
gem install foreman
rails s -p 3000 -b '0.0.0.0'