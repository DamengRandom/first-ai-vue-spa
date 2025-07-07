<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useAppStore } from './stores/appStore';
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import FeaturesSection from './components/FeaturesSection.vue';
import ContactSection from './components/ContactSection.vue';
import FooterSection from './components/FooterSection.vue';

const appStore = useAppStore();

// Intersection Observer for section detection
let observers = [];

onMounted(() => {
  const sections = ['hero', 'features', 'contact'];
  
  sections.forEach(section => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          appStore.setActiveSection(section);
        }
      });
    }, { threshold: 0.6 });
    
    const element = document.getElementById(section);
    if (element) {
      observer.observe(element);
      observers.push({ observer, element });
    }
  });
});

onUnmounted(() => {
  // Clean up observers
  observers.forEach(({ observer, element }) => {
    observer.unobserve(element);
  });
  observers = [];
});
</script>

<template>
  <div class="app-container">
    <!-- Navigation -->
    <NavBar />
    
    <!-- Main Content -->
    <main class="parallax-container">
      <!-- Hero Section -->
      <HeroSection />
      
      <!-- Features Section -->
      <FeaturesSection />
      
      <!-- Contact Section -->
      <ContactSection />
    </main>
    
    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<style>
/* Global styles are in src/style.css */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
