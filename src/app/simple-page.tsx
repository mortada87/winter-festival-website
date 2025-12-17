'use client';

export default function SimplePage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e293b 0%, #1e40af 50%, #3730a3 100%)',
      color: 'white',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>
          ❄️ Winter Festival ❄️
        </h1>
        
        <p style={{ fontSize: '1.5rem', marginBottom: '3rem' }}>
          Welcome to our magical winter wonderland!
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '2rem',
            borderRadius: '1rem',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <h3>🔮 Fortune Telling</h3>
            <p>Mystical predictions await</p>
          </div>
          
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '2rem',
            borderRadius: '1rem',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <h3>📚 Storytelling</h3>
            <p>Enchanting winter tales</p>
          </div>
          
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '2rem',
            borderRadius: '1rem',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <h3>☕ Cacao Recipes</h3>
            <p>Warm your soul</p>
          </div>
        </div>
        
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          padding: '2rem',
          borderRadius: '1rem',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <h2>🎄 Next Festival: December 15, 2026 🎄</h2>
          <p>Save the date for magical winter celebrations!</p>
        </div>
      </div>
    </div>
  );
}
