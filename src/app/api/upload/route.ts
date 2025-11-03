import { NextRequest, NextResponse } from 'next/server';

// This is a basic upload handler that can work with multiple storage providers
// Uncomment the provider you want to use after installing dependencies

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file size (max 5MB)
    const MAX_SIZE = 5 * 1024 * 1024; // 5MB
    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: 'File size exceeds 5MB limit' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only images are allowed.' },
        { status: 400 }
      );
    }

    // Option 1: Vercel Blob Storage (uncomment after installing @vercel/blob)
    /*
    import { put } from '@vercel/blob';
    
    const blob = await put(file.name, file, {
      access: 'public',
    });
    
    // Save to database if using Neon
    // await db.insert(media).values({
    //   filename: file.name,
    //   url: blob.url,
    //   type: file.type,
    //   size: file.size,
    // });
    
    return NextResponse.json({ 
      url: blob.url,
      filename: file.name,
      size: file.size 
    });
    */

    // Option 2: Base64 storage (for small files, temporary solution)
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = buffer.toString('base64');
    const dataUrl = `data:${file.type};base64,${base64}`;
    
    return NextResponse.json({ 
      url: dataUrl,
      filename: file.name,
      size: file.size,
      type: file.type,
      message: 'File uploaded (base64). For production, configure Vercel Blob or another storage provider.'
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Upload endpoint ready. POST a file to upload.',
    maxSize: '5MB',
    allowedTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'],
    storageProvider: 'base64 (temporary)',
    recommendation: 'Configure Vercel Blob or Cloudinary for production'
  });
}
