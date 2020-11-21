FROM node:12

COPY ./ /app
WORKDIR /app
RUN npm i
ENV NODE_ENV=production
CMD node app.js
