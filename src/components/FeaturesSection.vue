<script setup>
import { ref, onMounted } from 'vue';
import FeatureCard from './FeatureCard.vue';

const features = [
  {
    id: 1,
    title: 'Quantum Processing',
    description: 'Next-generation computing power with unprecedented speed and efficiency.',
    icon: 'cpu'
  },
  {
    id: 2,
    title: 'Neural Interface',
    description: 'Seamless connection between human cognition and digital systems.',
    icon: 'brain'
  },
  {
    id: 3,
    title: 'Holographic Display',
    description: 'Immersive 3D visualization technology for enhanced interaction.',
    icon: 'cube'
  },
  {
    id: 4,
    title: 'Quantum Encryption',
    description: 'Unbreakable security protocols using quantum entanglement principles.',
    icon: 'shield'
  }
];

const isVisible = ref(false);
const visibleFeatures = ref([]);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true;
      
      // Stagger the appearance of feature cards
      features.forEach((feature, index) => {
        setTimeout(() => {
          visibleFeatures.value.push(feature.id);
        }, 300 * index);
      });
      
      observer.disconnect();
    }
  }, { threshold: 0.3 });
  
  observer.observe(document.getElementById('features'));
});
</script>

<template>
  <section id="features" class="min-h-screen py-20 relative overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-orange opacity-5 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange opacity-5 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div :class="['text-center mb-16 transition-all duration-1000 transform', 
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 neon-text">CUTTING-EDGE TECHNOLOGY</h2>
        <div class="w-24 h-1 bg-orange mx-auto mb-6"></div>
        <p class="text-xl text-orange-light max-w-3xl mx-auto">Discover the revolutionary features that define the next generation of technological advancement.</p>
      </div>
      
      <!-- Feature cards grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard 
          v-for="feature in features" 
          :key="feature.id"
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
          :is-visible="visibleFeatures.includes(feature.id)"
          :delay="features.indexOf(feature) * 100"
        />
      </div>
    </div>
  </section>
</template>