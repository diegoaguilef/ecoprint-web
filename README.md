# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

# Ruby version
* 3.1.2

# System dependencies
* nodejs
* yarn o npm
* git
* linux: libpq-dev + postgresql
* windows:
    - Ruby on rails
    - pgAdmin + postgresql

# Configuration
* Run:

        gem install bundler
        budle install
        yarn o npm install
# Database creation
* Run:

        rails db:drop db:create
# Database initialization
* Run:

        rails db:migrate db:seed



# Deployment instructions

Development environment:
- Run Rails App:

        rails s
- Run Webpacker:

        bin/webpack-dev-server
