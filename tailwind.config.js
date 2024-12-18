module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // Move up animation with scale and opacity change
        moveUp: {
          '0%': { 
            transform: 'translateY(0) scale(0.5)', 
            opacity: '0.5' 
          },
          '50%': { 
            transform: 'translateY(-100px) scale(1)', 
            opacity: '0.8' 
          },
          '100%': { 
            transform: 'translateY(-200px) scale(1.5)', 
            opacity: '0' 
          },
        },
        // Circular wave expansion with fading effect
        waveExpansion: {
          '0%': {
            transform: 'scale(0)', // Start from small size
            opacity: '0.8',
          },
          '100%': {
            transform: 'scale(4)', // Expand the circle
            opacity: '0', // Fade out the wave
          },
        },
        // Concentric circle scaling and opacity fading
        concentricCircle: {
          '0%': {
            transform: 'scale(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(4)',
            opacity: '0',
          },
        },
      },
      animation: {
        moveUp: 'moveUp 2s ease-in-out infinite', // Original moveUp animation
        waveExpansion: 'waveExpansion 3s ease-out infinite', // Circular wave expansion animation
        concentricCircle: 'concentricCircle 3s ease-out infinite', // Concentric circle animation
      },
      // Add a new timing function for more control if needed
      transitionTimingFunction: {
        'ease-in-out-slow': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
        'ease-out-quad': 'cubic-bezier(0.25, 0.8, 0.25, 1)',
      },
      // Add more animations or customization for `will-change`
      willChange: {
        'moveUp': 'transform, opacity',
        'waveExpansion': 'transform, opacity',
        'concentricCircle': 'transform, opacity',
      }
    },
  },
  plugins: [],
};
