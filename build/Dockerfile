FROM node:16-alpine

ADD dist/ /app/dist/
ADD package.json yarn.lock /app/

WORKDIR /app

RUN yarn install --prod

ENTRYPOINT [ "node" ]

CMD [ "dist/src/main.js" ]
