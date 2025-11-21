<template>
  <div class="min-h-screen pt-32 pb-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 page-header">
        <h1 class="text-4xl md:text-5xl font-bold text-graphite-900 mb-4">
          Get In Touch
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Ready to get started? Tell us about your project and we'll get back to you.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 contact-content">
        <div>
          <div class="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 md:p-10 mb-8">
            <h2 class="text-2xl font-bold text-graphite-900 mb-6">
              Contact Information
            </h2>

            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin :size="24" class="text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-graphite-900 mb-1">Location</h3>
                  <p class="text-gray-600">Amman, Jordan</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone :size="24" class="text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-graphite-900 mb-1">Phone</h3>
                  <a href="tel:+962" class="text-gray-600 hover:text-primary-600 transition-colors">
                    +962 XX XXX XXXX
                  </a>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail :size="24" class="text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-graphite-900 mb-1">Email</h3>
                  <a
                    href="mailto:info@algharabli.com"
                    class="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    info@algharabli.com
                  </a>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock :size="24" class="text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-graphite-900 mb-1">Business Hours</h3>
                  <p class="text-gray-600">Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-card">
            <h3 class="text-xl font-bold text-graphite-900 mb-4">
              Why Choose Al Gharabli Group?
            </h3>
            <ul class="space-y-3">
              <li class="flex items-start space-x-3">
                <CheckCircle :size="20" class="text-primary-600 flex-shrink-0 mt-0.5" />
                <span class="text-gray-600">Proven track record with 50+ successful projects</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle :size="20" class="text-primary-600 flex-shrink-0 mt-0.5" />
                <span class="text-gray-600">Expert team with diverse technical expertise</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle :size="20" class="text-primary-600 flex-shrink-0 mt-0.5" />
                <span class="text-gray-600">Agile development with transparent communication</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle :size="20" class="text-primary-600 flex-shrink-0 mt-0.5" />
                <span class="text-gray-600">Ongoing support and maintenance</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-card">
          <h2 class="text-2xl font-bold text-graphite-900 mb-6">
            Send Us a Message
          </h2>

          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-vue-next';
import ContactForm from '../components/ContactForm.vue';

onMounted(() => {
  gsap.fromTo(
    '.page-header',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
  );

  gsap.fromTo(
    '.contact-content',
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      delay: 0.2,
    }
  );
});
</script>
