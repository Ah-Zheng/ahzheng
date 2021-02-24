# FROM node:14
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN yarn
# COPY ./dist .
# CMD ["node", "dist/main"]

FROM node:14
COPY ./resource/three-kingdoms /usr/src/app