# Use the latest stable Node.js version (20.x)
FROM node:20-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json /app/

# Install npm dependencies
RUN npm install

# Copy the rest of the frontend files
COPY . /app

# Build the React app
RUN npm run build

# Expose the port for the frontend
EXPOSE 3000

# Start the frontend server and print the access link
CMD ["sh", "-c", "npm start && echo 'Frontend is accessible at http://localhost:3000'"]
