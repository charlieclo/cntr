<script setup>
import { defineAsyncComponent, computed, ref } from 'vue'
import { constructServicesData, constructProductsData, constructContactsData } from '@/util/data'

const props = defineProps({
  data: {
    type: Object
  }
})

const services = computed(() => constructServicesData(props.data))
const products = computed(() => constructProductsData(props.data))

const Headline = defineAsyncComponent(() => import('@/components/sections/ProductHeadline.vue'))
const List = defineAsyncComponent(() => import('@/components/sections/ProductList.vue'))
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
  <div class="product-container">
    <!-- Headline -->
    <Headline :services="services" />
    <!-- List -->
    <List :products="products" @itemClicked="toggleProductModal" />
    <!-- Footer -->
    <Footer :contacts="constructContactsData(data)" class="product-footer" />
    <!-- Product Modal -->
    <Modal
      :show="showProductModal"
      :product="productModalData"
      @close="toggleProductModal(false, {})"
    />
  </div>
</template>

<style scoped>
.product-container {
  height: calc(100dvh - var(--cntr-header-height));
  display: flex;
  flex-direction: column;
}

.product-footer {
  position: relative;
  top: -23px;
}

@media screen and (min-width: 1025px) {
  .product-footer {
    top: -54px;
  }
}
</style>
