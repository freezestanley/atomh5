#!/bin/bash

if [ $DEPLOY_ENV = 'dev' ]
then
  sed -i 's/<placeholder>/http:\/\/demo.net/' /etc/nginx/conf.d/nginx_app.conf
  sed -i 's/<servername>/demo.com/' /etc/nginx/conf.d/nginx_app.conf

elif [ $DEPLOY_ENV = 'test' ]
then
  sed -i 's/<placeholder>/http:\/\/demo.net/' /etc/nginx/conf.d/nginx_app.conf
  sed -i 's/<servername>/demo.com/' /etc/nginx/conf.d/nginx_app.conf

elif [ $DEPLOY_ENV = 'test_public' ]
then
  sed -i 's/<placeholder>/http:\/\/demo.net/' /etc/nginx/conf.d/nginx_app.conf
  sed -i 's/<servername>/demo.com/' /etc/nginx/conf.d/nginx_app.conf

elif [ $DEPLOY_ENV = 'pre' ]
then
  sed -i 's/<placeholder>/http:\/\/demo.pre.net/' /etc/nginx/conf.d/nginx_app.conf
  sed -i 's/<servername>/demo.com/' /etc/nginx/conf.d/nginx_app.conf

elif [ $DEPLOY_ENV = 'prd' ]
then
  sed -i 's/<placeholder>/http:\/\/demo.prd.net/' /etc/nginx/conf.d/nginx_app.conf
  sed -i 's/<servername>/demo.com/' /etc/nginx/conf.d/nginx_app.conf

fi

nginx -g "daemon off"\;