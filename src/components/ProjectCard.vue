<template>
  <a
    :href="project.url"
    target="_blank"
    rel="noopener noreferrer"
    class="block group cursor-pointer"
  >
    <div
      class="relative h-full bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]"
    >
      <div class="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-white to-primary-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <svg class="absolute bottom-0 left-0 w-full h-24 wave-svg" preserveAspectRatio="none" viewBox="0 0 1440 120">
        <path
          class="wave-path"
          d="M0,60 C240,90 480,30 720,60 C960,90 1200,30 1440,60 L1440,120 L0,120 Z"
          fill="url(#waveGradient)"
        />
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:0.15" />
            <stop offset="50%" style="stop-color:#0891b2;stop-opacity:0.25" />
            <stop offset="100%" style="stop-color:#06b6d4;stop-opacity:0.15" />
          </linearGradient>
        </defs>
      </svg>

      <div class="relative p-6 sm:p-8 md:p-10">
        <div class="relative mb-6 aspect-square w-full max-w-[280px] mx-auto flex items-center justify-center">
          <div class="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-cyan-100/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>

          <div class="relative w-full h-full flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl group-hover:scale-105 transition-transform duration-500">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 filter group-hover:drop-shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>

        <div class="text-center space-y-4">
          <h3 class="text-xl sm:text-2xl font-black text-graphite-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300">
            {{ project.title }}
          </h3>

          <div class="flex flex-wrap justify-center gap-2">
            <span
              v-for="cat in project.categories"
              :key="cat"
              class="px-4 py-1.5 bg-gradient-to-r from-primary-50 to-cyan-50 text-primary-700 text-xs font-bold rounded-full border border-primary-200/50 group-hover:from-primary-100 group-hover:to-cyan-100 group-hover:border-primary-300 transition-all duration-300"
            >
              {{ cat }}
            </span>
          </div>
        </div>

        <div class="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg group-hover:scale-110 group-hover:rotate-12">
          <ExternalLink :size="18" class="text-primary-600" />
        </div>

        <div class="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary-200 transition-all duration-500 pointer-events-none"></div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { ExternalLink } from 'lucide-vue-next';
import type { Project } from '../data/projects';

defineProps<{
  project: Project;
}>();
</script>

<style scoped>
.wave-svg {
  transition: all 0.3s ease;
}

.group:hover .wave-svg {
  animation: waveMotion 3s ease-in-out infinite;
}

@keyframes waveMotion {
  0%, 100% {
    transform: translateX(0) scale(1, 1);
  }
  25% {
    transform: translateX(-2%) scale(1.02, 0.95);
  }
  50% {
    transform: translateX(0) scale(1, 1.05);
  }
  75% {
    transform: translateX(2%) scale(0.98, 1);
  }
}

.wave-path {
  transition: all 0.5s ease;
}

.group:hover .wave-path {
  fill: url(#waveGradientHover);
}

.group:hover svg defs linearGradient stop:nth-child(1) {
  stop-opacity: 0.25;
}

.group:hover svg defs linearGradient stop:nth-child(2) {
  stop-opacity: 0.4;
}

.group:hover svg defs linearGradient stop:nth-child(3) {
  stop-opacity: 0.25;
}
</style>
