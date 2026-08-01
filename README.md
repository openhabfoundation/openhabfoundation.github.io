# openHAB Foundation Website

This repository contains the source code for the openHAB Foundation e.V. website, built with [VitePress](https://vitepress.dev/).

## Prerequisites

Node.js (v20+ recommended) is required. Corepack can be used to manage `pnpm`.

## Installation & Setup

### Enable / Install `pnpm`

Enable `pnpm` using Node Corepack:

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

Alternatively, install it globally via `npm`:

```bash
npm install -g pnpm
```

### Install Dependencies

Install project dependencies:

```bash
pnpm install
```

## Development

Start the local development server with hot-reloading:

```bash
pnpm run dev
```

Open `http://localhost:5173` (or the URL displayed in the terminal) in your browser.

## Build for Production

Build the static site for production deployment:

```bash
pnpm run build
```

The compiled output will be located in `.vitepress/dist`.

### Preview Production Build

Preview the built static site locally:

```bash
pnpm run preview
```
