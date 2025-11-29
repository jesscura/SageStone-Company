# Blog CMS Integration Guide

This guide explains how to connect a headless CMS to the SageStone Inc blog feature.

## Supported CMS Providers

The blog service supports multiple CMS providers:

1. **Contentful** (Recommended) - Enterprise-grade headless CMS
2. **Sanity** - Real-time collaborative CMS
3. **Strapi** - Open-source headless CMS
4. **Static** - Default fallback with demo content

## Quick Start

### Option 1: Contentful (Recommended)

1. **Create a Contentful Account**
   - Go to [contentful.com](https://www.contentful.com/) and sign up
   - Create a new Space

2. **Create Content Model**
   
   Create a content type called `blogPost` with the following fields:
   
   | Field Name | Field Type | Required |
   |------------|------------|----------|
   | title | Short text | Yes |
   | slug | Short text | Yes |
   | excerpt | Long text | Yes |
   | content | Rich text or Long text | Yes |
   | category | Short text | Yes |
   | author | Short text | Yes |
   | authorImage | Media (Image) | No |
   | readTime | Short text | No |
   | featuredImage | Media (Image) | No |
   | featured | Boolean | No |
   | tags | Short text (List) | No |
   | metaTitle | Short text | No |
   | metaDescription | Long text | No |
   | publishedAt | Date & time | No |

3. **Get API Credentials**
   - Go to Settings > API keys
   - Create a new API key
   - Copy the Space ID and Content Delivery API access token

4. **Configure Environment Variables**
   
   Create a `.env` file in the project root:
   
   ```env
   VITE_CONTENTFUL_SPACE_ID=your_space_id
   VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token
   VITE_CONTENTFUL_ENVIRONMENT=master
   ```

5. **Add Content**
   - Create blog posts in Contentful
   - Publish them to make them available via the API

### Option 2: Sanity

1. **Create a Sanity Account**
   - Go to [sanity.io](https://www.sanity.io/) and sign up
   - Create a new project

2. **Configure Environment Variables**
   
   ```env
   VITE_SANITY_PROJECT_ID=your_project_id
   VITE_SANITY_DATASET=production
   ```

### Option 3: Strapi

1. **Set up Strapi**
   - Follow [Strapi documentation](https://docs.strapi.io/) to set up your instance

2. **Configure Environment Variables**
   
   ```env
   VITE_STRAPI_URL=https://your-strapi-instance.com
   VITE_STRAPI_TOKEN=your_api_token
   ```

## Content Model Schema

The blog service expects the following data structure for each blog post:

```typescript
interface BlogPost {
  id: string;              // Unique identifier
  slug: string;            // URL-friendly slug
  title: string;           // Post title
  excerpt: string;         // Short description
  content: string;         // Full HTML content
  category: string;        // Category name
  author: string;          // Author name
  authorImage?: string;    // Author avatar URL
  readTime: string;        // e.g., "5 min read"
  image: string;           // Featured image URL
  publishedAt: string;     // ISO 8601 date string
  featured?: boolean;      // Show in featured section
  tags?: string[];         // Array of tag strings
  metaTitle?: string;      // SEO title
  metaDescription?: string; // SEO description
}
```

## Recommended Categories

For consistency, we recommend using these categories:

- eCommerce
- Property Management
- Customer Experience
- Operations
- Remote Work
- Analytics
- Industry Insights

## Image Guidelines

- **Featured Image**: 1200x630px (16:9 aspect ratio)
- **Author Image**: 200x200px (square)
- **Format**: JPEG or WebP for best performance
- Use descriptive alt text for accessibility

## Caching

The blog service includes a 5-minute cache for API responses to improve performance. To manually clear the cache:

```typescript
import { blogService } from './services/blogService';
blogService.clearCache();
```

## Fallback Content

If the CMS is unavailable or not configured, the service automatically falls back to static demo content. This ensures the blog section always has content to display.

## Deployment Considerations

### Environment Variables

When deploying, ensure your CMS environment variables are properly configured:

**Vercel:**
```bash
vercel env add VITE_CONTENTFUL_SPACE_ID
vercel env add VITE_CONTENTFUL_ACCESS_TOKEN
```

**Netlify:**
Add variables in Site settings > Build & deploy > Environment

**Docker:**
```bash
docker run -e VITE_CONTENTFUL_SPACE_ID=xxx -e VITE_CONTENTFUL_ACCESS_TOKEN=xxx ...
```

### CORS

Ensure your CMS allows requests from your deployment domain:
- Add your domain to the allowed origins in your CMS settings
- Contentful: Settings > API keys > Edit key > Allowed domains

## Troubleshooting

### Posts not loading
1. Check console for API errors
2. Verify environment variables are set
3. Ensure content is published in CMS
4. Check CORS settings

### Images not displaying
1. Verify image URLs are accessible
2. Check if images are published
3. Ensure proper URL formatting (https://)

### Slow loading
1. Enable caching (default is 5 minutes)
2. Reduce number of posts per page
3. Optimize images in CMS

## Support

For questions about CMS integration, please refer to:
- [Contentful Documentation](https://www.contentful.com/developers/docs/)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Strapi Documentation](https://docs.strapi.io/)
