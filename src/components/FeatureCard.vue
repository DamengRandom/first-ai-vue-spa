<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  isVisible: {
    type: Boolean,
    default: false
  },
  delay: {
    type: Number,
    default: 0
  }
});

const animationStyle = computed(() => {
  return {
    transitionDelay: `${props.delay}ms`
  };
});

const getIconPath = (iconName) => {
  switch (iconName) {
    case 'cpu':
      return `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      `;
    case 'brain':
      return `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      `;
    case 'cube':
      return `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      `;
    case 'shield':
      return `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      `;
    default:
      return `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      `;
  }
};
</script>

<template>
  <div :class="['feature-card group transition-all duration-500 transform', 
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20']"
       :style="animationStyle">
    <div class="flex flex-col items-center p-6 h-full">
      <!-- Icon with glow effect -->
      <div class="mb-6 text-orange relative">
        <div class="absolute inset-0 bg-orange opacity-20 rounded-full blur-xl transform scale-150 group-hover:opacity-30 transition-opacity duration-300"></div>
        <div v-html="getIconPath(icon)" class="relative z-10"></div>
      </div>
      
      <!-- Content -->
      <h3 class="text-xl font-bold mb-3 group-hover:neon-text transition-all duration-300">{{ title }}</h3>
      <p class="text-orange-light text-center">{{ description }}</p>
      
      <!-- Hover line animation -->
      <div class="mt-4 w-0 h-0.5 bg-orange group-hover:w-full transition-all duration-300"></div>
    </div>
  </div>
</template>