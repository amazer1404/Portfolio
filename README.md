# Karan Pawar | Cinematic Creative Director Portfolio

Welcome to the foundation of your award-winning Filmmaker and Creative Director portfolio. This project is optimized for performance, modern animations (Framer Motion), cinematic styling (Tailwind CSS), and SEO (Next.js).

## Folder Structure

```
d:\portfolio
├── public/                 # Static assets (images, videos, fonts)
├── src/
│   ├── app/                # Next.js 14 App Router (routing & layout)
│   │   ├── globals.css     # Global styles & cinematic grain texture
│   │   ├── layout.tsx      # Main wrapper & metadata for all pages
│   │   └── page.tsx        # Homepage mapping out all 13 sections
│   ├── components/
│   │   ├── ui/             # Reusable base elements (buttons, cards)
│   │   └── sections/       # Main scrolling sections of the single page
│   ├── data/
│   │   ├── projects.ts     # Data array for case studies
│   │   └── reels.ts        # Data array for reel showcases
│   └── lib/                # Utility functions & GSAP/Lenis hooks
```

## How to Run Locally

If you haven't created the full Next.js project container yet (due to Windows execution policies):
1. Open Command Prompt (not PowerShell) or fix execution policies.
2. Run `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
3. If it asks you to clear the directory or fails because it's not empty, make sure you back up the files I just created (`src/app/page.tsx`, `layout.tsx`, `globals.css`) and restore them after scaffolding.

Once installed:
1. Run `npm install framer-motion clsx tailwind-merge @studio-freight/react-lenis` to install the animation and smooth-scrolling dependencies.
2. Start the local server: `npm run dev`
3. View the site at: `http://localhost:3000`

## How to Add Projects

We separate our project data so the code is beginner-friendly. 
Go to `src/data/projects.ts` (create this file if it doesn't exist) and structure it like an array:
```javascript
export const featuredProjects = [
  {
    id: "the-quiet-quit",
    title: "The Quiet Quit",
    category: "Cinematic Reel Series",
    year: "2026",
    role: "Creative Lead, Director, Editor",
    description: "Led end-to-end production of a multi-episode cinematic reel series...",
    thumbnail: "/images/quiet-quit.jpg",
    tags: ["Editing", "Direction", "Sound Design"],
    // Add additional fields for the detailed sub-page later
  }
];
```

## How to Replace Images
Drop your placeholder/final photos into the `/public/images` folder (which you can create) and your video files into `/public/videos`. When referencing them in your `<img>` tags or data files, use paths like `"/images/your-photo.jpg"`.

## How to Deploy to Vercel
1. Sign up for a free Vercel account (`vercel.com`).
2. Push this folder to a GitHub repository.
3. Import your GitHub repository in your Vercel dashboard.
4. Leave defaults (Framework: Next.js) and click **Deploy**. Vercel will give you a public URL. Every future push to the `main` branch will automatically update the live site.
