<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);
const errorMessage = ref('');

const submitForm = () => {
  // Validate form
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    errorMessage.value = 'Please fill out all fields';
    return;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.value.email)) {
    errorMessage.value = 'Please enter a valid email address';
    return;
  }
  
  // Reset error message
  errorMessage.value = '';
  
  // Simulate form submission
  isSubmitting.value = true;
  
  setTimeout(() => {
    isSubmitting.value = false;
    isSubmitted.value = true;
    
    // Reset form
    formData.value = {
      name: '',
      email: '',
      message: ''
    };
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      isSubmitted.value = false;
    }, 5000);
  }, 1500);
};
</script>

<template>
  <section id="contact" class="py-20 relative overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 z-0 cyberpunk-grid opacity-30"></div>
    <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-0"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 neon-text">CONNECT WITH US</h2>
        <div class="w-24 h-1 bg-orange mx-auto mb-6"></div>
        <p class="text-xl text-orange-light max-w-3xl mx-auto">Have questions or want to learn more? Reach out to our team.</p>
      </div>
      
      <!-- Contact form -->
      <div class="max-w-2xl mx-auto">
        <div class="bg-black-light p-8 rounded-lg border border-orange shadow-neon-orange">
          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Success message -->
            <div v-if="isSubmitted" class="bg-black border border-orange-light p-4 rounded-md mb-6 animate-pulse-slow">
              <p class="text-orange-light font-medium">Your message has been sent successfully! We'll get back to you soon.</p>
            </div>
            
            <!-- Error message -->
            <div v-if="errorMessage" class="bg-black border border-orange p-4 rounded-md mb-6">
              <p class="text-orange font-medium">{{ errorMessage }}</p>
            </div>
            
            <!-- Name field -->
            <div>
              <label for="name" class="block text-orange-light mb-2 font-medium">Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name" 
                class="form-input w-full rounded-md bg-black border-orange focus:border-orange-light focus:ring focus:ring-orange-glow text-orange"
                :disabled="isSubmitting"
              >
            </div>
            
            <!-- Email field -->
            <div>
              <label for="email" class="block text-orange-light mb-2 font-medium">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                class="form-input w-full rounded-md bg-black border-orange focus:border-orange-light focus:ring focus:ring-orange-glow text-orange"
                :disabled="isSubmitting"
              >
            </div>
            
            <!-- Message field -->
            <div>
              <label for="message" class="block text-orange-light mb-2 font-medium">Message</label>
              <textarea 
                id="message" 
                v-model="formData.message" 
                rows="5" 
                class="form-input w-full rounded-md bg-black border-orange focus:border-orange-light focus:ring focus:ring-orange-glow text-orange"
                :disabled="isSubmitting"
              ></textarea>
            </div>
            
            <!-- Submit button -->
            <div>
              <button 
                type="submit" 
                class="btn-primary w-full glow-effect"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting" class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
                <span v-else>SEND MESSAGE</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>