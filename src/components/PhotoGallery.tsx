'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Camera, X, ExternalLink } from 'lucide-react';

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

interface PhotoItem {
  id: string;
  url: string;
  title: string;
  photographer: string;
  photographerUrl: string;
  category: string;
  alt: string;
}

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const photos: PhotoItem[] = [
    // Winter Scenes
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=400&fit=crop&auto=format',
      title: 'Snowy Winter Landscape',
      photographer: 'Ales Krivec',
      photographerUrl: 'https://unsplash.com/@aleskrivec',
      category: 'winter-scenes',
      alt: 'Beautiful snowy winter landscape with trees'
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1483307174149-0c7bbec08d04?w=400&h=400&fit=crop&auto=format',
      title: 'Winter Forest Path',
      photographer: 'Simon Berger',
      photographerUrl: 'https://unsplash.com/@8moments',
      category: 'winter-scenes',
      alt: 'Snow-covered forest path in winter'
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1515036969-7e9b3ec0e20b?w=400&h=400&fit=crop&auto=format',
      title: 'Icicles and Snow',
      photographer: 'Todd Diemer',
      photographerUrl: 'https://unsplash.com/@todd_diemer',
      category: 'winter-scenes',
      alt: 'Beautiful icicles hanging in winter'
    },
    // Festival Moments
    {
      id: '4',
      url: 'https://images.unsplash.com/photo-1514782831304-632d814329f8?w=400&h=400&fit=crop&auto=format',
      title: 'Festive Winter Lights',
      photographer: 'Євгенія Височина',
      photographerUrl: 'https://unsplash.com/@eugenivy_now',
      category: 'festival-moments',
      alt: 'Festive winter lights and decorations'
    },
    {
      id: '5',
      url: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&h=400&fit=crop&auto=format',
      title: 'Winter Celebration',
      photographer: 'Daria Nepriakhina',
      photographerUrl: 'https://unsplash.com/@epicantus',
      category: 'festival-moments',
      alt: 'People celebrating winter festival'
    },
    {
      id: '6',
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&auto=format',
      title: 'Magical Winter Market',
      photographer: 'Maarten van den Heuvel',
      photographerUrl: 'https://unsplash.com/@mvdheuvel',
      category: 'festival-moments',
      alt: 'Winter market with warm lights'
    },
    // Cacao Ceremonies
    {
      id: '7',
      url: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop&auto=format',
      title: 'Hot Cacao Ritual',
      photographer: 'Joanna Kosinska',
      photographerUrl: 'https://unsplash.com/@joannakosinska',
      category: 'cacao-ceremonies',
      alt: 'Steaming cup of hot cacao with marshmallows'
    },
    {
      id: '8',
      url: 'https://images.unsplash.com/photo-1517911444677-26cfc8cc9b04?w=400&h=400&fit=crop&auto=format',
      title: 'Cacao Bean to Cup',
      photographer: 'Charisse Kenion',
      photographerUrl: 'https://unsplash.com/@charissek',
      category: 'cacao-ceremonies',
      alt: 'Cacao beans and chocolate making process'
    },
    // Storytelling
    {
      id: '9',
      url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop&auto=format',
      title: 'Cozy Reading Corner',
      photographer: 'Thought Catalog',
      photographerUrl: 'https://unsplash.com/@thoughtcatalog',
      category: 'storytelling',
      alt: 'Cozy reading corner with books and warm lighting'
    },
    {
      id: '10',
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format',
      title: 'Fireside Stories',
      photographer: 'Joshua Ness',
      photographerUrl: 'https://unsplash.com/@theexplorerdad',
      category: 'storytelling',
      alt: 'People gathered around fireplace for storytelling'
    },
    {
      id: '11',
      url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop&auto=format',
      title: 'Ancient Winter Tales',
      photographer: 'Alfons Morales',
      photographerUrl: 'https://unsplash.com/@alfonsmc10',
      category: 'storytelling',
      alt: 'Old books and candles creating storytelling atmosphere'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos', icon: '📸' },
    { id: 'winter-scenes', name: 'Winter Scenes', icon: '❄️' },
    { id: 'festival-moments', name: 'Festival Moments', icon: '🎉' },
    { id: 'cacao-ceremonies', name: 'Cacao Ceremonies', icon: '☕' },
    { id: 'storytelling', name: 'Storytelling', icon: '📚' }
  ];

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <>
      <section id="gallery" className="py-20 px-4 relative z-10 bg-black/10">
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
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-200 via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-6"
            >
              Festival Gallery
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Capture the magic and beauty of our winter festival through these stunning 
              moments of wonder, warmth, and community celebration.
            </motion.p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'bg-white/10 text-cyan-200 hover:bg-white/20 border border-cyan-300/30'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </motion.div>

          {/* Photo Grid */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                variants={fadeInUp}
                className="group cursor-pointer overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-300/50 transition-all duration-300"
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    crossOrigin="anonymous"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
                          <rect width="400" height="400" fill="#1e293b"/>
                          <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="#64748b" font-family="Arial" font-size="16">
                            ${photo.title}
                          </text>
                        </svg>
                      `)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-white font-semibold mb-1">{photo.title}</h3>
                    <p className="text-cyan-200 text-sm">by {photo.photographer}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/30 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Photo Modal */}
      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200 z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="relative">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.alt}
                className="w-full h-auto max-h-[70vh] object-cover"
                crossOrigin="anonymous"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml;base64,${btoa(`
                    <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
                      <rect width="800" height="600" fill="#1e293b"/>
                      <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="#64748b" font-family="Arial" font-size="24">
                        ${selectedPhoto.title}
                      </text>
                    </svg>
                  `)}`;
                }}
              />
            </div>
            
            <div className="p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedPhoto.title}</h3>
              <div className="flex items-center justify-between">
                <p className="text-cyan-200">
                  Photo by{' '}
                  <a
                    href={selectedPhoto.photographerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-100 hover:text-white underline inline-flex items-center gap-1"
                  >
                    {selectedPhoto.photographer}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </p>
                <div className="text-sm text-blue-200 bg-white/10 px-3 py-1 rounded-full">
                  {categories.find(cat => cat.id === selectedPhoto.category)?.name}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
