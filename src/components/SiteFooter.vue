<template>
  <footer class="bg-graphite-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- brightness-0 invert -->
        <div>
          <img src="/logo (3).png" alt="Al Gharabli Group" class="h-10 w-auto mb-4" />
          <p class="text-gray-400 text-sm leading-relaxed">
            Crafting high-performance web and mobile solutions that scale with your business.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4 text-black">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="link in footerLinks" :key="link.path">
              <router-link
                :to="link.path"
                class="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4 text-black">Contact</h3>
          <ul class="space-y-3 text-sm text-gray-400">
            <li class="flex items-start space-x-3">
              <MapPin :size="18" class="mt-0.5 flex-shrink-0" />
              <span>Amman, Jordan</span>
            </li>
            <li class="flex items-start space-x-3">
              <Phone :size="18" class="mt-0.5 flex-shrink-0" />
              <a href="tel:+(962) 79-9822123" class="hover:text-white transition-colors">+(962) 79-9822123</a>
            </li>
            <li class="flex items-start space-x-3">
              <Mail :size="18" class="mt-0.5 flex-shrink-0" />
              <a href="mailto:info@algharabli.com" class="hover:text-white transition-colors">
                info@algharabli.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8">
        <p class="text-center text-gray-400 text-sm">
          &copy; {{ currentYear }} Al Gharabli Group. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { MapPin, Phone, Mail } from 'lucide-vue-next';

const currentYear = computed(() => new Date().getFullYear());

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'Our Work', path: '/work' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];
</script>
