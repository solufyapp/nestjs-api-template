<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="128" alt="Nest Logo" /></a>
</p>

<p align="center">
  <a href="https://github.com/solufyapp/nestjs-api-template" alt="Repo">
    <b>NestJS Template</b>
  </a>
</p>

<div align="center">
  <div style="width: fit-content; display: flex; align-items: flex-start; gap: 4px;">    
    <img alt="Pnpm" src="https://img.shields.io/badge/pnpm-f69220?style=flat&logo=pnpm&logoColor=white">
    <img alt="Fastify" src="https://img.shields.io/badge/fastify-378e5e?style=flat&logo=fastify&logoColor=white">
    <img alt="Docker" src="https://img.shields.io/badge/docker-2496ed?style=flat&logo=docker&logoColor=white">
    <img alt="Prisma" src="https://img.shields.io/badge/prisma-6865ff?style=flat&logo=prisma&logoColor=white">
    <img alt="Swc" src="https://img.shields.io/badge/swc-cc846b?style=flat&logo=swc&logoColor=white">
    <img alt="Biome" src="https://img.shields.io/badge/biome-60a5fa?style=flat&logo=biome&logoColor=white">
    <img alt="Configify" src="https://img.shields.io/badge/configify-e0234e?style=flat&logo=dotenv&logoColor=white">
  </div>
</div>

## Features

- [PNPM](https://pnpm.io/): faster dependencies management than NPM.
- [Fastify](https://fastify.dev/): faster http requests handling than Express.
- [Docker](https://www.docker.com/): already dockerized (plus a docker compose to run PostgreSQL locally).
- [Prisma](https://www.prisma.io/): type-safety database ORM. (defaults to PostgreSQL)
- [SWC](https://swc.rs/): faster compiling times than Webpack.
- [BiomeJS](https://biomejs.dev/): faster linting and formatting than ESLint and Prettier.
- [Configify](https://github.com/it-gorillaz/configify): easy env variables management for NestJS. (compatible with class-validator)
- [Husky](https://typicode.github.io/husky/): fast native git hooks.
- Premade CI workflow for Github.
- Using ESM modules.

## Requirements

- [Node.js](https://nodejs.org/) (v18+)
- [Docker](https://www.docker.com/)
- [PNPM](https://pnpm.io/)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/solufyapp/nestjs-api-template.git
   cd nestjs-api-template
   ```

2. **Set up environment variables:**

   Copy the `.env.example` file to `.env`.

   ```bash
   cp .env.example .env
   ```

   Edit the `.env` file with your own configuration.

3. **Install dependencies:**

   ```bash
   pnpm install
   ```

## Running the app

```bash
# development
pnpm start

# watch mode
pnpm start:dev

# production mode
pnpm start:prod
```

## Linting and formatting

```bash
# format only
pnpm format

# lint, format and organize imports
pnpm lint

# lint without fixing
pnpm lint:ci

# lint staged files only
pnpm lint:staged
```

## Contributing

Feel free to contribute with suggestions or bug reports at the [template reposity](https://github.com/solufyapp/nestjs-api-template).

## Authors

- [@joaotonaco](https://github.com/joaotonaco)
