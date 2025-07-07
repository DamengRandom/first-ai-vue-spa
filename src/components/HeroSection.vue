<script setup>
import { ref, onMounted } from 'vue';

const title = ref('');
const subtitle = ref('');
const isVisible = ref(false);

onMounted(() => {
  // Simulate typing effect
  const titleText = 'FUTURE IS NOW';
  const subtitleText = 'Explore the next generation of technology';
  let titleIndex = 0;
  let subtitleIndex = 0;
  
  setTimeout(() => {
    isVisible.value = true;
    
    const titleInterval = setInterval(() => {
      if (titleIndex < titleText.length) {
        title.value += titleText.charAt(titleIndex);
        titleIndex++;
      } else {
        clearInterval(titleInterval);
        
        // Start subtitle typing after title is complete
        const subtitleInterval = setInterval(() => {
          if (subtitleIndex < subtitleText.length) {
            subtitle.value += subtitleText.charAt(subtitleIndex);
            subtitleIndex++;
          } else {
            clearInterval(subtitleInterval);
          }
        }, 50);
      }
    }, 100);
  }, 500);
});

const scrollToFeatures = () => {
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background with grid and glow -->
    <div class="absolute inset-0 cyberpunk-grid z-0">
      <!-- Animated gradient background -->
      <div class="absolute inset-0 bg-black z-0">
        <div class="absolute inset-0 opacity-30" 
             style="background: radial-gradient(circle at 50% 50%, rgba(255,165,0,0.3) 0%, rgba(0,0,0,1) 70%);"></div>
      </div>
      
      <!-- Animated lines -->
      <div class="absolute inset-0 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FFA500" stop-opacity="0.1" />
              <stop offset="50%" stop-color="#FFA500" stop-opacity="0.2" />
              <stop offset="100%" stop-color="#FFA500" stop-opacity="0.1" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#grid-gradient)" mask="url(#grid-mask)" />
          <mask id="grid-mask">
            <rect x="0" y="0" width="100%" height="100%" fill="black" />
            <!-- Horizontal lines -->
            <g stroke="white" stroke-width="1">
              <line x1="0" y1="25%" x2="100%" y2="25%" />
              <line x1="0" y1="50%" x2="100%" y2="50%" />
              <line x1="0" y1="75%" x2="100%" y2="75%" />
            </g>
            <!-- Vertical lines -->
            <g stroke="white" stroke-width="1">
              <line x1="25%" y1="0" x2="25%" y2="100%" />
              <line x1="50%" y1="0" x2="50%" y2="100%" />
              <line x1="75%" y1="0" x2="75%" y2="100%" />
            </g>
          </mask>
        </svg>
      </div>
    </div>
    
    <!-- Content -->
    <div class="container mx-auto px-6 z-10 text-center">
      <div :class="['transition-opacity duration-1000', isVisible ? 'opacity-100' : 'opacity-0']">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 neon-text tracking-wider">{{ title }}<span class="animate-pulse">|</span></h1>
        <p class="text-xl md:text-2xl mb-12 text-orange-light">{{ subtitle }}</p>
        
        <button @click="scrollToFeatures" class="btn-primary animate-float glow-effect">
          Discover More
        </button>
      </div>
    </div>
    
    <!-- Scroll indicator -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>