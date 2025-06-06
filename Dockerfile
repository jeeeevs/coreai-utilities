# Use a multi-stage Docker build to optimize final image size
FROM node:18-alpine AS base
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm@${PNPM_VERSION:-latest}

# Copy monorepo root files and workspace configuration
COPY . ./

# Install dependencies and build only the tools-views app
ARG EXA_API_KEY
ENV EXA_API_KEY="DUMMY_VALUE"
RUN pnpm install --frozen-lockfile
RUN pnpm build

# Install only production dependencies for the tools-views app
RUN pnpm install --prod --frozen-lockfile

ENV NODE_ENV=production

# Expose default Next.js port
EXPOSE 3000

# Run the Next.js production server (uses distDir=dist)
CMD ["pnpm", "start"]