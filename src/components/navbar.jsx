import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, Sparkles, ExternalLink, Play } from "lucide-react";
// If you use shadcn/ui, these paths should exist. Otherwise replace with your own Button/Badge components.
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
 
function SiteChrome() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-xl bg-linear-to-tr from-blue-600 to-purple-600 grid place-items-center text-white">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-semibold tracking-tight group-hover:text-blue-700 transition-colors">Lynda.dev</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#work" className="hover:text-blue-700">Work</a>
          <a href="#about" className="hover:text-blue-700">About</a>
          <a href="#contact" className="hover:text-blue-700">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <SocialIcon href="https://github.com/lindasad3" label="GitHub"><Github className="h-4 w-4"/></SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/lynda-sadoudi-66008a167/" label="LinkedIn"><Linkedin className="h-4 w-4"/></SocialIcon>
          <Link to="/Contact">
            <Button className="hidden sm:inline-flex bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">Let’s talk</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
export default SiteChrome;
function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="h-9 w-9 rounded-xl grid place-items-center border border-gray-200 bg-white/70 hover:bg-gray-50 transition shadow-sm"
    >
      {children}
    </a>
  );
}