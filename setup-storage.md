# 🗄️ Storage Setup Guide

## Current Status ✅
- ✅ **Website deployed**: https://stevenwhyte.vercel.app/
- ✅ **Git connected**: Pushed to Bitbucket at `stevework1979/website`
- ✅ **Auto-deploy enabled**: Every push to Bitbucket will deploy automatically

## 📦 Storage Solutions

### 1. **Media Storage Options**

#### Option A: Vercel Blob Storage (Recommended for small files)
```bash
# Install Vercel Blob
pnpm add @vercel/blob

# Add to your API route:
import { put, del, list } from '@vercel/blob';
```

**Pros:** 
- Native Vercel integration
- Simple API
- Good for images < 5MB

**Pricing:** 
- Free tier: 1GB storage
- Paid: $0.15/GB/month

#### Option B: Cloudinary (Best for image optimization)
```bash
# Install Cloudinary
pnpm add cloudinary

# Environment variables needed:
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

**Pros:**
- Automatic image optimization
- On-the-fly transformations
- CDN included

**Free tier:** 25GB storage, 25GB bandwidth/month

#### Option C: Uploadthing (Simple & modern)
```bash
# Install Uploadthing
pnpm add uploadthing @uploadthing/react

# Create app at uploadthing.com
# Add API keys to env
```

**Pros:**
- React components included
- Type-safe
- Simple integration

**Free tier:** 2GB storage

### 2. **Database Setup with Neon**

#### Step 1: Create Neon Database
1. Go to [neon.tech](https://neon.tech)
2. Sign up/login
3. Create new project
4. Copy connection string

#### Step 2: Install Dependencies
```bash
pnpm add @neondatabase/serverless drizzle-orm
pnpm add -D drizzle-kit
```

#### Step 3: Add Environment Variable
```bash
# In Vercel Dashboard or CLI:
DATABASE_URL=postgresql://user:pass@host/database?sslmode=require
```

#### Step 4: Create Database Schema
```typescript
// src/lib/db/schema.ts
import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const media = pgTable('media', {
  id: serial('id').primaryKey(),
  filename: text('filename').notNull(),
  url: text('url').notNull(),
  type: varchar('type', { length: 50 }),
  size: integer('size'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  slug: varchar('slug', { length: 200 }).unique(),
  content: text('content'),
  excerpt: text('excerpt'),
  featuredImage: text('featured_image'),
  published: boolean('published').default(false),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
```

#### Step 5: Database Connection
```typescript
// src/lib/db/index.ts
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });
```

### 3. **Quick Implementation**

#### A. Add Upload API Route
```typescript
// src/app/api/upload/route.ts
import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const form = await request.formData();
  const file = form.get('file') as File;
  
  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  const blob = await put(file.name, file, {
    access: 'public',
  });

  // Save to database
  // await db.insert(media).values({ filename: file.name, url: blob.url, ... });

  return NextResponse.json({ url: blob.url });
}
```

#### B. Add Upload Component
```typescript
// src/components/FileUpload.tsx
'use client';

import { useState } from 'react';

export default function FileUpload() {
  const [uploading, setUploading] = useState(false);
  
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    
    const data = await res.json();
    console.log('Uploaded:', data.url);
    setUploading(false);
  };
  
  return (
    <input 
      type="file" 
      onChange={handleUpload} 
      disabled={uploading}
    />
  );
}
```

## 🚀 Quick Start Commands

### Set Environment Variables
```bash
# Add production URL
echo "NEXT_PUBLIC_SITE_URL=https://stevenwhyte.vercel.app" | /home/steve/.local/share/pnpm/vercel env add NEXT_PUBLIC_SITE_URL production

# Add database URL (after creating Neon database)
echo "DATABASE_URL=your_neon_connection_string" | /home/steve/.local/share/pnpm/vercel env add DATABASE_URL production
```

### Install Storage Dependencies
```bash
# For Vercel Blob
pnpm add @vercel/blob

# For Neon Database
pnpm add @neondatabase/serverless drizzle-orm
pnpm add -D drizzle-kit

# Commit and push
git add .
git commit -m "Add storage dependencies"
git push origin main
```

## 📋 Next Steps

1. **Choose storage solution** (Vercel Blob recommended for simplicity)
2. **Create Neon database** at neon.tech
3. **Add environment variables** in Vercel dashboard
4. **Implement upload functionality**
5. **Push changes** - will auto-deploy!

## 🔗 Useful Links
- [Vercel Blob Docs](https://vercel.com/docs/storage/vercel-blob)
- [Neon Docs](https://neon.tech/docs/introduction)
- [Drizzle ORM Docs](https://orm.drizzle.team)
- [Your Vercel Dashboard](https://vercel.com/whytesteven74-1176s-projects/personal-website)
