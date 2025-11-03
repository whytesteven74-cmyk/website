import { Bike, Heart, MapPin, Users, TrendingUp, Mail, Video, Smartphone, DollarSign, MessageCircle, Share2, Play } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import NavSpy from '@/components/NavSpy';

export default function Home() {
  return (
    <main id="main" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      <NavSpy />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <Bike className="w-4 h-4" />
              <span>5000+ Miles Cycled Across Europe</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Lived Experience
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Real Insights
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              I spent a year experiencing homelessness while cycling across Europe, surveying projects and gathering data to provide authentic, lived-experience advice on homeless services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#journey" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200">
                Explore My Journey
              </a>
              <a href="#contact" className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg font-semibold border-2 border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-200">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-100 dark:border-blue-900/50">
              <Bike className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">5000+</div>
              <div className="text-slate-600 dark:text-slate-400">Miles Cycled</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border border-purple-100 dark:border-purple-900/50">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-purple-600 dark:text-purple-400" />
              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">12+</div>
              <div className="text-slate-600 dark:text-slate-400">Countries Visited</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-100 dark:border-green-900/50">
              <Users className="w-12 h-12 mx-auto mb-4 text-green-600 dark:text-green-400" />
              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">50+</div>
              <div className="text-slate-600 dark:text-slate-400">Projects Surveyed</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border border-orange-100 dark:border-orange-900/50">
              <Heart className="w-12 h-12 mx-auto mb-4 text-orange-600 dark:text-orange-400" />
              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">365</div>
              <div className="text-slate-600 dark:text-slate-400">Days of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Why I Did This
              </h2>
              <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300">
                <p>
                  Too often, homeless services are designed by people who have never experienced homelessness. I wanted to change that.
                </p>
                <p>
                  For one year, I lived as a homeless person, cycling over 5000 miles across Europe. I slept rough, used homeless services, and experienced firsthand the challenges that millions face every day.
                </p>
                <p>
                  Along the way, I surveyed different homeless projects, gathered data, and documented what works and what doesn&apos;t. My goal: to provide authentic, lived-experience advice to organizations working to end homelessness.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Bike className="w-32 h-32 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                    <p className="text-slate-600 dark:text-slate-400 italic">
                      &quot;Real change comes from real understanding&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              The Journey
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A year of cycling, surviving, and learning across Europe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Journey Card 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Route Planning</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Mapped out routes through major European cities, targeting areas with established homeless services and support networks.
              </p>
            </div>

            {/* Journey Card 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Community Engagement</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Connected with homeless communities, shelter staff, and outreach workers to understand diverse perspectives.
              </p>
            </div>

            {/* Journey Card 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Data Collection</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Systematically documented services, effectiveness, accessibility, and gaps in homeless support systems.
              </p>
            </div>

            {/* Journey Card 4 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Lived Experience</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Experienced the daily challenges: finding food, staying safe, accessing healthcare, and maintaining dignity.
              </p>
            </div>

            {/* Journey Card 5 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
                <Bike className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Physical Endurance</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Cycled through all weather conditions, carrying minimal belongings, understanding the physical toll of homelessness.
              </p>
            </div>

            {/* Journey Card 6 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Research Analysis</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Compiled findings into actionable insights for policymakers, NGOs, and service providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mental Health App Section */}
      <section id="app" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <Smartphone className="w-4 h-4" />
              <span>Coming Soon</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Community Mental Health App
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
              Building a safe space for homeless individuals and those struggling with mental health. A community-driven platform for support, resources, and connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <MessageCircle className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Peer Support</h3>
              <p className="text-white/80">
                Connect with others who understand your journey. Share experiences, offer support, and build meaningful connections.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <MapPin className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Resource Mapping</h3>
              <p className="text-white/80">
                Find shelters, food banks, mental health services, and support near you. Real-time updates from the community.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Heart className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Mental Health Tools</h3>
              <p className="text-white/80">
                Access crisis support, mindfulness exercises, and mental health resources designed with lived experience.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-200">
              <Users className="w-5 h-5" />
              Join the Waitlist
            </a>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Practical, lived-experience work with measurable community impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Service Redesign</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Partnering with local services to remove barriers and improve access, dignity, and outcomes.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Data & Research</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Evidence-informed insights from surveys, interviews, and on-the-ground experience.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Community Partnerships</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Building collaborative support across NGOs, grassroots projects, and local networks.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Speaking & Training</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Talks and workshops that center lived experience and practical solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content & TikTok Section */}
      <section id="content" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Follow My Journey
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Daily insights, stories, and advocacy for homeless communities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Video className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">TikTok Content</h3>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                I share real stories, unfiltered experiences, and advocacy content on TikTok. From my 5000+ mile journey to daily life supporting homeless communities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Play className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">745+ Videos</h4>
                    <p className="text-slate-600 dark:text-slate-400">Documenting the journey and raising awareness</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">4.8K+ Followers</h4>
                    <p className="text-slate-600 dark:text-slate-400">Growing community of supporters</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">35K+ Likes</h4>
                    <p className="text-slate-600 dark:text-slate-400">Engaging content that resonates</p>
                  </div>
                </div>
              </div>
              <a 
                href="https://www.tiktok.com/@stevewhyte171" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                <Video className="w-5 h-5" />
                Follow @stevewhyte171
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-900/50">
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Content Themes</h4>
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 dark:text-white mb-2">#mentalhealthmatters</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Breaking stigma around mental health in homeless communities</p>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 dark:text-white mb-2">#unspokentruth</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Real stories that need to be heard</p>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 dark:text-white mb-2">#homelessadvocacy</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Advocating for better services and support</p>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 dark:text-white mb-2">#keepsmiling</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Finding hope and positivity in difficult times</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Key Insights
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              What I learned from living the experience
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl p-8 border border-blue-200 dark:border-blue-900/50">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Dignity First</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                The most effective services treat homeless individuals with dignity and respect, not as problems to be managed. Small gestures of humanity make enormous differences.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl p-8 border border-purple-200 dark:border-purple-900/50">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Accessibility Matters</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Many services have barriers that prevent those who need them most from accessing them. Bureaucracy, location, and eligibility requirements often exclude the most vulnerable.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl p-8 border border-green-200 dark:border-green-900/50">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Community Connection</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Projects that foster community and peer support are more successful than those that isolate individuals. Connection is as important as shelter.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-xl p-8 border border-orange-200 dark:border-orange-900/50">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Holistic Approach</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Homelessness is never just about housing. Mental health, addiction, employment, and social support must all be addressed together for lasting change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Support the Mission
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Help build better support systems for homeless communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl p-8 border border-green-200 dark:border-green-900/50">
              <DollarSign className="w-12 h-12 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Donate via Monzo</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                Your donations help fund community outreach, mental health resources, and the development of our community app.
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 mb-4">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Sort Code</p>
                <p className="text-xl font-mono font-bold text-slate-900 dark:text-white">04-00-03</p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Account Number</p>
                <p className="text-xl font-mono font-bold text-slate-900 dark:text-white">72402572</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl p-8 border border-blue-200 dark:border-blue-900/50">
              <Share2 className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Spread the Word</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                Share our content, follow on social media, and help raise awareness about homelessness and mental health.
              </p>
              <div className="space-y-3">
                <a 
                  href="https://www.tiktok.com/@stevewhyte171" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white dark:bg-slate-800 rounded-lg p-4 hover:shadow-lg transition-shadow"
                >
                  <Video className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Follow on TikTok</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">@stevewhyte171</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 bg-white dark:bg-slate-800 rounded-lg p-4">
                  <Heart className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Like & Share Videos</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Help the message reach more people</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            I&apos;m available for consultations, speaking engagements, and advisory roles. Let&apos;s create better solutions for homelessness together.
          </p>
          <ContactForm />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:contact@stevenwhyte.com" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a href="https://www.tiktok.com/@stevewhyte171" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 hover:shadow-xl transition-all duration-200">
              <Video className="w-5 h-5" />
              TikTok
            </a>
            <a href="https://k2nk.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 hover:shadow-xl transition-all duration-200">
              <Heart className="w-5 h-5" />
              K2NK
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
