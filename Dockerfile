# Base image
FROM node:20-slim

# PNPM env variables
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Create app directory
WORKDIR /usr/src/app

# Required for Prisma Client to work in container
RUN apt-get update && apt-get install -y openssl

# Install pnpm
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && corepack prepare

# Install dependencies based on the preferred package manager
ENV CI=true
RUN pnpm fetch
RUN pnpm install --frozen-lockfile --recursive --prefer-offline

# Bundle app source
COPY . ./

# Generate prisma client
RUN pnpm db:generate

# Creates a "dist" folder with the production build
RUN pnpm build

# Set environment variables for production
ENV NODE_ENV=production

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
