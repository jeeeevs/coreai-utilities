# Use a multi-stage Docker build to optimize final image size
FROM node:18-alpine AS base
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm@${PNPM_VERSION:-latest}

# Copy monorepo root files and workspace configuration
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .
# Copy shared and app packages
COPY packages ./packages
COPY apps/tools-views ./apps/tools-views

# Install dependencies and build only the tools-views app
RUN pnpm install --frozen-lockfile --filter tools-views...
RUN pnpm --filter tools-views run build

# Production image
FROM node:18-alpine AS runner
WORKDIR /app

# Install pnpm for production dependencies
RUN npm install -g pnpm@${PNPM_VERSION:-latest}

# Copy monorepo root files and workspace configuration
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .
# Copy shared and app packages
COPY packages ./packages
COPY apps/tools-views ./apps/tools-views

# Install only production dependencies for the tools-views app
RUN pnpm install --prod --frozen-lockfile --filter tools-views...

WORKDIR /app/apps/tools-views
ENV NODE_ENV=production

# Expose default Next.js port
EXPOSE 3000

# Run the Next.js production server
CMD ["pnpm", "start"]