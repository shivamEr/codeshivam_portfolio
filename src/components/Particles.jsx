import React, { useEffect, useState } from 'react';
import { loadSlim } from '@tsparticles/slim';
import { Particles as TSParticles } from '@tsparticles/react';
import { useTheme } from './ThemeContext';

const Particles = () => {
  const { isDarkMode } = useTheme();
  const [init, setInit] = useState(false);

  useEffect(() => {
    loadSlim().then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: isDarkMode ? '#3b82f6' : '#1e40af',
      },
      links: {
        color: isDarkMode ? '#3b82f6' : '#1e40af',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  if (!init) {
    return null;
  }

  return (
    <TSParticles
      id="tsparticles"
      options={particlesOptions}
      className="absolute inset-0 z-0"
    />
  );
};

export default Particles;