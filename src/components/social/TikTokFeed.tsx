"use client";

import { useEffect, useState } from "react";
import { Play, Heart, MessageCircle, Share2 } from "lucide-react";

interface TikTokVideo {
  id: string;
  title: string;
  thumbnail: string;
  views: number;
  likes: number;
  comments: number;
  url: string;
}

// Replace these with your actual TikTok video IDs
// Format: https://www.tiktok.com/@stevewhyte171/video/VIDEO_ID
const TIKTOK_VIDEOS: TikTokVideo[] = [
  {
    id: "1",
    title: "Day 145: Crossing the Alps",
    thumbnail: "https://picsum.photos/300/400?random=1",
    views: 12500,
    likes: 1843,
    comments: 234,
    url: "https://www.tiktok.com/@stevewhyte171/video/7420123456789" // Replace with actual video ID
  },
  {
    id: "2", 
    title: "Meeting homeless communities in Paris",
    thumbnail: "https://picsum.photos/300/400?random=2",
    views: 8900,
    likes: 1232,
    comments: 189,
    url: "https://www.tiktok.com/@stevewhyte171"
  },
  {
    id: "3",
    title: "5000 miles and counting!",
    thumbnail: "https://picsum.photos/300/400?random=3",
    views: 45600,
    likes: 6754,
    comments: 567,
    url: "https://www.tiktok.com/@stevewhyte171"
  },
  {
    id: "4",
    title: "Mental health on the road",
    thumbnail: "https://picsum.photos/300/400?random=4",
    views: 23400,
    likes: 3421,
    comments: 412,
    url: "https://www.tiktok.com/@stevewhyte171"
  },
  {
    id: "5",
    title: "Community support in Berlin",
    thumbnail: "https://picsum.photos/300/400?random=5",
    views: 15600,
    likes: 2341,
    comments: 321,
    url: "https://www.tiktok.com/@stevewhyte171"
  },
  {
    id: "6",
    title: "Why I'm doing this journey",
    thumbnail: "https://picsum.photos/300/400?random=6",
    views: 67800,
    likes: 9876,
    comments: 892,
    url: "https://www.tiktok.com/@stevewhyte171"
  }
];

export default function TikTokFeed() {
  const [videos, setVideos] = useState<TikTokVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call - replace with actual TikTok API
    setTimeout(() => {
      setVideos(TIKTOK_VIDEOS);
      setLoading(false);
    }, 1000);
  }, []);

  const formatCount = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="aspect-[3/4] bg-slate-200 dark:bg-slate-700 animate-pulse rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Latest from TikTok
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Follow my journey @stevewhyte171 • 745+ videos • 4.8K+ followers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[3/4] bg-slate-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* Thumbnail */}
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
              </div>

              {/* Stats */}
              <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                <p className="text-xs font-semibold mb-2 line-clamp-2">{video.title}</p>
                <div className="flex items-center gap-3 text-xs">
                  <span className="flex items-center gap-1">
                    <Play className="w-3 h-3" />
                    {formatCount(video.views)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    {formatCount(video.likes)}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" />
                    {formatCount(video.comments)}
                  </span>
                </div>
              </div>

              {/* TikTok logo */}
              <div className="absolute top-2 right-2 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.34 6.34 0 0 0-.88-.07 6.33 6.33 0 0 0 0 12.66A6.34 6.34 0 0 0 15.82 16V8.69a8.16 8.16 0 0 0 4.65 1.46V6.7a4.79 4.79 0 0 1-.88 0z" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.tiktok.com/@stevewhyte171"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-slate-800 transition"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.34 6.34 0 0 0-.88-.07 6.33 6.33 0 0 0 0 12.66A6.34 6.34 0 0 0 15.82 16V8.69a8.16 8.16 0 0 0 4.65 1.46V6.7a4.79 4.79 0 0 1-.88 0z" />
            </svg>
            View All Videos on TikTok
          </a>
        </div>
      </div>
    </section>
  );
}
