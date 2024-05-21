FROM node:22-slim
RUN apt-get update -y && apt-get install -y openssl
WORKDIR /app
COPY package*.json ./
RUN npm install
ENV DATABASE_URL=mongodb+srv://Cluster35834:15531553@cluster35834.dogsowr.mongodb.net/myFirstDatabase
COPY . .
RUN npx prisma generate
EXPOSE 3000
CMD npm start
