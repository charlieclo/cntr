<script setup>
import { defineAsyncComponent } from 'vue'
import { constructContactsData } from '@/util/data'

defineProps({
  data: {
    type: Object
  }
})

const Form = defineAsyncComponent(() => import('@/components/sections/ContactUsForm.vue'))
const Introduction = defineAsyncComponent(() => import('@/components/sections/ContactUsIntroduction.vue'))
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'))
</script>

<template>
  <div class="contact-us-container">
    <!-- Background -->
    <div class="contact-us-background">
    </div>
    <!-- Form -->
    <Form :contacts="constructContactsData(data)" />
    <!-- Introduction -->
    <Introduction />
    <Footer :contacts="constructContactsData(data)" class="contact-us-footer" />
  </div>
</template>

<style scoped>
.contact-us-container {
  height: calc(100dvh - var(--cntr-header-height));
}

.contact-us-background {
  height: calc(100dvh - var(--cntr-header-height));
  background-image: url('@/assets/images/warehouse.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 72% top;
}

.contact-us-footer {
  position: relative;
  top: -23px;
}

@media screen and (min-width: 1025px) {
  .contact-us-background {
    height: calc(100dvh - var(--cntr-header-height) - 100px);
  }

  .contact-us-footer {
    top: -55px;
  }
}

@media screen and (min-width: 750px) {
  .contact-us-background {
    background-position: center top;
  }
}
</style>
