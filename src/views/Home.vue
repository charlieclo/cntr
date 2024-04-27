<script setup>
import { defineAsyncComponent, computed, ref } from 'vue'
import { constructHomeHeadlineData, constructProductsShowOnHome, constructServicesData, constructContactsData } from '@/util/data'

const props = defineProps({
  data: {
    type: Object
  }
})

const headlines = computed(() => constructHomeHeadlineData(props.data))
const services = computed(() => constructServicesData(props.data))

// Components
const Headline = defineAsyncComponent(() => import('@/components/sections/HomeHeadline.vue'))
const Introduction = defineAsyncComponent(() => import('@/components/sections/HomeIntroduction.vue'))
const Products = defineAsyncComponent(() => import('@/components/sections/HomeProducts.vue'))
const Services = defineAsyncComponent(() => import('@/components/sections/HomeServices.vue'))
const Partners = defineAsyncComponent(() => import('@/components/sections/HomePartners.vue'))
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'))
const Modal = defineAsyncComponent(() => import('@/components/sections/ProductModal.vue'))

const showProductModal = ref(false)
const productModalData = ref({})

const toggleProductModal = (toggle, product) => {
  showProductModal.value = toggle
  productModalData.value = product
}
</script>

<template>
  <main class="home-container">
    <!-- Headline -->
    <Headline :headlines="headlines" />
    <!-- Introduction -->
    <Introduction />
    <!-- Products and Services -->
    <div class="products-services-container">
      <!-- Products -->
      <Products :products="constructProductsShowOnHome(data)" @itemClicked="toggleProductModal" />
      <!-- Services -->
      <Services :services="services" />
    </div>
    <!-- Partners  -->
    <Partners />
    <!-- Footer -->
    <Footer :contacts="constructContactsData(data)" class="home-footer" />
    <!-- Product Modal -->
    <Modal
      :show="showProductModal"
      :product="productModalData"
      @close="toggleProductModal(false, {})"
    />
  </main>
</template>

<style scoped>
.home-container {
  height: calc(100dvh - var(--cntr-header-height));
  display: flex;
  flex-direction: column;
}

.home-footer {
  position: relative;
  top: -23px;
}

@media screen and (min-width: 1025px) {
  .products-services-container {
    flex: 1 0 100%;
    position: relative;
    top: -180px;
    background-image: url('@/assets/patterns/pattern-2.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .home-footer {
    top: -289px;
  }
}
</style>
