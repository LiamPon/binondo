import { useState } from 'react';

function App() {
  const [currentStop, setCurrentStop] = useState(0);

  const itinerary = [
    {
      title: 'Binondo Church',
      time: '3:00 PM – 3:15 PM',
      activity: 'Pray together.',
      image: '/images/binondo.jpg',
    },
    {
      title: 'Kokee Bakery',
      time: '3:30 PM – 3:40 PM',
      activity: 'Buy jade buns.',
      image: '/images/kokee.jpg',
    },
    {
      title: "Wong Kei Sugarcane Juice",
      time: '3:45 PM – 3:55 PM',
      activity: 'Buy sugarcane juice & take a photo of ourselves on the old TV.',
      image: '/images/wong.jpg',
    },
    {
      title: "Lord Stow's Bakery",
      time: '4:00 PM – 4:15 PM',
      activity: 'Buy egg tart.',
      image: '/images/lord.jpg',
    },
    {
      title: 'Lao Niang',
      time: '4:30 PM – 5:15 PM',
      activity: 'Dinner date.',
      image: '/images/lao.jpg',
    },
    {
      title: 'Beanstro',
      time: '5:30 PM – 6:30 PM',
      activity: 'Cafe date.',
      image: '/images/beanstro.png',
    },
  ];

  const blossoms = [
    { id: 'b1', delay: '0s' },
    { id: 'b2', delay: '1.2s' },
    { id: 'b3', delay: '0.6s' },
    { id: 'b4', delay: '1.8s' },
    { id: 'b5', delay: '2.4s' },
    { id: 'b6', delay: '3.0s' },
    { id: 'b7', delay: '0.3s' },
    { id: 'b8', delay: '1.5s' },
    { id: 'b9', delay: '2.7s' },
    { id: 'b10', delay: '3.3s' },
    { id: 'b11', delay: '0.9s' },
    { id: 'b12', delay: '2.1s' },
    { id: 'b13', delay: '3.6s' },
    { id: 'b14', delay: '1.0s' },
    { id: 'b15', delay: '2.5s' },
    { id: 'b16', delay: '0.4s' },
    { id: 'b17', delay: '3.9s' },
    { id: 'b18', delay: '1.7s' },
  ];

  const handleNext = () => {
    setCurrentStop((prev) => Math.min(prev + 1, itinerary.length - 1));
  };

  const handlePrev = () => {
    setCurrentStop((prev) => Math.max(prev - 1, 0));
  };

  const currentLocation = itinerary[currentStop];
  const nextLocation = itinerary[currentStop + 1];
  const prevLocation = itinerary[currentStop - 1];
  const progress = ((currentStop + 1) / itinerary.length) * 100;

  const storyNarrative = currentStop === 0
    ? `We kick things off at ${currentLocation.title}, soaking everything in before drifting toward ${nextLocation.title}.`
    : currentStop === itinerary.length - 1
      ? `We close the night at ${currentLocation.title}.`
      : `After ${prevLocation.title}, we slip over to ${currentLocation.title} before wandering toward ${nextLocation.title}.`;

  return (
    <div className="App">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Noto+Serif+SC:wght@400;600&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          overflow-x: hidden;
        }

        .App {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1625 0%, #2d1b3d 50%, #3d2447 100%);
          position: relative;
          overflow-x: hidden;
          padding: 1rem 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes fall {
          0% { 
            transform: translateY(-100px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% { 
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .blossom {
          position: fixed;
          width: 15px;
          height: 15px;
          background: radial-gradient(circle, rgba(255, 179, 217, 0.6), rgba(255, 138, 191, 0.4));
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          animation: fall linear infinite;
          box-shadow: 0 0 8px rgba(255, 138, 191, 0.3);
        }

        .blossom::before,
        .blossom::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255, 179, 217, 0.6), rgba(255, 138, 191, 0.4));
          border-radius: 50%;
        }

        .blossom::before {
          left: -8px;
        }

        .blossom::after {
          right: -8px;
        }

        .page-wrapper {
          max-width: 900px;
          width: 100%;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          animation: fadeIn 1s ease-out;
        }

        .hero {
          text-align: center;
          margin-bottom: 1rem;
          background: rgba(30, 25, 40, 0.6);
          padding: 1.2rem 1.5rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 138, 191, 0.2);
        }

        h1 {
          font-family: 'Ma Shan Zheng', cursive;
          font-size: clamp(1.5rem, 5vw, 2.2rem);
          color: #ffb3d9;
          margin-bottom: 1rem;
        }

        .hero-details {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin: 1rem 0;
        }

        .detail-tile {
          background: rgba(255, 138, 191, 0.15);
          padding: 0.6rem 1.4rem;
          border-radius: 25px;
          border: 1px solid rgba(255, 138, 191, 0.3);
        }

        .detail-tile strong {
          color: #ffb3d9;
          font-size: 0.85rem;
          font-family: 'Noto Serif SC', serif;
        }

        .map-link {
          display: block;
          margin: 0.8rem auto 0;
          width: fit-content;
          padding: 0.6rem 1.5rem;
          background: transparent;
          color: #ffb3d9;
          text-decoration: none;
          border-radius: 25px;
          border: 1px solid rgba(255, 138, 191, 0.4);
          font-weight: 500;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .map-link:hover {
          background: rgba(255, 138, 191, 0.1);
          border-color: #ffb3d9;
        }

        .date-map {
          background: rgba(15, 12, 20, 0.92);
          padding: 1.5rem;
          border-radius: 18px;
          border: 1px solid rgba(255, 138, 191, 0.12);
          position: relative;
        }

        .map-title {
          font-family: 'Ma Shan Zheng', cursive;
          font-size: clamp(1.2rem, 3vw, 1.7rem);
          color: #ffb3d9;
          text-align: center;
          margin-bottom: 0.3rem;
        }

        .map-subtitle {
          text-align: center;
          color: rgba(255, 179, 217, 0.7);
          font-size: 0.85rem;
          margin-bottom: 1.2rem;
          font-family: 'Noto Serif SC', serif;
          letter-spacing: 0.05em;
        }

        .storyboard {
          background: rgba(10, 8, 14, 0.75);
          border: 1px solid rgba(255, 138, 191, 0.12);
          border-radius: 14px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .story-top {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          align-items: start;
          justify-items: center;
        }

        .story-info {
          background: rgba(25, 21, 32, 0.9);
          border: 1px solid rgba(255, 138, 191, 0.18);
          border-radius: 12px;
          padding: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .chapter-label {
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 179, 217, 0.8);
        }

        .story-title {
          font-family: 'Noto Serif SC', serif;
          font-size: 1.5rem;
          color: #ffb3d9;
        }

        .story-time {
          font-size: 0.95rem;
          color: rgba(255, 179, 217, 0.8);
        }

        .story-activity {
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .next-stop {
          margin-top: auto;
          font-size: 0.85rem;
          color: rgba(255, 179, 217, 0.7);
          font-style: italic;
        }

        .story-image {
          position: relative;
          border-radius: 12px;
          border: 1px solid rgba(255, 138, 191, 0.18);
          background: rgba(255, 255, 255, 0.02);
          padding: 0.75rem;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 260px;
        }

        .story-image img {
          width: 280px;
          height: 220px;
          object-fit: cover;
          border-radius: 10px;
          filter: saturate(1.05);
        }

        .story-narrative {
          font-family: 'Noto Serif SC', serif;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.85);
          background: rgba(20, 17, 27, 0.9);
          border: 1px solid rgba(255, 138, 191, 0.15);
          border-radius: 10px;
          padding: 0.9rem 1.1rem;
          line-height: 1.5;
        }

        .nav-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .nav-button {
          border: 1px solid rgba(255, 138, 191, 0.4);
          background: transparent;
          color: #ffb3d9;
          padding: 0.7rem 1.5rem;
          border-radius: 999px;
          font-size: 0.9rem;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .nav-button.primary {
          background: rgba(255, 138, 191, 0.2);
        }

        .nav-button:hover {
          background: rgba(255, 138, 191, 0.3);
        }

        .nav-button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
          background: transparent;
          border-color: rgba(255, 138, 191, 0.2);
        }

        .chapter-progress {
          font-size: 0.9rem;
          color: rgba(255, 179, 217, 0.7);
          letter-spacing: 0.05em;
        }

        .story-path {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .path-line {
          width: 100%;
          height: 4px;
          background: rgba(255, 138, 191, 0.2);
          border-radius: 999px;
          overflow: hidden;
        }

        .path-progress {
          height: 100%;
          background: linear-gradient(90deg, rgba(255, 138, 191, 0.9), rgba(255, 204, 229, 0.8));
          border-radius: inherit;
        }

        .path-dots {
          display: flex;
          justify-content: space-between;
          gap: 0.6rem;
        }

        .path-dot {
          position: relative;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: rgba(255, 138, 191, 0.25);
          border: 1px solid rgba(255, 138, 191, 0.5);
        }

        .path-dot.active {
          background: #ff8abf;
          box-shadow: 0 0 10px rgba(255, 138, 191, 0.5);
        }


        .footer-note {
          text-align: center;
          font-family: 'Ma Shan Zheng', cursive;
          font-size: 1.1rem;
          color: #ffb3d9;
          margin-top: 1rem;
          padding: 1rem;
          background: rgba(30, 25, 40, 0.6);
          border-radius: 12px;
          border: 1px solid rgba(255, 138, 191, 0.2);
        }

        @media (max-width: 768px) {
          .App {
            padding: 0.5rem;
          }

          .hero {
            padding: 1rem;
          }

          h1 {
            font-size: 1.5rem;
          }

          .hero-details {
            flex-direction: column;
            gap: 0.8rem;
          }

          .date-map {
            padding: 1rem;
          }

          .storyboard {
            padding: 1rem;
            gap: 1rem;
          }

          .story-image {
            min-height: 220px;
          }

          .story-image img {
            width: 220px;
            height: 180px;
          }

          .nav-controls {
            flex-direction: column;
            align-items: stretch;
          }

          .chapter-progress {
            text-align: center;
          }


          .footer-note {
            font-size: 1rem;
            padding: 1rem;
            margin-top: 0.8rem;
          }
        }
      `}</style>

      {blossoms.map((flower) => (
        <span
          key={flower.id}
          className="blossom"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 4}s`,
            animationDelay: flower.delay,
          }}
        />
      ))}

      <div className="page-wrapper">
        <section className="date-map">
          <header className="hero">
          <h1>Tracing Our Binondo Date</h1>
          <div className="hero-details">
            <div className="detail-tile">
              <strong>📅 February 9, 2026 · 3:00 PM — 7:00 PM</strong>
            </div>
            <div className="detail-tile">
              <strong>📍 Binondo, Manila</strong>
            </div>
          </div>
          </header>

          <div className="storyboard">
            <div className="story-top">
              <div className="story-info">
                <p className="chapter-label">Stop {currentStop + 1} · {currentLocation.title}</p>
                <h3 className="story-title">{currentLocation.title}</h3>
                <p className="story-time">{currentLocation.time}</p>
                <p className="story-activity">{currentLocation.activity}</p>
              </div>

              <div className="story-image">
                <img src={currentLocation.image} alt={currentLocation.title} />
              </div>
            </div>

            <p className="story-narrative">{storyNarrative}</p>

            <div className="nav-controls">
              <button
                className="nav-button"
                onClick={handlePrev}
                disabled={currentStop === 0}
              >
                Back a beat
              </button>
              <span className="chapter-progress">Stop {currentStop + 1} of {itinerary.length}</span>
              <button
                className="nav-button primary"
                onClick={handleNext}
                disabled={currentStop === itinerary.length - 1}
              >
                Next chapter
              </button>
            </div>

            <div className="story-path">
              <div className="path-line">
                <div className="path-progress" style={{ width: `${progress}%` }}></div>
              </div>
              <div className="path-dots">
                {itinerary.map((stop, index) => (
                  <span
                    key={stop.title}
                    className={`path-dot ${index === currentStop ? 'active' : ''}`}
                    title={stop.title}
                    aria-label={`Stop ${index + 1}: ${stop.title}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <a className="map-link" href="https://maps.app.goo.gl/281U7KPZWJejbLsbA" target="_blank" rel="noreferrer">
            View Full Map ↗
          </a>
        </section>
      </div>
    </div>
  );
}

export default App;
