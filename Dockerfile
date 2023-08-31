FROM node:16-alpine
WORKDIR /vue-root
COPY package*.json ./
COPY src ./
COPY dist ./
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "run", "serve"]