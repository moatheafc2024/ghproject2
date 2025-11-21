<template>
  <a
    :href="project.url"
    target="_blank"
    rel="noopener noreferrer"
    class="block group cursor-pointer"
  >
    <div
      class="relative h-full bg-gradient-to-br from-gray-50 via-white to-cyan-50/30 rounded-3xl overflow-hidden border border-gray-300/60 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]"
    >
      <svg class="absolute top-0 left-0 w-full h-[60%] wave-svg" preserveAspectRatio="none" viewBox="0 0 1440 600">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#0e7490;stop-opacity:0.5" />
            <stop offset="40%" style="stop-color:#0891b2;stop-opacity:0.35" />
            <stop offset="100%" style="stop-color:#06b6d4;stop-opacity:0.15" />
          </linearGradient>
        </defs>
        <path
          class="wave-path-1"
          d="M0,320 C320,280 640,360 960,320 C1280,280 1440,320 1440,320 L1440,0 L0,0 Z"
          fill="url(#waveGradient)"
        />
        <path
          class="wave-path-2"
          d="M0,280 C360,320 720,240 1080,280 C1320,300 1440,260 1440,260 L1440,0 L0,0 Z"
          fill="url(#waveGradient)"
          opacity="0.6"
        />
        <path
          class="wave-path-3"
          d="M0,240 C280,280 560,200 840,240 C1120,280 1440,220 1440,220 L1440,0 L0,0 Z"
          fill="url(#waveGradient)"
          opacity="0.4"
        />
      </svg>

      <div class="relative p-6 sm:p-8 md:p-10">
        <div class="relative mb-6 aspect-square w-full max-w-[280px] mx-auto flex items-center justify-center">
          <div class="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-cyan-100/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>

          <div class="relative w-full h-full flex items-center justify-center p-8 bg-gradient-to-br from-slate-50 via-white to-gray-50 rounded-2xl group-hover:scale-105 transition-transform duration-500 border border-gray-200/50">
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
              class="px-4 py-1.5 bg-gradient-to-r from-cyan-100 to-primary-100 text-cyan-700 text-xs font-bold rounded-full border border-cyan-300/60 group-hover:from-cyan-200 group-hover:to-primary-200 group-hover:border-cyan-400 group-hover:shadow-md transition-all duration-300"
            >
              {{ cat }}
            </span>
          </div>
        </div>

        <div class="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-white to-cyan-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg group-hover:scale-110 group-hover:rotate-12 border border-cyan-200/50">
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
  transition: opacity 0.5s ease;
}

.wave-path-1 {
  transition: all 0.8s ease;
}

.wave-path-2 {
  transition: all 0.8s ease;
}

.wave-path-3 {
  transition: all 0.8s ease;
}

.group:hover .wave-path-1 {
  animation: waveFlow1 4s ease-in-out infinite;
  opacity: 1;
}

.group:hover .wave-path-2 {
  animation: waveFlow2 5s ease-in-out infinite;
  opacity: 0.8;
}

.group:hover .wave-path-3 {
  animation: waveFlow3 6s ease-in-out infinite;
  opacity: 0.6;
}

@keyframes waveFlow1 {
  0%, 100% {
    d: path("M0,320 C320,280 640,360 960,320 C1280,280 1440,320 1440,320 L1440,0 L0,0 Z");
  }
  50% {
    d: path("M0,340 C320,300 640,380 960,340 C1280,300 1440,340 1440,340 L1440,0 L0,0 Z");
  }
}

@keyframes waveFlow2 {
  0%, 100% {
    d: path("M0,280 C360,320 720,240 1080,280 C1320,300 1440,260 1440,260 L1440,0 L0,0 Z");
  }
  50% {
    d: path("M0,300 C360,340 720,260 1080,300 C1320,320 1440,280 1440,280 L1440,0 L0,0 Z");
  }
}

@keyframes waveFlow3 {
  0%, 100% {
    d: path("M0,240 C280,280 560,200 840,240 C1120,280 1440,220 1440,220 L1440,0 L0,0 Z");
  }
  50% {
    d: path("M0,260 C280,300 560,220 840,260 C1120,300 1440,240 1440,240 L1440,0 L0,0 Z");
  }
}

.group:hover .wave-svg {
  opacity: 1;
}
</style>
