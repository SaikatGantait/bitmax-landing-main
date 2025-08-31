"use client";

import { motion } from "motion/react";
import Navbar from "./Navbar";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Spotlight } from "./ui/spotlight";

export function HeroSection() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/u6985669481_A_dark_futuristic_digital_background_with_glowing_838615cc-982e-41b9-a3ff-332edb65d682_3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-10">
        {/* Spotlight effect on left top side */}
        <Spotlight
          className="-top-60 left-40 md:-top-80 md:-left-30"
          fill="white"
        />

<Spotlight
          className="-top-60 left-40 md:-top-90 md:-left-100"
          fill="white"
        />
        
        {/* Orangish gradient blob behind main text */}
        <motion.div
          className="absolute top-2/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-gradient-to-br from-orange-500/20 to-red-500/10 rounded-full blur-3xl opacity-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(rgba(255,165,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,165,0,0.04)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Grid fade overlay - more visible at top, fading to bottom */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
      
      {/* Subtle grid fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      
      {/* Navbar with highest z-index */}
      <div className="relative z-50">
        <Navbar />
      </div>
      
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[calc(100vh-150px)] px-6 text-center">
        {/* Enhanced Tagline with premium typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 px-6 py-3 border border-orange-500/30 rounded-full bg-orange-500/10 backdrop-blur-sm"
        >
          <span className="hero-tagline text-white text-xs uppercase">
            ✨ Maximizing Every Bit of Your Bitcoin
          </span>
        </motion.div>
        
        {/* Enhanced Main headline with premium font hierarchy */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-headline text-5xl md:text-6xl lg:text-7xl text-white mb-8 max-w-5xl text-center leading-tight tracking-tight"
        >
          Split Yield Tokens with{" "}
          <br />
          <span className="gradient-text-premium font-semibold text-orange-600 tracking-tight">
            AI Predictive
          </span>{" "}
          <span className="hero-subheadline text-white/90 font-light">
            Optimization
          </span>
        </motion.h1>
        
        {/* Enhanced Description with improved typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 max-w-4xl"
        >
          <p className="hero-body text-xl md:text-xl text-neutral-400 mb-6 leading-relaxed">
            Our innovative AI technology transforms yield management by analyzing{" "}
            <span className="text-white font-semibold bg-gradient-to-r from-orange-400/20 to-orange-600/20 px-2 py-1 rounded-lg border border-orange-500/30">
              on-chain data
            </span>{" "}
            in real-time, 
            delivering{" "}
            <span className="text-orange-400 font-semibold bg-gradient-to-r from-orange-500/10 to-red-500/10 px-2 py-1 rounded-lg border border-orange-400/30">
              optimized returns
            </span>{" "}
            for your Bitcoin investments.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-neutral-500">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
              <span>Real-time Analysis</span>
            </div>
            <div className="w-px h-3 bg-neutral-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
              <span>AI-Powered</span>
            </div>
            <div className="w-px h-3 bg-neutral-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
              <span>Secure</span>
            </div>
          </div>
        </motion.div>
        
        {/* Enhanced CTA Buttons with premium styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 mb-16"
        >
          {/* Get Started Button - Enhanced with premium styling */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hero-button px-10 py-5 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white rounded-xl flex items-center gap-3 group shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 cursor-pointer text-lg"
          >
            <a href="https://idk-indol-seven.vercel.app/dashboard">
              Get Started
            </a>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
        </motion.div>

       
      </div>
    </div>
  );
} 