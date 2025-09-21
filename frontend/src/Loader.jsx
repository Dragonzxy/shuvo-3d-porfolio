import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = [
    { text: "main character vibe" },
    { text: "open source flex" },
    { text: "low effort, high impact" },
    { text: "git commit, git push" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % words.length);
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #000000ff, #000000ff, #000000ff)',
    color: 'white',
    zIndex: 1000
  };

  const wordContainerStyle = {
    height: '80px',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
  };

  const wordStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 900,
    transition: 'all 0.8s ease',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.4)',
    textAlign: 'center'
  };
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count < 100) {
      const interval = setInterval(() => {
        setCount(prev => {
          if (prev < 100) {
            return prev + 1
          } else {
            clearInterval(interval)
            return prev
          }
        })
      }, 38) // speed (30ms per increment = ~3 seconds)

      return () => clearInterval(interval)
    }

  }, [])


      const formattedCount = count.toString().padStart(3, '0');


  return (
    <section className='loader fixed' style={containerStyle}>
      <div style={wordContainerStyle}>
        {words.map((word, index) => (
          <div className='word'
            key={index}
            style={{
              ...wordStyle,
              transform: `translateY(${index === currentIndex ? '0%' : '100%'})`,
              opacity: index === currentIndex ? 1 : 0,
            }}
          >
            {word.text}
          </div>
        ))}
      </div>
    <div className="counter absolute bottom-[50px] left-[50px] bg-black text-white text-6xl font-bolder" style={{fontFamily:"orbitron"}}>
      {formattedCount}
    </div>
    </section>
  );
};

export default Loader;