# Company Pro

![Company Pro](https://imgix.cosmicjs.com/44b14940-11b8-11f1-9b1d-01a3fa4a4153-photo-1533750349088-cd871a92f312-1771961853453.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive company website showcasing services, team members, and client testimonials — powered by [Cosmic](https://www.cosmicjs.com) and built with Next.js 16.

## Features

- 🛠️ **Services Section** — Dynamic service cards with icons, descriptions, and featured images
- 👥 **Team Members** — Professional profile cards with photos, roles, bios, and contact info
- ⭐ **Testimonials** — Client testimonial cards with quotes, photos, and company names
- 🎨 **Modern Design** — Clean navy & indigo color palette with gradient accents
- 📱 **Fully Responsive** — Adaptive layouts for mobile, tablet, and desktop
- ⚡ **Server-Side Rendered** — Fast page loads with Next.js 16 Server Components
- 🔗 **Smooth Scroll Navigation** — Anchor-based nav for seamless single-page experience

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=699dfdb239b0ab3729a93333&clone_repository=699dfedd39b0ab3729a93358)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "A company website with services, team members, and testimonials"

### Code Generation Prompt

> "Based on the content model I created for 'A company website with services, team members, and testimonials', now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [Cosmic](https://www.cosmicjs.com) — Headless CMS for content management
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (or Node.js 18+)
- A [Cosmic](https://www.cosmicjs.com) account with the company content model

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd company-pro
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables by adding them to your hosting platform or local `.env.local`:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Cosmic SDK Examples

### Fetching Services
```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Team Members
```typescript
const { objects: teamMembers } = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Testimonials
```typescript
const { objects: testimonials } = await cosmic.objects
  .find({ type: 'testimonials' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app integrates with three Cosmic object types:

| Object Type | Fields | Purpose |
|---|---|---|
| **Services** | description, icon, featured_image | Company service offerings |
| **Team Members** | role, bio, photo, email | Team member profiles |
| **Testimonials** | quote, company, photo | Client testimonials |

All content is managed through your [Cosmic dashboard](https://www.cosmicjs.com/docs) and fetched server-side for optimal performance and SEO.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Add environment variables in the Vercel dashboard
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import the repository on [Netlify](https://netlify.com)
3. Set build command to `bun run build`
4. Add environment variables in the Netlify dashboard
5. Deploy!
<!-- README_END -->