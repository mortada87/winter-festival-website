'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#1e293b',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e293b 0%, #1e40af 50%, #3730a3 100%)',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 8vw, 4rem)',
          fontWeight: 'bold',
          marginBottom: '2rem',
          background: 'linear-gradient(to right, #93c5fd, #ffffff, #93c5fd)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          ❄️ Winter Festival ❄️
        </h1>
        
        <p style={{
          fontSize: 'clamp(1rem, 4vw, 1.5rem)',
          marginBottom: '3rem',
          maxWidth: '800px',
          lineHeight: '1.6'
        }}>
          Welcome to a magical winter wonderland filled with fortune telling, 
          enchanting stories, and warm cacao delights. Join us for an unforgettable 
          festive season celebration!
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          width: '100%',
          maxWidth: '800px',
          marginBottom: '3rem'
        }}>
          <div style={{
            background: 'rgba(251, 191, 36, 0.1)',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '1px solid rgba(251, 191, 36, 0.3)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔮</div>
            <h3 style={{ marginBottom: '0.5rem' }}>Fortune Telling</h3>
          </div>
          
          <div style={{
            background: 'rgba(34, 197, 94, 0.1)',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '1px solid rgba(34, 197, 94, 0.3)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📚</div>
            <h3 style={{ marginBottom: '0.5rem' }}>Storytelling</h3>
          </div>
          
          <div style={{
            background: 'rgba(251, 146, 60, 0.1)',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '1px solid rgba(251, 146, 60, 0.3)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>☕</div>
            <h3 style={{ marginBottom: '0.5rem' }}>Cacao Recipes</h3>
          </div>
        </div>
      </section>

      {/* Fortune Section */}
      <section style={{
        padding: '4rem 2rem',
        background: 'rgba(0,0,0,0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            fontWeight: 'bold',
            marginBottom: '3rem',
            background: 'linear-gradient(to right, #fbbf24, #fcd34d, #fbbf24)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Fortune Telling Highlights
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { icon: '🔮', title: 'Crystal Ball Readings', desc: 'Peer into the mystical crystal ball and discover your winter destiny.' },
              { icon: '✨', title: 'Tarot Revelations', desc: 'Ancient tarot cards reveal the secrets of your enchanted winter months.' },
              { icon: '👁️', title: 'Palm Reading', desc: 'Let mystic readers trace the lines of your hand to unveil your fortune.' },
              { icon: '⭐', title: 'Star Guidance', desc: 'Winter constellations hold special messages for seekers.' }
            ].map((item, index) => (
              <div key={index} style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '2rem',
                borderRadius: '1rem',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ lineHeight: '1.6', opacity: '0.9' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            fontWeight: 'bold',
            marginBottom: '2rem',
            background: 'linear-gradient(to right, #c084fc, #f472b6, #c084fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Next Festival Countdown
          </h2>
          
          <p style={{
            fontSize: '1.25rem',
            marginBottom: '3rem',
            lineHeight: '1.6'
          }}>
            Mark your calendars for our next enchanting winter festival celebration on{' '}
            <span style={{ fontWeight: 'bold', color: '#f472b6' }}>December 15th, 2026</span>!
          </p>
          
          <div style={{
            background: 'rgba(147, 51, 234, 0.2)',
            padding: '3rem',
            borderRadius: '1rem',
            border: '1px solid rgba(147, 51, 234, 0.3)'
          }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Save the Date! 🎄</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <div>📅 December 15th, 2026</div>
              <div>🕕 6:00 PM - Late</div>
              <div>❄️ Winter Wonderland</div>
            </div>
            <p style={{ lineHeight: '1.6' }}>
              Join us for another year of magical fortune telling, enchanting storytelling, 
              delicious cacao ceremonies, and unforgettable winter memories!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'rgba(0,0,0,0.3)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>❄️ Winter Festival</h3>
          <p style={{ marginBottom: '2rem', lineHeight: '1.6' }}>
            A magical celebration of winter wonder, bringing together fortune telling, 
            enchanting stories, and delicious cacao experiences.
          </p>
          <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>
            © 2024 Winter Festival. All rights reserved. Made with ❄️ and magic.
          </p>
        </div>
      </footer>
    </div>
  );
}
