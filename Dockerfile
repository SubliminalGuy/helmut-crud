# Alpine image with node.js
FROM node:18-alpine
# Working Directory
WORKDIR /app
# Copy the package.json file
COPY package.json .
# Install all dependencies
RUN npm install
# Copy the current directory contents into the container at /app
COPY . .

RUN npm run build

EXPOSE 3002

CMD ["npm", "run", "start"]