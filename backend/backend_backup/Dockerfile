FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 5000
RUN chmod +x wait-for.sh
CMD ["./wait-for.sh"]
