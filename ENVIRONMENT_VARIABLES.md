# Environment Variables

This project uses environment variables for configuring the site URL.

## Setup

Create a `.env.local` file in the root directory with the following content:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Available Environment Variables

- `NEXT_PUBLIC_SITE_URL` - The base URL of your site (e.g., https://sqrtlabs.com)

## Usage

The environment variables are used throughout the application for:

1. Metadata URLs in OpenGraph and Twitter cards
2. Sitemap generation
3. RSS feed generation
4. Robots.txt generation
5. Structured data (JSON-LD) generation

## Default Values

If no environment variables are set, the application will default to:

- `NEXT_PUBLIC_SITE_URL`: https://sqrtlabs.com

## Deployment

When deploying to production, make sure to set the `NEXT_PUBLIC_SITE_URL` environment variable to your production domain.