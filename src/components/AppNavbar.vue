<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-24">
        <router-link to="/" class="flex items-center space-x-3 group relative">
          <div class="absolute -inset-2 bg-gradient-to-r from-primary-400 via-cyan-400 to-primary-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500 animate-pulse"></div>
          <div :class="[
            'relative overflow-hidden rounded-xl transition-all duration-500',
            scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md shadow-2xl'
          ]">
            <div class="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative p-2.5">
              <img src="/logo (3).png" alt="Al Gharabli Group" class="h-12 md:h-14 w-auto transition-all duration-500 group-hover:scale-105" />
            </div>
            <div class="absolute inset-0 border border-primary-200/0 group-hover:border-primary-300/50 rounded-xl transition-all duration-500"></div>
          </div>
        </router-link>

        <div class="hidden md:flex items-center space-x-6">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            :class="[
              'relative text-base font-semibold transition-all duration-200 group',
              scrolled
                ? (isActive(link.path) ? 'text-primary-600' : 'text-graphite-800 hover:text-primary-600')
                : (isActive(link.path) ? 'text-white' : 'text-white/90 hover:text-white')
            ]"
          >
            <span class="relative z-10">{{ link.label }}</span>
            <span
              :class="[
                'absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary transform origin-left transition-transform duration-300',
                isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              ]"
            ></span>
          </router-link>

          <router-link
            to="/contact"
            class="relative px-6 py-2.5 bg-gradient-primary text-white rounded-xl font-bold transition-all duration-300 hover:shadow-glow hover:scale-105 group overflow-hidden"
          >
            <span class="relative z-10 flex items-center space-x-2">
              <span>Contact Us</span>
              <ArrowRight :size="16" class="group-hover:translate-x-1 transition-transform" />
            </span>
            <div class="absolute inset-0 shimmer"></div>
          </router-link>
        </div>

        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-xl glass hover:shadow-card transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
          :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <Menu v-if="!mobileMenuOpen" :size="24" :class="scrolled ? 'text-graphite-900' : 'text-white'" />
          <X v-else :size="24" :class="scrolled ? 'text-graphite-900' : 'text-white'" />
        </button>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="mobileMenuOpen"
        class="md:hidden glass border-t border-white/20 backdrop-blur-xl"
      >
        <div class="px-4 pt-2 pb-4 space-y-1">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="mobileMenuOpen = false"
            :class="[
              'block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200',
              isActive(link.path)
                ? 'bg-primary-50 text-primary-600 shadow-inner-glow'
                : 'text-graphite-700 hover:bg-white/50 hover:text-primary-600'
            ]"
          >
            {{ link.label }}
          </router-link>

          <router-link
            to="/contact"
            @click="mobileMenuOpen = false"
            class="block px-4 py-3 bg-gradient-primary text-white rounded-xl font-bold text-center mt-4 hover:shadow-glow transition-all duration-200"
          >
            Contact Us
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { Menu, X, ArrowRight } from 'lucide-vue-next';

const route = useRoute();
const scrolled = ref(false);
const mobileMenuOpen = ref(false);

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Our Work', path: '/work' },
  { label: 'About', path: '/about' },
];

const isActive = (path: string) => {
  return route.path === path;
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
