<script setup>
import { defineAsyncComponent, ref } from 'vue'
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
const Modal = defineAsyncComponent(() => import('@/components/sections/CertificateModal.vue'))

const showCertificatetModal = ref(false)

const toggleCertificateModal = (toggle) => {
  showCertificatetModal.value = toggle
}
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
    <Certification @itemClicked="toggleCertificateModal" />
    <!-- Footer -->
    <Footer :contacts="constructContactsData(data)" class="about-us-footer" />
    <!-- Certificate Modal -->
    <Modal
      :show="showCertificatetModal"
      @close="toggleCertificateModal"
    />
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
