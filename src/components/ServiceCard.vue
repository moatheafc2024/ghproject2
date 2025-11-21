<template>
  <div
    class="group bg-white rounded-2xl p-8 border border-gray-200 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
  >
    <div class="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <component :is="iconComponent" :size="28" class="text-white" />
    </div>

    <h3 class="text-xl font-semibold text-graphite-900 mb-3">
      {{ service.title }}
    </h3>

    <p class="text-gray-600 leading-relaxed">
      {{ service.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Globe, Smartphone, Network, Layout, Lightbulb, Users } from 'lucide-vue-next';
import type { Service } from '../data/services';

const props = defineProps<{
  service: Service;
}>();

const iconMap = {
  globe: Globe,
  smartphone: Smartphone,
  network: Network,
  layout: Layout,
  lightbulb: Lightbulb,
  users: Users,
};

const iconComponent = computed(() => {
  return iconMap[props.service.icon as keyof typeof iconMap] || Globe;
});
</script>
