<template>
  <div class="min-h-screen pt-32 pb-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 page-header">
        <h1 class="text-4xl md:text-5xl font-bold text-graphite-900 mb-4">
          About Us
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Delivering innovative, secure, and scalable software solutions since 2013.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 about-content">
        <div>
          <img
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Team collaboration"
            class="rounded-2xl shadow-2xl"
          />
        </div>

        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-graphite-900">
            Who We Are
          </h2>

          <p class="text-lg text-gray-600 leading-relaxed">
            Al Gharabli Group delivers innovative, secure, and scalable software. We tailor solutions to your challenges and ship with reliability, performance, and clean code.
          </p>

          <p class="text-lg text-gray-600 leading-relaxed">
            With over a decade of experience, we've partnered with businesses across multiple industries to transform ideas into powerful digital products.
          </p>

          <div class="space-y-4 pt-4">
            <div class="flex items-start space-x-3">
              <CheckCircle :size="24" class="text-primary-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 class="font-semibold text-graphite-900 mb-1">Quality First</h3>
                <p class="text-gray-600">Every line of code meets rigorous standards for performance and security.</p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <CheckCircle :size="24" class="text-primary-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 class="font-semibold text-graphite-900 mb-1">Client-Centric Approach</h3>
                <p class="text-gray-600">Your goals drive our process, from discovery to deployment.</p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <CheckCircle :size="24" class="text-primary-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 class="font-semibold text-graphite-900 mb-1">Modern Technology</h3>
                <p class="text-gray-600">We leverage cutting-edge tools and frameworks to future-proof your solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 md:p-12 capabilities-section">
        <h2 class="text-3xl font-bold text-graphite-900 mb-8 text-center">
          Our Capabilities
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="capability in capabilities"
            :key="capability.title"
            class="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            <component :is="capability.icon" :size="32" class="text-primary-600 mb-4" />
            <h3 class="text-lg font-semibold text-graphite-900 mb-2">
              {{ capability.title }}
            </h3>
            <p class="text-gray-600 text-sm">
              {{ capability.description }}
            </p>
          </div>
        </div>
      </div>

      <div class="mt-20 text-center values-section">
        <h2 class="text-3xl font-bold text-graphite-900 mb-12">
          Our Core Values
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-8">
            <div class="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Target :size="32" class="text-white" />
            </div>
            <h3 class="text-xl font-semibold text-graphite-900 mb-3">Excellence</h3>
            <p class="text-gray-600">
              We pursue the highest standards in every project, ensuring exceptional results.
            </p>
          </div>

          <div class="p-8">
            <div class="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield :size="32" class="text-white" />
            </div>
            <h3 class="text-xl font-semibold text-graphite-900 mb-3">Integrity</h3>
            <p class="text-gray-600">
              Transparency and honesty guide our relationships with clients and partners.
            </p>
          </div>

          <div class="p-8">
            <div class="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap :size="32" class="text-white" />
            </div>
            <h3 class="text-xl font-semibold text-graphite-900 mb-3">Innovation</h3>
            <p class="text-gray-600">
              We embrace new technologies and creative solutions to solve complex challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  CheckCircle,
  Code,
  Database,
  Cloud,
  Lock,
  Smartphone,
  Globe,
  Target,
  Shield,
  Zap,
} from 'lucide-vue-next';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    title: 'Frontend Development',
    description: 'React, Vue, Angular, and modern UI frameworks for responsive interfaces.',
    icon: Code,
  },
  {
    title: 'Backend Development',
    description: 'Node.js, Python, .NET, and scalable API architectures.',
    icon: Database,
  },
  {
    title: 'Cloud & DevOps',
    description: 'AWS, Azure, Docker, CI/CD pipelines for seamless deployment.',
    icon: Cloud,
  },
  {
    title: 'Mobile Development',
    description: 'Native iOS, Android, and cross-platform solutions with Flutter & React Native.',
    icon: Smartphone,
  },
  {
    title: 'Web Applications',
    description: 'Complex enterprise systems, dashboards, and custom web platforms.',
    icon: Globe,
  },
  {
    title: 'Security & Compliance',
    description: 'Best practices in authentication, encryption, and data protection.',
    icon: Lock,
  },
];

onMounted(() => {
  gsap.fromTo(
    '.page-header',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
  );

  gsap.fromTo(
    '.about-content',
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.about-content',
        start: 'top 80%',
      },
    }
  );

  gsap.fromTo(
    '.capabilities-section',
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.capabilities-section',
        start: 'top 80%',
      },
    }
  );

  gsap.fromTo(
    '.values-section > *',
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.values-section',
        start: 'top 80%',
      },
    }
  );
});
</script>
