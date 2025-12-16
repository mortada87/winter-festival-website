'use client';

import { motion } from 'framer-motion';
import { Gem, Sparkles, Eye, Star } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function FortuneSection() {
  const highlights = [
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Crystal Ball Readings",
      description: "Peer into the mystical crystal ball and discover what the winter spirits have in store for your future.",
      prediction: "A magical journey awaits you this winter season..."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Tarot Revelations",
      description: "Ancient tarot cards reveal the secrets of your destiny through the enchanted winter months.",
      prediction: "New opportunities will bloom like winter roses..."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Palm Reading Wonders",
      description: "Let our mystical palm readers trace the lines of your hand to unveil your winter fortune.",
      prediction: "Your path is illuminated by starlight and snow..."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Star Constellation Guidance",
      description: "The winter constellations hold special messages for those who seek their guidance.",
      prediction: "The stars align to bring you warmth and joy..."
    }
  ];

  return (
    <section id="fortune" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 bg-clip-text text-transparent mb-6"
          >
            Fortune Telling Highlights
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            This year brought extraordinary insights and magical predictions. 
            Discover the most enchanting fortune telling experiences from our winter celebration.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid md:grid-cols-2 gap-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="text-amber-300 mr-4 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white">{highlight.title}</h3>
              </div>
              
              <p className="text-blue-100 mb-6 leading-relaxed">
                {highlight.description}
              </p>
              
              <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg p-4 border-l-4 border-amber-400">
                <p className="text-amber-100 italic font-medium">
                  "{highlight.prediction}"
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
