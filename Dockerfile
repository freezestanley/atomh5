FROM base-registry.demo.com/env/node-ngx:11.10.1

# ENV NPM_CONFIG_REGISTRY http://npm.demo.com
# ENV NPM_CONFIG_REGISTRY http://r.cnpmjs.org/
# ENV NPM_CONFIG_REGISTRY https://registry.npmjs.com/
ENV NPM_CONFIG_REGISTRY http://registry.npm.taobao.org/
ENV SASS_BINARY_SITE http://registry.npm.taobao.org/node-mirrors/node-sass/

ARG DEPLOY_ENV

WORKDIR /root/app

# Install app dependencies
COPY package.json /root/app/
RUN npm install --no-optional
COPY nginx_app.conf /etc/nginx/conf.d/
# Bundle app source
COPY . /root/app/

RUN rm -f /etc/nginx/conf.d/default.conf && npm run build && rm -rf node_modules && chmod 755 /root -R

EXPOSE 8080

CMD ["sh", "/root/app/start.sh"]
