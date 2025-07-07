<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useAppStore } from '../stores/appStore';

const appStore = useAppStore();
const isScrolled = ref(false);

const checkScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});

const toggleMenu = () => {
  appStore.toggleMenu();
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    appStore.setActiveSection(sectionId);
    if (appStore.isMenuOpen) {
      appStore.toggleMenu();
    }
  }
};
</script>

<template>
  <nav :class="['fixed w-full z-50 transition-all duration-300 py-4 px-6', 
              isScrolled ? 'bg-black shadow-neon-orange' : 'bg-transparent']">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center">
        <div class="text-2xl font-bold neon-text tracking-wider">TRAE<span class="text-orange-light">TECH</span></div>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-8">
        <button @click="scrollToSection('hero')" 
                class="text-orange hover:text-orange-light transition-colors duration-300 uppercase tracking-wider">
          Home
        </button>
        <button @click="scrollToSection('features')" 
                class="text-orange hover:text-orange-light transition-colors duration-300 uppercase tracking-wider">
          Features
        </button>
        <button @click="scrollToSection('contact')" 
                class="text-orange hover:text-orange-light transition-colors duration-300 uppercase tracking-wider">
          Contact
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden text-orange hover:text-orange-light">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!appStore.isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="appStore.isMenuOpen" 
         class="md:hidden absolute top-full left-0 w-full bg-black border-t border-orange animate-pulse-slow">
      <div class="container mx-auto py-4 px-6 flex flex-col space-y-4">
        <button @click="scrollToSection('hero')" 
                class="text-orange hover:text-orange-light transition-colors duration-300 uppercase tracking-wider text-left">
          Home
        </button>
        <button @click="scrollToSection('features')" 
                class="text-orange hover:text-orange-light transition-colors duration-300 uppercase tracking-wider text-left">
          Features
        </button>
        <button @click="scrollToSection('contact')" 
                class="text-orange hover:text-orange-light transition-colors duration-300 uppercase tracking-wider text-left">
          Contact
        </button>
      </div>
    </div>
  </nav>
</template>