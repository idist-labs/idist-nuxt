FROM node:16.13.1-alpine
RUN apk add tzdata && cp /usr/share/zoneinfo/Asia/Ho_Chi_Minh /etc/localtime && echo "Asia/Ho_Chi_Minh" >  /etc/timezone
WORKDIR /app
COPY ./ /app
RUN npm install -g npm && npm install && npm run build
ENV HOST 0.0.0.0
EXPOSE 3000
CMD ["npm", "start"]
