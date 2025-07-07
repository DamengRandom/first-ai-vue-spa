<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="py-8 bg-black border-t border-orange relative overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 z-0 opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#FFA500" stroke-width="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- Logo and copyright -->
        <div class="mb-6 md:mb-0">
          <div class="text-xl font-bold neon-text tracking-wider mb-2">TRAE<span class="text-orange-light">TECH</span></div>
          <p class="text-orange-light text-sm">&copy; {{ currentYear }} TraeTech. All rights reserved.</p>
        </div>
        
        <!-- Social links -->
        <div class="flex space-x-6">
          <a href="#" class="text-orange hover:text-orange-light transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
            </svg>
          </a>
          <a href="#" class="text-orange hover:text-orange-light transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a href="#" class="text-orange hover:text-orange-light transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
            </svg>
          </a>
          <a href="#" class="text-orange hover:text-orange-light transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 9.293c0-.13-.073-.252-.19-.308-.117-.057-.257-.03-.347.068L12 14.586 6.537 9.053c-.09-.097-.23-.125-.347-.068-.117.057-.19.178-.19.308V15c0 .13.073.252.19.308.117.057.257.03.347-.068L12 9.414l5.463 5.533c.09.098.23.125.347.068.117-.056.19-.178.19-.308V9.293z" />
            </svg>
          </a>
        </div>
      </div>
      
      <!-- Navigation links -->
      <div class="mt-8 pt-8 border-t border-orange-dark">
        <ul class="flex flex-wrap justify-center space-x-6 text-sm">
          <li><a href="#" class="text-orange-light hover:text-orange transition-colors duration-300">Privacy Policy</a></li>
          <li><a href="#" class="text-orange-light hover:text-orange transition-colors duration-300">Terms of Service</a></li>
          <li><a href="#" class="text-orange-light hover:text-orange transition-colors duration-300">Careers</a></li>
          <li><a href="#" class="text-orange-light hover:text-orange transition-colors duration-300">Blog</a></li>
          <li><a href="#" class="text-orange-light hover:text-orange transition-colors duration-300">Contact</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>