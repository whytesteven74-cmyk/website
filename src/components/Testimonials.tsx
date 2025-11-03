"use client";

import { useEffect, useRef } from "react";
import { Quote, Star } from "lucide-react";
// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
  date: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Homeless Charity Director",
    content: "Steven's lived experience brings invaluable insight to our projects. His journey across Europe while experiencing homelessness firsthand has transformed how we approach service delivery.",
    rating: 5,
    date: "October 2024"
  },
  {
    id: "2",
    name: "Dr. James Chen",
    role: "Mental Health Professional",
    content: "The mental health app Steven is developing addresses real gaps in community support. His approach combining lived experience with practical solutions is exactly what the sector needs.",
    rating: 5,
    date: "September 2024"
  },
  {
    id: "3",
    name: "Emma Thompson",
    role: "TikTok Follower",
    content: "Following Steven's journey has opened my eyes to the reality of homelessness. His daily videos show the human side of a crisis too often ignored. Truly inspiring work.",
    rating: 5,
    date: "October 2024"
  },
  {
    id: "4",
    name: "Michael Roberts",
    role: "Local Council Member",
    content: "Steven's advocacy has directly influenced our homeless strategy. His practical recommendations based on real experience have helped us create more effective support systems.",
    rating: 5,
    date: "August 2024"
  },
  {
    id: "5",
    name: "Lisa Anderson",
    role: "Community Supporter",
    content: "What Steven is doing is remarkable. Cycling 5000+ miles to understand and help homeless communities shows dedication beyond words. His work saves lives.",
    rating: 5,
    date: "September 2024"
  },
  {
    id: "6",
    name: "David Wilson",
    role: "Social Worker",
    content: "Steven's insights from the frontline are invaluable for professionals like me. He bridges the gap between policy and reality in ways textbooks never could.",
    rating: 5,
    date: "October 2024"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Voices of Impact
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Real stories from people whose lives have been touched by this journey
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="testimonials-swiper"
        >
          {TESTIMONIALS.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 shadow-lg h-full flex flex-col">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-10 h-10 text-blue-500/20" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <blockquote className="flex-grow mb-6">
                  <p className="text-slate-700 dark:text-slate-300 italic">
                    "{testimonial.content}"
                  </p>
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Date */}
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-4">
                  {testimonial.date}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
            Want to share your story or support the mission?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-swiper {
          padding-bottom: 50px !important;
        }
        .testimonials-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        .testimonials-swiper .swiper-pagination-bullet {
          background: #3b82f6;
          opacity: 0.3;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .testimonials-swiper .swiper-button-next,
        .testimonials-swiper .swiper-button-prev {
          color: #3b82f6;
        }
        @media (max-width: 640px) {
          .testimonials-swiper .swiper-button-next,
          .testimonials-swiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
