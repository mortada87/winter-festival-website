'use client';

import { motion } from 'framer-motion';
import { Coffee, Thermometer, Heart, Award, Clock, Users } from 'lucide-react';

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

export default function CacaoSection() {
  const challenges = [
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Spiced Winter Warmth",
      difficulty: "Beginner",
      time: "15 mins",
      description: "Create the perfect winter cacao blend with cinnamon, nutmeg, and a touch of cayenne for that cozy fireplace feeling.",
      ingredients: ["Raw cacao powder", "Coconut milk", "Cinnamon", "Nutmeg", "Maple syrup", "Cayenne pepper"],
      badge: "Most Popular"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Peppermint Dream",
      difficulty: "Intermediate",
      time: "20 mins",
      description: "A refreshing twist on hot chocolate with fresh peppermint, dark chocolate, and a hint of vanilla bean.",
      ingredients: ["Dark cacao", "Fresh peppermint", "Vanilla bean", "Oat milk", "Coconut cream", "Raw honey"],
      badge: "Crowd Favorite"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Golden Turmeric Cacao",
      difficulty: "Advanced",
      time: "25 mins",
      description: "An anti-inflammatory powerhouse combining ceremonial cacao with golden turmeric and warming spices.",
      ingredients: ["Ceremonial cacao", "Turmeric", "Ginger", "Cardamom", "Black pepper", "Almond milk"],
      badge: "Health Champion"
    }
  ];

  return (
    <section id="cacao" className="py-20 px-4 relative z-10">
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
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-200 via-amber-200 to-orange-200 bg-clip-text text-transparent mb-6"
          >
            Cacao Recipe Challenges
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Warm your soul with our signature winter cacao recipes. Each challenge offers 
            a unique blend of flavors designed to bring comfort and joy to your winter days.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid lg:grid-cols-3 gap-8"
        >
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-orange-500/20 text-orange-200 rounded-full text-xs font-medium">
                  {challenge.badge}
                </span>
              </div>

              {/* Icon and Title */}
              <div className="flex items-center mb-6">
                <div className="text-orange-300 mr-4 group-hover:scale-110 transition-transform duration-300">
                  {challenge.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white">{challenge.title}</h3>
              </div>

              {/* Challenge Info */}
              <div className="flex gap-4 mb-6">
                <div className="flex items-center text-sm text-blue-200">
                  <Users className="w-4 h-4 mr-1" />
                  {challenge.difficulty}
                </div>
                <div className="flex items-center text-sm text-blue-200">
                  <Clock className="w-4 h-4 mr-1" />
                  {challenge.time}
                </div>
              </div>

              {/* Description */}
              <p className="text-blue-100 mb-6 leading-relaxed">
                {challenge.description}
              </p>

              {/* Ingredients */}
              <div className="mb-6">
                <h4 className="text-white font-medium mb-3 flex items-center">
                  <Coffee className="w-4 h-4 mr-2" />
                  Key Ingredients:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {challenge.ingredients.map((ingredient, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-orange-500/10 text-orange-200 rounded text-sm border border-orange-500/20"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenge Button */}
              <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                Take Challenge
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-xl p-8 border border-orange-500/20"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Challenge Community Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-300 mb-2">2,847</div>
              <div className="text-blue-200">Recipes Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-300 mb-2">1,264</div>
              <div className="text-blue-200">Active Participants</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-300 mb-2">98%</div>
              <div className="text-blue-200">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-300 mb-2">4.9★</div>
              <div className="text-blue-200">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
