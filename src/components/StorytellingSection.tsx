'use client';

import { motion } from 'framer-motion';
import { Book, Feather, Moon, TreePine } from 'lucide-react';

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

export default function StorytellingSection() {
  const stories = [
    {
      icon: <Moon className="w-8 h-8" />,
      title: "The Midnight Snow Guardian",
      author: "Elena Frostwhisper",
      excerpt: "In the deepest night of winter, when the snow falls like silver tears, a mysterious guardian watches over the sleeping village...",
      category: "Fairy Tale",
      readTime: "8 min read"
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "The Pine Tree's Secret",
      author: "Marcus Winterheart",
      excerpt: "An ancient pine tree holds the memories of a thousand winters, and tonight it finally decides to share its greatest secret...",
      category: "Fantasy",
      readTime: "6 min read"
    },
    {
      icon: <Feather className="w-8 h-8" />,
      title: "Letters from the North Wind",
      author: "Isabella Starweaver",
      excerpt: "When young Lily finds mysterious letters written by the North Wind himself, she embarks on a magical journey through the winter landscape...",
      category: "Adventure",
      readTime: "10 min read"
    }
  ];

  return (
    <section id="storytelling" className="py-20 px-4 relative z-10 bg-black/20">
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
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-200 via-green-200 to-emerald-200 bg-clip-text text-transparent mb-6"
          >
            Winter Storytelling
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Gather around the virtual fireplace and immerse yourself in enchanting tales 
            that capture the magic and wonder of the winter season.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid gap-8"
        >
          {stories.map((story, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="text-emerald-300 group-hover:scale-110 transition-transform duration-300">
                    {story.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">{story.title}</h3>
                    <p className="text-emerald-200">by {story.author}</p>
                  </div>
                </div>
                
                <div className="flex gap-4 md:ml-auto">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-200 rounded-full text-sm">
                    {story.category}
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm">
                    {story.readTime}
                  </span>
                </div>
              </div>
              
              <p className="text-blue-100 mt-6 leading-relaxed italic">
                {story.excerpt}
              </p>
              
              <button className="mt-6 text-emerald-300 hover:text-emerald-200 font-medium transition-colors duration-300 flex items-center gap-2">
                <Book className="w-4 h-4" />
                Read Full Story
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
