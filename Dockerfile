FROM node:20-alpine AS development-dependencies-env
RUN corepack enable && corepack prepare pnpm@10.0.0 --activate
COPY . /app
WORKDIR /app
ENV HUSKY=0
RUN pnpm install --frozen-lockfile

FROM node:20-alpine AS production-dependencies-env
RUN corepack enable && corepack prepare pnpm@10.0.0 --activate
COPY ./package.json pnpm-lock.yaml /app/
WORKDIR /app
ENV HUSKY=0
RUN pnpm install --prod --frozen-lockfile

FROM node:20-alpine AS build-env
RUN corepack enable && corepack prepare pnpm@10.0.0 --activate
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN pnpm build

FROM node:20-alpine
RUN corepack enable && corepack prepare pnpm@10.0.0 --activate
COPY ./package.json pnpm-lock.yaml /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
WORKDIR /app
CMD ["pnpm", "start"]
