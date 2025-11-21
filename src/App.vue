<template>
  <div class="min-h-screen flex flex-col">
    <AppNavbar />

    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition
          name="page"
          mode="out-in"
          @enter="onEnter"
          @leave="onLeave"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import AppNavbar from './components/AppNavbar.vue';
import SiteFooter from './components/SiteFooter.vue';

const onEnter = (el: Element) => {
  gsap.fromTo(
    el,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
  );
};

const onLeave = (el: Element, done: () => void) => {
  gsap.to(el, {
    opacity: 0,
    y: -20,
    duration: 0.3,
    ease: 'power2.in',
    onComplete: done,
  });
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
