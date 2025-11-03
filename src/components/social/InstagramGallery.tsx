"use client";

import { useState } from "react";
import { Instagram, Heart, MessageCircle, MapPin } from "lucide-react";

interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  location?: string;
  url: string;
}

// Mock Instagram posts - replace with actual Instagram API data
const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "1",
    image: "https://picsum.photos/400/500?random=11",
    caption: "Starting the journey in Amsterdam. 5000 miles ahead! 🚴",
    likes: 234,
    comments: 45,
    location: "Amsterdam, Netherlands",
    url: "https://instagram.com/stevewhyte171"
  },
  {
    id: "2",
    image: "https://picsum.photos/400/600?random=12",
    caption: "Meeting incredible people at the Berlin homeless shelter",
    likes: 567,
    comments: 89,
    location: "Berlin, Germany",
    url: "https://instagram.com/stevewhyte171"
  },
  {
    id: "3",
    image: "https://picsum.photos/400/400?random=13",
    caption: "Alps crossing complete! The views were worth every pedal",
    likes: 892,
    comments: 123,
    location: "Swiss Alps",
    url: "https://instagram.com/stevewhyte171"
  },
  {
    id: "4",
    image: "https://picsum.photos/400/450?random=14",
    caption: "Community kitchen in Paris doing amazing work",
    likes: 445,
    comments: 67,
    location: "Paris, France",
    url: "https://instagram.com/stevewhyte171"
  },
  {
    id: "5",
    image: "https://picsum.photos/400/550?random=15",
    caption: "Rain or shine, the mission continues",
    likes: 334,
    comments: 56,
    location: "Brussels, Belgium",
    url: "https://instagram.com/stevewhyte171"
  },
  {
    id: "6",
    image: "https://picsum.photos/400/500?random=16",
    caption: "1000 miles done! Your support keeps me going",
    likes: 1023,
    comments: 234,
    location: "Prague, Czech Republic",
    url: "https://instagram.com/stevewhyte171"
  },
  {
    id: "7",
    image: "https://picsum.photos/400/600?random=17",
    caption: "Sunset camping after a long day of cycling",
    likes: 778,
    comments: 99,
    location: "Austrian Countryside",
    url: "https://instagram.com/stevewhyte171"
  },
  {
    id: "8",
    image: "https://picsum.photos/400/400?random=18",
    caption: "Local volunteers providing meals to those in need",
    likes: 556,
    comments: 78,
    location: "Munich, Germany",
    url: "https://instagram.com/stevewhyte171"
  },
  {
    id: "9",
    image: "https://picsum.photos/400/500?random=19",
    caption: "Mental health matters. Taking a rest day to recharge",
    likes: 667,
    comments: 145,
    location: "Lake Geneva",
    url: "https://instagram.com/stevewhyte171"
  }
];

export default function InstagramGallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Instagram className="w-8 h-8 text-purple-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              @stevewhyte171
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Journey Through the Lens
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Visual stories from 5000+ miles across Europe
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer"
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                  hoveredId === post.id ? "opacity-100" : "opacity-0"
                }`}>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm mb-2 line-clamp-2">{post.caption}</p>
                    
                    {/* Location */}
                    {post.location && (
                      <p className="text-xs text-white/80 flex items-center gap-1 mb-2">
                        <MapPin className="w-3 h-3" />
                        {post.location}
                      </p>
                    )}

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-xs">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {post.comments}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Instagram Icon */}
                <div className="absolute top-2 right-2 w-8 h-8 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram className="w-5 h-5 text-purple-600" />
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/stevewhyte171"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
          >
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
