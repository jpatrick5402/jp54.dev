FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN npm install --omit=dev
CMD ["npm", "run", "start"]
EXPOSE 3000
