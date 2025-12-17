'use client';

import { motion } from 'framer-motion';
import { Snowflake, Star, Coffee, Book, Gem, ArrowRight, Camera, Calendar } from 'lucide-react';
import SnowfallAnimation from '@/components/SnowfallAnimation';
import FortuneSection from '@/components/FortuneSection';
import StorytellingSection from '@/components/StorytellingSection';
import CacaoSection from '@/components/CacaoSection';
import PhotoGallery from '@/components/PhotoGallery';
import CountdownTimer from '@/components/CountdownTimer';
import Footer from '@/components/Footer';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      <SnowfallAnimation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative z-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-8"
          >
            <div className="flex justify-center items-center mb-6">
              <Snowflake className="w-12 h-12 text-blue-200 mr-4 animate-spin-slow" />
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent">
                Winter Festival
              </h1>
              <Snowflake className="w-12 h-12 text-blue-200 ml-4 animate-spin-slow" />
            </div>
          </motion.div>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed"
          >
            Welcome to a magical winter wonderland filled with fortune telling, 
            enchanting stories, and warm cacao delights. Join us for an unforgettable 
            festive season celebration!
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            <div className="flex items-center text-amber-200">
              <Gem className="w-6 h-6 mr-2" />
              <span className="text-lg">Fortune Telling</span>
            </div>
            <div className="flex items-center text-emerald-200">
              <Book className="w-6 h-6 mr-2" />
              <span className="text-lg">Storytelling</span>
            </div>
            <div className="flex items-center text-orange-200">
              <Coffee className="w-6 h-6 mr-2" />
              <span className="text-lg">Cacao Recipes</span>
            </div>
            <div className="flex items-center text-cyan-200">
              <Camera className="w-6 h-6 mr-2" />
              <span className="text-lg">Photo Gallery</span>
            </div>
            <div className="flex items-center text-purple-200">
              <Calendar className="w-6 h-6 mr-2" />
              <span className="text-lg">Next Festival</span>
            </div>
          </motion.div>
          
          <motion.button
            variants={fadeInUp}
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto"
            onClick={() => document.getElementById('fortune')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore the Magic
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.div>
      </section>

      {/* Fortune Telling Section */}
      <FortuneSection />
      
      {/* Storytelling Section */}
      <StorytellingSection />
      
      {/* Cacao Recipe Section */}
      <CacaoSection />
      
      {/* Photo Gallery Section */}
      <PhotoGallery />
      
      {/* Countdown Timer Section */}
      <CountdownTimer />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
