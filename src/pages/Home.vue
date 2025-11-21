<template>
  <div class="relative overflow-hidden">
    <canvas ref="particleCanvas" class="fixed inset-0 pointer-events-none z-0"></canvas>

    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-900 to-cyan-900"></div>
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 20% 50%, rgba(46, 110, 161, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%);"></div>
        <div class="mesh-gradient-animated absolute inset-0 opacity-30"></div>
      </div>

      <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div v-for="i in 20" :key="i" class="floating-particle" :style="getParticleStyle(i)"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div class="text-center">
          <div class="inline-block mb-8 hero-badge-modern">
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-r from-primary-500 via-cyan-500 to-purple-500 blur-xl opacity-50 animate-pulse-slow"></div>
              <span class="relative glass-dark px-8 py-4 rounded-full text-sm md:text-base font-black text-white shadow-glow flex items-center space-x-3 backdrop-blur-2xl border border-white/20">
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </span>
                <span>INNOVATIVE DIGITAL SOLUTIONS</span>
                <Sparkles :size="18" class="animate-pulse" />
              </span>
            </div>
          </div>

       

          <h1 class="hero-title-creative text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-none tracking-tighter">
            <span class="block text-white mb-4">Transform</span>
            <span class="block">
              <span class="text-gradient-vivid glow-text">Ideas</span>
              <span class="text-white mx-4">Into</span>
            </span>
            <span class="block text-gradient-vivid glow-text mt-4">Reality</span>
          </h1>

          <p class="hero-subtitle-creative text-xl md:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-semibold">
            We craft <span class="text-cyan-400 font-black relative inline-block magic-underline">extraordinary</span> digital experiences
            <br class="hidden md:block" />
            that <span class="text-purple-400 font-black">inspire</span> and <span class="text-pink-400 font-black">captivate</span>
          </p>

          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 hero-cta">
            <router-link
              to="/contact"
              class="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-primary-500 to-purple-600 text-white text-xl font-black rounded-2xl transition-all duration-500 hover:shadow-glow-lg hover:scale-110 overflow-hidden transform hover:-rotate-2"
            >
              <span class="relative z-10 flex items-center space-x-3">
                <Rocket :size="24" class="group-hover:-rotate-45 group-hover:-translate-y-2 transition-all duration-500" />
                <span>Launch Project</span>
                <ArrowRight :size="24" class="group-hover:translate-x-2 transition-transform" />
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute inset-0 shimmer"></div>
            </router-link>

            <router-link
              to="/work"
              class="group relative px-10 py-5 glass-dark text-white text-xl font-black rounded-2xl hover:shadow-glow transition-all duration-500 backdrop-blur-2xl border-2 border-white/20 hover:border-cyan-400 hover:scale-110"
            >
              <span class="flex items-center space-x-3">
                <Eye :size="24" class="group-hover:scale-125 transition-transform" />
                <span>Explore Work</span>
              </span>
            </router-link>
          </div>

          <div class="flex flex-wrap justify-center gap-12 text-center stats-creative">
            <div class="stat-item-creative group cursor-pointer">
              <div class="relative">
                <div class="absolute inset-0 bg-cyan-500/20 blur-2xl group-hover:blur-3xl transition-all"></div>
                <div class="relative text-6xl md:text-7xl font-black text-gradient mb-3">10<span class="text-cyan-400">+</span></div>
              </div>
              <p class="text-gray-400 font-bold text-lg">Years Excellence</p>
            </div>
            <div class="stat-item-creative group cursor-pointer">
              <div class="relative">
                <div class="absolute inset-0 bg-purple-500/20 blur-2xl group-hover:blur-3xl transition-all"></div>
                <div class="relative text-6xl md:text-7xl font-black text-gradient mb-3">50<span class="text-purple-400">+</span></div>
              </div>
              <p class="text-gray-400 font-bold text-lg">Projects Launched</p>
            </div>
            <div class="stat-item-creative group cursor-pointer">
              <div class="relative">
                <div class="absolute inset-0 bg-pink-500/20 blur-2xl group-hover:blur-3xl transition-all"></div>
                <div class="relative text-6xl md:text-7xl font-black text-gradient mb-3">15<span class="text-pink-400">+</span></div>
              </div>
              <p class="text-gray-400 font-bold text-lg">Industries Served</p>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-12 left-1/2 transform -translate-x-1/2 scroll-pulse">
        <div class="flex flex-col items-center space-y-2 cursor-pointer group">
          <span class="text-white/60 text-sm font-semibold group-hover:text-white transition-colors">Scroll to explore</span>
          <div class="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-2 group-hover:border-cyan-400 transition-colors">
            <ChevronDown :size="16" class="text-white/60 animate-bounce group-hover:text-cyan-400" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 relative bg-gradient-to-b from-slate-900 to-slate-800">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px);"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-24">
          <h2 class="text-5xl md:text-7xl font-black text-white mb-6">
            Our <span class="text-gradient-vivid">Superpowers</span>
          </h2>
          <p class="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-medium">
            Cutting-edge solutions powered by innovation and expertise
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 services-grid-creative">
          <div
            v-for="service in services"
            :key="service.id"
            class="service-card-creative group relative"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

            <div class="relative glass-dark rounded-3xl p-8 hover:shadow-glow-lg transition-all duration-500 border border-white/10 group-hover:border-cyan-400/50 backdrop-blur-2xl transform group-hover:-translate-y-2 group-hover:scale-105">
              <div class="relative mb-8">
                <div class="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-glow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <component :is="getServiceIcon(service.icon)" :size="40" class="text-white" />
                </div>
                <div class="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
              </div>

              <h3 class="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {{ service.title }}
              </h3>

              <p class="text-gray-400 leading-relaxed text-lg mb-6">
                {{ service.description }}
              </p>

              <div class="flex items-center text-cyan-400 font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span>Discover more</span>
                <ArrowRight :size="20" class="ml-2 group-hover:translate-x-3 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

 <section class="py-32 relative bg-gradient-to-b from-slate-800 to-slate-900">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-20">
      <h2 class="text-5xl md:text-7xl font-black text-white mb-6">
        Featured <span class="text-gradient-vivid">Masterpieces</span>
      </h2>
      <p class="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-medium mb-12">
        Award-winning digital experiences that push boundaries
      </p>
    </div>

    <FilterChips
      v-model="selectedFilter"
      :filters="['All', 'Website', 'Mobile App', 'Web App']"
      class="mb-20"
    />

   <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-16 projects-grid">
  <ProjectCard
    v-for="project in displayedProjects"
    :key="project.id"
    :project="project"
    class="project-card-creative"
  />
</div>

<div v-if="displayedProjects.length < filteredProjects.length" class="flex justify-center mt-12">
  <button
    @click="loadMore"
    @mouseenter="isLoadMoreHovered = true"
    @mouseleave="isLoadMoreHovered = false"
    class="load-more-btn group relative px-12 py-6 cursor-pointer bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white text-lg font-black rounded-2xl transition-all duration-700 hover:shadow-glow-lg overflow-hidden transform hover:scale-110 hover:-rotate-2"
  >
    <div class="absolute inset-0 rounded-2xl overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-x"></div>
      <div class="absolute inset-0 shimmer"></div>

      <div v-for="i in 12" :key="i"
           :class="['particle-burst absolute w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100', `particle-${i}`]"
           :style="getParticleBurstStyle(i)"></div>
    </div>

    <div class="absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:border-white/50 transition-all duration-500"></div>

    <span class="relative z-10 flex items-center space-x-4">
      <Sparkles :size="24" class="group-hover:rotate-180 group-hover:scale-125 transition-all duration-700 animate-pulse-glow" />
      <span class="relative">
        Load More
        <span class="absolute inset-0 blur-md bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
      </span>
      <ArrowRight :size="24" class="group-hover:translate-x-3 transition-all duration-500" />
    </span>

    <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-700 -z-10 animate-pulse-slow"></div>
  </button>
</div>
    <!-- <div class="text-center">
      <router-link
        to="/work"
        class="inline-flex items-center space-x-4 px-12 py-6 glass-dark text-white font-black text-xl rounded-2xl hover:shadow-glow-lg transition-all duration-500 group backdrop-blur-2xl border-2 border-white/20 hover:border-cyan-400 transform hover:scale-110"
      >
        <span>View Complete Portfolio</span>
        <ArrowRight :size="24" class="group-hover:translate-x-3 transition-transform" />
      </router-link>
    </div> -->
  </div>
</section>


    <section class="py-32 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-cyan-600 via-primary-600 to-purple-700">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 50px 50px;"></div>
      </div>

      <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center cta-section-creative">
        <div class="inline-block mb-12">
          <div class="relative">
            <div class="absolute inset-0 bg-white blur-3xl opacity-50 animate-pulse-slow"></div>
            <div class="relative w-28 h-28 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white/30">
              <Zap :size="56" class="text-white animate-pulse" />
            </div>
          </div>
        </div>

        <h2 class="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
          Ready to Create<br />
          <span class="text-yellow-300">Magic Together?</span>
        </h2>

        <p class="text-2xl md:text-3xl text-cyan-100 mb-16 font-bold">
          Let's build something extraordinary that stands out
        </p>

        <router-link
          to="/contact"
          class="inline-flex items-center space-x-4 px-12 py-7 bg-white text-primary-600 text-2xl font-black rounded-2xl hover:shadow-glow-lg hover:scale-110 transition-all duration-500 group transform hover:rotate-2"
        >
          <Rocket :size="32" class="group-hover:-translate-y-2 group-hover:-rotate-12 transition-all duration-500" />
          <span>Start Your Journey</span>
          <Sparkles :size="32" class="group-hover:rotate-180 transition-transform duration-700" />
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  Sparkles,
  Zap,
  Rocket,
  Eye,
  ChevronDown,
  Globe,
  Smartphone,
  Network,
  Layout,
  Lightbulb,
  Users,
} from 'lucide-vue-next';
import FilterChips from '../components/FilterChips.vue';
import ProjectCard from '../components/ProjectCard.vue';
import { services } from '../data/services';
import { projects } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

const particleCanvas = ref<HTMLCanvasElement | null>(null);
const selectedFilter = ref('All');
const isLoadMoreHovered = ref(false);

const filteredProjects = computed(() => {
  return selectedFilter.value === 'All'
    ? projects
    : projects.filter((p) => p.categories.includes(selectedFilter.value));
});

const itemsPerPage = 6;
const visibleCount = ref(itemsPerPage);

const displayedProjects = computed(() => {
  return filteredProjects.value.slice(0, visibleCount.value);
});

const loadMore = () => {
  visibleCount.value += itemsPerPage;
};

const getParticleBurstStyle = (index: number) => {
  return {
    left: '50%',
    top: '50%',
    transform: `translate(-50%, -50%)`,
    animationDelay: `${index * 0.05}s`,
  };
};

const getServiceIcon = (iconName: string) => {
  const iconMap: Record<string, any> = {
    globe: Globe,
    smartphone: Smartphone,
    network: Network,
    layout: Layout,
    lightbulb: Lightbulb,
    users: Users,
  };
  return iconMap[iconName] || Globe;
};

const getParticleStyle = (_index: number) => {
  const size = Math.random() * 4 + 2;
  const duration = Math.random() * 20 + 15;
  const delay = Math.random() * 5;
  return {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
  };
};

const initParticles = () => {
  if (!particleCanvas.value) return;

  const canvas = particleCanvas.value;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles: any[] = [];
  const particleCount = 100;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
    });
  }

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(6, 182, 212, 0.3)';

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(animate);
  };

  animate();
};

onMounted(() => {
  initParticles();

  gsap.fromTo(
    '.hero-badge-modern',
    { opacity: 0, scale: 0.5, y: -50 },
    { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'back.out(2)' }
  );

  gsap.fromTo(
    '.hero-logo',
    { opacity: 0, scale: 0.5, rotateY: -180 },
    { opacity: 1, scale: 1, rotateY: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
  );

  gsap.fromTo(
    '.hero-title-creative',
    { opacity: 0, y: 60, scale: 0.8 },
    { opacity: 1, y: 0, scale: 1, duration: 1, delay: 0.5, ease: 'power4.out' }
  );

  gsap.fromTo(
    '.hero-subtitle-creative',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: 'power3.out' }
  );

  gsap.fromTo(
    '.hero-cta',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, delay: 1, ease: 'power2.out' }
  );

  gsap.fromTo(
    '.stat-item-creative',
    { opacity: 0, scale: 0.5, y: 30 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      delay: 1.2,
      stagger: 0.15,
      ease: 'back.out(2)',
    }
  );

  gsap.fromTo(
    '.service-card-creative',
    { opacity: 0, y: 80, rotationX: -20 },
    {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.services-grid-creative',
        start: 'top 80%',
      },
    }
  );

  gsap.fromTo(
    '.project-card-creative',
    { opacity: 0, y: 80, rotationY: -15 },
    {
      opacity: 1,
      y: 0,
      rotationY: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.project-card-creative',
        start: 'top 85%',
      },
    }
  );

  gsap.fromTo(
    '.cta-section-creative',
    { opacity: 0, scale: 0.9 },
    {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.cta-section-creative',
        start: 'top 80%',
      },
    }
  );
});
</script>

<style scoped>
.floating-particle {
  position: absolute;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.8), rgba(6, 182, 212, 0));
  border-radius: 50%;
  animation: float-particle infinite ease-in-out;
  pointer-events: none;
}

@keyframes float-particle {
  0%, 100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(20px, -30px);
  }
  50% {
    transform: translate(-15px, 20px);
  }
  75% {
    transform: translate(30px, 10px);
  }
}

.mesh-gradient-animated {
  background: linear-gradient(45deg, #2E6EA1, #1B84B8, #06b6d4, #a855f7);
  background-size: 400% 400%;
  animation: gradient-shift 15s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.glow-text {
  text-shadow: 0 0 20px rgba(6, 182, 212, 0.5),
               0 0 40px rgba(6, 182, 212, 0.3),
               0 0 60px rgba(6, 182, 212, 0.2);
}

.magic-underline::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #06b6d4, #a855f7, #ec4899);
  animation: shimmer 2s linear infinite;
  background-size: 200% 100%;
}

.scroll-pulse {
  animation: bounce-slow 3s ease-in-out infinite;
}

@keyframes bounce-slow {
  0%, 100% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, 10px); }
}

.load-more-btn {
  position: relative;
  box-shadow: 0 10px 40px rgba(6, 182, 212, 0.3);
}

.load-more-btn:hover {
  box-shadow: 0 20px 60px rgba(6, 182, 212, 0.5),
              0 0 80px rgba(168, 85, 247, 0.4);
}

.particle-burst {
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.load-more-btn:hover .particle-burst {
  animation: particle-explode 1s ease-out forwards;
}

@keyframes particle-explode {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(calc(-50% + var(--particle-x, 0)), calc(-50% + var(--particle-y, 0))) scale(0);
    opacity: 0;
  }
}

.particle-1 { --particle-x: 60px; --particle-y: 0px; }
.particle-2 { --particle-x: 52px; --particle-y: 30px; }
.particle-3 { --particle-x: 30px; --particle-y: 52px; }
.particle-4 { --particle-x: 0px; --particle-y: 60px; }
.particle-5 { --particle-x: -30px; --particle-y: 52px; }
.particle-6 { --particle-x: -52px; --particle-y: 30px; }
.particle-7 { --particle-x: -60px; --particle-y: 0px; }
.particle-8 { --particle-x: -52px; --particle-y: -30px; }
.particle-9 { --particle-x: -30px; --particle-y: -52px; }
.particle-10 { --particle-x: 0px; --particle-y: -60px; }
.particle-11 { --particle-x: 30px; --particle-y: -52px; }
.particle-12 { --particle-x: 52px; --particle-y: -30px; }

@keyframes gradient-x {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 3s ease infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.8));
  }
  50% {
    filter: drop-shadow(0 0 20px rgba(168, 85, 247, 1));
  }
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}
</style>
