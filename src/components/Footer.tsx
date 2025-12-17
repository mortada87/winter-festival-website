'use client';

import { motion } from 'framer-motion';
import { Snowflake, Mail, MapPin, Phone, Instagram, Twitter, Facebook } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 py-16 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid md:grid-cols-4 gap-8"
        >
          {/* Festival Info */}
          <motion.div variants={fadeInUp} className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Snowflake className="w-8 h-8 text-blue-300 mr-3 animate-spin-slow" />
              <h3 className="text-2xl font-bold text-white">Winter Festival</h3>
            </div>
            <p className="text-blue-100 leading-relaxed mb-6">
              A magical celebration of winter wonder, bringing together fortune telling, 
              enchanting stories, and delicious cacao experiences. Join us for an 
              unforgettable festive season celebration that warms the heart and soul.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-white transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-xl font-semibold text-white mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center text-blue-100">
                <Mail className="w-5 h-5 mr-3 text-blue-300" />
                <span>hello@winterfestival.com</span>
              </div>
              <div className="flex items-center text-blue-100">
                <Phone className="w-5 h-5 mr-3 text-blue-300" />
                <span>(555) 123-WINTER</span>
              </div>
              <div className="flex items-center text-blue-100">
                <MapPin className="w-5 h-5 mr-3 text-blue-300" />
                <span>Winter Wonderland<br />Magic Valley, Snow 12345</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <div className="space-y-3">
              <a href="#fortune" className="block text-blue-100 hover:text-white transition-colors duration-300">
                Fortune Telling
              </a>
              <a href="#storytelling" className="block text-blue-100 hover:text-white transition-colors duration-300">
                Storytelling
              </a>
              <a href="#cacao" className="block text-blue-100 hover:text-white transition-colors duration-300">
                Cacao Challenges
              </a>
              <a href="#gallery" className="block text-blue-100 hover:text-white transition-colors duration-300">
                Photo Gallery
              </a>
              <a href="#countdown" className="block text-blue-100 hover:text-white transition-colors duration-300">
                Next Festival
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-blue-200 text-sm mb-4 md:mb-0">
            © 2024 Winter Festival. All rights reserved. Made with ❄️ and magic.
          </p>
          <div className="flex space-x-6 text-sm text-blue-200">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
