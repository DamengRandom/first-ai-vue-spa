import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  // State
  const isMenuOpen = ref(false)
  const activeSection = ref('hero')
  const darkMode = ref(true) // Always true for this design
  
  // Actions
  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
  }
  
  function setActiveSection(section) {
    activeSection.value = section
  }
  
  return {
    // State
    isMenuOpen,
    activeSection,
    darkMode,
    
    // Actions
    toggleMenu,
    setActiveSection
  }
})