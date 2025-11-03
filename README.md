# Steven Whyte - Personal Website

A modern, responsive personal website showcasing Steven Whyte's incredible journey cycling 5000+ miles across Europe while experiencing homelessness firsthand to provide lived-experience advice on homeless services and projects.

## 🌟 New Features

- 📱 **Mental Health App Showcase** - Promoting the upcoming community mental health app
- 🎥 **TikTok Integration** - Direct links to @stevewhyte171 with 745+ videos and 4.8K+ followers
- 💝 **Donation Section** - Monzo bank details for supporting the mission
- 🤝 **Community Support** - Resources and ways to get involved
- 📊 **Real Stats** - Live metrics from TikTok profile

## Features

- 🎨 Modern, beautiful UI with gradient designs
- 🌓 Dark mode support
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Built with Next.js 14 for optimal performance
- 🎯 SEO optimized
- 🎭 Smooth animations and transitions
- 🎨 Tailwind CSS for styling
- 🔍 Lucide React icons
- 🎥 Social media integration (TikTok)
- 💰 Donation integration (Monzo)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
personal-website/
├── src/
│   └── app/
│       ├── globals.css       # Global styles
│       ├── layout.tsx         # Root layout with metadata
│       └── page.tsx           # Main homepage
├── public/                    # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Customization

### Update Contact Information

Edit the contact links in `src/app/page.tsx`:
- Email: Line 297
- LinkedIn: Line 302
- GitHub: Line 307

### Modify Content

All content is in `src/app/page.tsx`. Update:
- Stats (lines 78-107)
- About section (lines 114-145)
- Journey cards (lines 165-232)
- Key insights (lines 252-283)

### Change Colors

Modify the Tailwind config in `tailwind.config.ts` or update gradient classes directly in the components.

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Beautiful icons
- **React 18** - UI library

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

Build the static site:
```bash
npm run build
```

Deploy the `.next` folder to your hosting provider.

## License

© 2025 Steven Whyte. All rights reserved.

## Contact

For inquiries about consultations, speaking engagements, or advisory roles, please reach out through the contact section on the website.
