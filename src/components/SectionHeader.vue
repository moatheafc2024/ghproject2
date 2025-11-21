<template>
  <div class="text-center mb-12">
    <h2 class="text-3xl md:text-4xl font-bold text-graphite-900 mb-4">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-lg text-gray-600 max-w-2xl mx-auto">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>
