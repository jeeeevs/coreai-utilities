# coreai-utilities

A monorepo for CoreAI utilities and applications.

## Project Structure

- **packages/**: Shared packages and libraries
  - **core/**: Core utility library
- **apps/**: Applications built on top of shared packages
  - **tools/**: Rest APIs
  - **views/**: User-facing views and UI

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

### Install dependencies

```bash
pnpm install
```


### Development

Run the applications in development mode:

```bash
pnpm dev:tools
pnpm dev:views
```

### Building for Production

```bash
pnpm run build
```
