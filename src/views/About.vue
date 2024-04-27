<script setup>
import { defineAsyncComponent } from 'vue'
import { constructContactsData } from '@/util/data'

defineProps({
  data: {
    type: Object
  }
})

// Components
const Introduction = defineAsyncComponent(() => import('@/components/sections/AboutUsIntroduction.vue'))
const Philosophy = defineAsyncComponent(() => import('@/components/sections/AboutUsPhilosophy.vue'))
const Networks = defineAsyncComponent(() => import('@/components/sections/AboutUsNetworks.vue'))
const Certification = defineAsyncComponent(() => import('@/components/sections/AboutUsCertification.vue'))
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'))
</script>

<template>
  <div class="about-us-container">
    <!-- Introduction -->
    <Introduction />
    <!-- Philosophy -->
    <Philosophy />
    <!-- Networks -->
    <Networks />
    <!-- Certification -->
    <Certification />
    <!-- Footer -->
    <Footer :contacts="constructContactsData(data)" class="about-us-footer" />
  </div>
</template>

<style scoped>
.about-us-container {
  height: calc(100dvh - var(--cntr-header-height));
  display: flex;
  flex-direction: column;
}

.about-us-footer {
  position: relative;
  top: -23px;
}

@media screen and (min-width: 1025px) {
  .about-us-footer {
    top: -54px;
  }
}
</style>
