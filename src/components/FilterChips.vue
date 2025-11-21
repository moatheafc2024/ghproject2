<template>
  <div class="flex flex-wrap justify-center gap-3 mb-12">
    <button
      v-for="(filter, index) in filters"
      :key="filter"
      @click="$emit('update:modelValue', filter)"
      :class="[
        'relative px-8 py-3 rounded-2xl font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 overflow-hidden group',
        modelValue === filter
          ? 'bg-gradient-primary text-white shadow-glow scale-105'
          : 'glass text-graphite-800 hover:shadow-card hover:scale-105'
      ]"
      :style="{ animationDelay: `${index * 50}ms` }"
    >
      <span class="relative z-10 flex items-center space-x-2">
        <span>{{ filter }}</span>
        <span
          v-if="modelValue === filter"
          class="w-2 h-2 bg-white rounded-full animate-pulse"
        ></span>
      </span>
      <div
        v-if="modelValue !== filter"
        class="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      ></div>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  filters: string[];
  modelValue: string;
}>();

defineEmits<{
  'update:modelValue': [value: string];
}>();
</script>
