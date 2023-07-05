#use official node.js runtime as the base image
FROM node:14

#set the working directory in the container
WORKDIR /app

#Copy package.json and package-lock.json to WORKDIR 
COPY package*.json ./

#Install dependencies
RUN npm install

#Copy the application code to working directory
COPY . .

#Build react app for production
RUN npm run build 

#Expose the port on which react app will run 
EXPOSE 3000

#Start the react app
CMD ["npm","start"]