<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label for="name" class="block text-sm font-medium text-graphite-900 mb-2">
          Name <span class="text-red-500">*</span>
        </label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          :class="{ 'border-red-500': errors.name }"
        />
        <p v-if="errors.name" class="mt-1 text-sm text-red-500">{{ errors.name }}</p>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-graphite-900 mb-2">
          Email <span class="text-red-500">*</span>
        </label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          :class="{ 'border-red-500': errors.email }"
        />
        <p v-if="errors.email" class="mt-1 text-sm text-red-500">{{ errors.email }}</p>
      </div>

      <div>
        <label for="phone" class="block text-sm font-medium text-graphite-900 mb-2">
          Phone
        </label>
        <input
          id="phone"
          v-model="form.phone"
          type="tel"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label for="city" class="block text-sm font-medium text-graphite-900 mb-2">
          City
        </label>
        <input
          id="city"
          v-model="form.city"
          type="text"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        />
      </div>
    </div>

    <div>
      <label for="message" class="block text-sm font-medium text-graphite-900 mb-2">
        Message <span class="text-red-500">*</span>
      </label>
      <textarea
        id="message"
        v-model="form.message"
        required
        rows="5"
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
        :class="{ 'border-red-500': errors.message }"
      ></textarea>
      <p v-if="errors.message" class="mt-1 text-sm text-red-500">{{ errors.message }}</p>
    </div>

    <div v-if="successMessage" class="p-4 bg-green-50 border border-green-200 rounded-lg">
      <p class="text-green-800 flex items-center space-x-2">
        <CheckCircle :size="20" />
        <span>{{ successMessage }}</span>
      </p>
    </div>

    <button
      type="submit"
      :disabled="isSubmitting"
      class="w-full md:w-auto px-8 py-3 bg-gradient-primary text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <span v-if="!isSubmitting">Send Message</span>
      <span v-else class="flex items-center space-x-2">
        <span>Sending...</span>
      </span>
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { CheckCircle } from 'lucide-vue-next';

const form = reactive({
  name: '',
  email: '',
  phone: '',
  city: '',
  message: '',
});

const errors = reactive({
  name: '',
  email: '',
  message: '',
});

const isSubmitting = ref(false);
const successMessage = ref('');

const validateForm = () => {
  let isValid = true;
  errors.name = '';
  errors.email = '';
  errors.message = '';

  if (!form.name.trim()) {
    errors.name = 'Name is required';
    isValid = false;
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required';
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email';
    isValid = false;
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required';
    isValid = false;
  }

  return isValid;
};

const handleSubmit = async () => {
  successMessage.value = '';

  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;

  try {
    await new Promise(resolve => setTimeout(resolve, 1500));

    successMessage.value = 'Thank you for your message! We will get back to you soon.';

    form.name = '';
    form.email = '';
    form.phone = '';
    form.city = '';
    form.message = '';
  } catch (error) {
    console.error('Form submission error:', error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>
