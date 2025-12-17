'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Calendar, Clock, Snowflake } from 'lucide-react';

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

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      
      // Set the festival date to December 15th of next year (around the same period)
      // If we're past December 15th this year, target next year; otherwise target this year
      let targetYear = currentYear;
      const thisYearFestival = new Date(currentYear, 11, 15); // December 15th this year
      
      if (now > thisYearFestival) {
        targetYear = currentYear + 1;
      }
      
      const nextFestival = new Date(targetYear, 11, 15, 18, 0, 0); // December 15th at 6 PM
      const difference = nextFestival.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // If somehow we're at the exact festival time, reset to next year
        setTimeLeft({ days: 365, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft(); // Calculate immediately
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-4xl md:text-6xl font-bold text-white">Loading...</div>
        </div>
      </section>
    );
  }

  const timeUnits = [
    { label: 'Days', value: timeLeft.days, color: 'from-purple-400 to-pink-400' },
    { label: 'Hours', value: timeLeft.hours, color: 'from-blue-400 to-cyan-400' },
    { label: 'Minutes', value: timeLeft.minutes, color: 'from-green-400 to-teal-400' },
    { label: 'Seconds', value: timeLeft.seconds, color: 'from-orange-400 to-red-400' }
  ];

  return (
    <section id="countdown" className="py-20 px-4 relative z-10 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-indigo-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-8"
          >
            <div className="flex justify-center items-center mb-6">
              <Calendar className="w-8 h-8 text-purple-300 mr-3" />
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
                Next Festival Countdown
              </h2>
              <Clock className="w-8 h-8 text-purple-300 ml-3" />
            </div>
            <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
              The magic continues! Mark your calendars for our next enchanting winter festival 
              celebration on <span className="font-semibold text-pink-200">December 15th</span>.
            </p>
          </motion.div>

          {/* Countdown Grid */}
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                variants={fadeInUp}
                className="relative group"
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-105 group-hover:border-purple-300/50">
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Snowflake className="w-6 h-6 text-purple-300 animate-spin-slow" />
                  </div>
                  
                  <div className={`text-4xl md:text-6xl font-bold bg-gradient-to-r ${unit.color} bg-clip-text text-transparent mb-2`}>
                    {String(unit.value).padStart(2, '0')}
                  </div>
                  
                  <div className="text-purple-200 font-medium text-lg">
                    {unit.label}
                  </div>
                  
                  <div className={`h-1 mt-3 rounded-full bg-gradient-to-r ${unit.color} opacity-60`} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Festival Details */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 border border-purple-300/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Save the Date!</h3>
            <div className="grid md:grid-cols-3 gap-6 text-purple-100">
              <div className="flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2 text-purple-300" />
                <span>December 15th, 2025</span>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="w-5 h-5 mr-2 text-purple-300" />
                <span>6:00 PM - Late</span>
              </div>
              <div className="flex items-center justify-center">
                <Snowflake className="w-5 h-5 mr-2 text-purple-300" />
                <span>Winter Wonderland</span>
              </div>
            </div>
            <p className="text-purple-200 mt-6 text-center max-w-2xl mx-auto">
              Join us for another year of magical fortune telling, enchanting storytelling, 
              delicious cacao ceremonies, and unforgettable winter memories!
            </p>
          </motion.div>

          {/* Early Bird Notice */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg p-6 border border-amber-300/20"
          >
            <h4 className="text-lg font-semibold text-amber-200 mb-2">🎟️ Early Bird Registration</h4>
            <p className="text-amber-100">
              Sign up for our newsletter to be the first to know when tickets go on sale! 
              Early birds get special discounts and exclusive festival perks.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
