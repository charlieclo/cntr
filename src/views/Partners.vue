<script setup>
import { defineAsyncComponent, computed } from 'vue'
import { constructIndustriesData, constructContactsData } from '@/util/data'

const props = defineProps({
  data: {
    type: Object
  }
})

const industries = computed(() => constructIndustriesData(props.data))

const Headline = defineAsyncComponent(() => import('@/components/sections/PartnersHeadline.vue'))
const List = defineAsyncComponent(() => import('@/components/sections/PartnersList.vue'))
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'))
</script>

<template>
  <div class="partners-container">
    <!-- Headline -->
    <Headline />
    <!-- List -->
    <List :industries="industries" />
    <!-- Footer -->
    <Footer :contacts="constructContactsData(data)" class="partners-footer" />
  </div>
</template>

<style scoped>
.partners-container {
  height: calc(100dvh - var(--cntr-header-height));
  display: flex;
  flex-direction: column;
}

.partners-footer {
  position: relative;
}

@media screen and (min-width: 1025px) {
  .partners-footer {
    top: -53px;
  }
}
</style>
