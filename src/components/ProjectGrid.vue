<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <ProjectCard
      v-for="project in filteredProjects"
      :key="project.id"
      :project="project"
      class="reveal-card"
    />
  </div>

  <div v-if="filteredProjects.length === 0" class="text-center py-16">
    <p class="text-gray-500 text-lg">No projects found in this category.</p>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard.vue';
import type { Project } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

const props = defineProps<{
  items: Project[];
  filter: string;
}>();

const filteredProjects = computed(() => {
  if (props.filter === 'All') {
    return props.items;
  }
  return props.items.filter(project => project.categories.includes(props.filter));
});

onMounted(() => {
  const cards = document.querySelectorAll('.reveal-card');

  gsap.fromTo(
    cards,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: cards[0],
        start: 'top 80%',
      },
    }
  );
});
</script>
