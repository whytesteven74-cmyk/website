import { Linkedin, Github, Video } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-black">
      <div className="max-w-7xl mx-auto text-center text-slate-400">
        <p>&copy; 2025 Steven Whyte. All rights reserved.</p>
        <p className="mt-2 text-sm">Built with passion for social change.</p>
        <div className="mt-4 flex items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/stevenwhyte"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://github.com/stevewhyte"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.tiktok.com/@stevewhyte171"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition"
            aria-label="TikTok"
          >
            <Video className="w-5 h-5" />
            <span className="sr-only">TikTok</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
