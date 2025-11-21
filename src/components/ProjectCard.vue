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
