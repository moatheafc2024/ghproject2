<template>
  <div class="min-h-screen pt-32 pb-20 bg-gradient-to-br from-gray-50 via-primary-50/20 to-cyan-50/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 page-header">
        <div class="inline-block mb-6">
          <span class="glass px-6 py-3 rounded-full text-sm font-semibold text-primary-700 shadow-glow">
            ✨ Our Portfolio
          </span>
        </div>

        <h1 class="text-5xl md:text-6xl lg:text-7xl font-black text-graphite-900 mb-6">
          Our <span class="text-gradient-vivid">Projects</span>
        </h1>

        <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          Explore our portfolio of <span class="text-primary-600 font-bold">exceptional</span> digital experiences across industries
        </p>
      </div>

      <FilterChips
        v-model="selectedFilter"
        :filters="['All', 'Website', 'Mobile App', 'Web App']"
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
          class="project-card-modern"
        />
      </div>

      <div v-if="filteredProjects.length === 0" class="text-center py-20">
        <div class="inline-block p-8 glass rounded-3xl">
          <Search :size="48" class="text-gray-400 mx-auto mb-4" />
          <p class="text-gray-500 text-lg font-medium">No projects found in this category</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { gsap } from 'gsap';
import { Search } from 'lucide-vue-next';
import FilterChips from '../components/FilterChips.vue';
import ProjectCard from '../components/ProjectCard.vue';
import { projects } from '../data/projects';

const selectedFilter = ref('All');

const filteredProjects = computed(() => {
  if (selectedFilter.value === 'All') {
    return projects;
  }
  return projects.filter(project => project.categories.includes(selectedFilter.value));
});

onMounted(() => {
  gsap.fromTo(
    '.page-header',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
  );

  gsap.fromTo(
    '.project-card-modern',
    { opacity: 0, y: 60, rotationX: -10 },
    {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: 'power3.out',
      delay: 0.3,
    }
  );
});
</script>
