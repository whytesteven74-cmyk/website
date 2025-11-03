"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Users, Video, Heart, TrendingUp, Bike, MessageCircle } from "lucide-react";

interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

const SOCIAL_STATS: Stat[] = [
  {
    label: "TikTok Followers",
    value: 4800,
    suffix: "+",
    icon: <Users className="w-6 h-6" />,
    color: "from-pink-500 to-purple-500",
    description: "@stevewhyte171"
  },
  {
    label: "Videos Created",
    value: 745,
    suffix: "+",
    icon: <Video className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    description: "Documenting the journey"
  },
  {
    label: "Total Views",
    value: 1250000,
    suffix: "+",
    icon: <Heart className="w-6 h-6" />,
    color: "from-red-500 to-pink-500",
    description: "Hearts touched worldwide"
  },
  {
    label: "Miles Cycled",
    value: 5000,
    suffix: "+",
    icon: <Bike className="w-6 h-6" />,
    color: "from-green-500 to-teal-500",
    description: "Across Europe"
  },
  {
    label: "Countries Visited",
    value: 12,
    icon: <TrendingUp className="w-6 h-6" />,
    color: "from-yellow-500 to-orange-500",
    description: "Building connections"
  },
  {
    label: "Lives Impacted",
    value: 10000,
    suffix: "+",
    icon: <MessageCircle className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-500",
    description: "Through advocacy"
  }
];

export default function SocialStats() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const formatValue = (value: number) => {
    if (value >= 1000000) {
      return { value: value / 1000000, suffix: "M+" };
    }
    if (value >= 1000) {
      return { value: value / 1000, suffix: "K+" };
    }
    return { value, suffix: "" };
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Impact by the Numbers
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Real metrics from a real journey. Every number represents lives touched and miles traveled.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOCIAL_STATS.map((stat, index) => {
            const formatted = formatValue(stat.value);
            return (
              <div
                key={stat.label}
                className="relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"
                     style={{
                       background: `linear-gradient(135deg, ${stat.color.split(' ')[1].split('-')[1]}, ${stat.color.split(' ')[3].split('-')[1]})`
                     }} />
                
                <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-4`}>
                    {stat.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    {stat.label}
                  </h3>

                  <div className="flex items-baseline gap-1 mb-2">
                    {stat.prefix && (
                      <span className="text-3xl font-bold text-slate-900 dark:text-white">
                        {stat.prefix}
                      </span>
                    )}
                    <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r" 
                          style={{
                            backgroundImage: `linear-gradient(135deg, ${stat.color.split(' ')[1].split('-')[1]}, ${stat.color.split(' ')[3].split('-')[1]})`
                          }}>
                      {hasAnimated ? (
                        <CountUp
                          start={0}
                          end={formatted.value}
                          duration={2.5}
                          decimals={formatted.suffix === "M+" ? 1 : 0}
                          delay={index * 0.1}
                        />
                      ) : (
                        0
                      )}
                    </span>
                    <span className="text-2xl font-bold text-slate-600 dark:text-slate-400">
                      {formatted.suffix || stat.suffix}
                    </span>
                  </div>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {stat.description}
                  </p>

                  {/* Progress bar */}
                  <div className="mt-4 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-1000 ease-out`}
                      style={{
                        width: hasAnimated ? '100%' : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
            Join the journey and help us reach even more people
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.tiktok.com/@stevewhyte171"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-slate-800 transition"
            >
              Follow on TikTok
            </a>
            <a
              href="#support"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
            >
              Support the Mission
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
