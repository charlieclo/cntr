<script setup>
import { defineComponent, computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import TrapezoidPattern from '@/components/TrapezoidPattern.vue'

defineComponent({
  TrapezoidPattern
})

const props = defineProps({
  products: {
    type: Array
  }
})
const emit = defineEmits(['itemClicked'])

const categories = computed(() => props.products.map(product => product.categoryName))

const { t, locale } = useI18n()

const selectedCategoryIndex = ref(0)

const selectCategory = (index) => {
  selectedCategoryIndex.value = index
}

const openProductModal = (product) => {
  emit('itemClicked', true, product)
}
</script>

<template>
  <div class="product-list-container">
    <div class="product-title">{{ t('our-products') }}</div>
    <div v-dragscroll class="product-selector">
      <div
        v-for="(category, index) in categories"
        :key="`selector-item-${index}`"
        :class="{ active: index === selectedCategoryIndex, 'product-selector-item': true }"
        @click="selectCategory(index)"
      >
        {{ t(category) }}
      </div>
    </div>
    <div class="product-list-layout">
      <div
        v-for="(product, index) in products[selectedCategoryIndex].products"
        :key="`product-${index}`"
        class="product-list-item"
      >
        <div class="item-data">
          <div class="item-name">{{ product[locale].name }}</div>
          <button @click="openProductModal(product)" class="item-more">
            {{ t('learn-more') }}
          </button>
        </div>
        <img
          :src="product.image.node.mediaItemUrl"
          :alt="`product-image-${index}`"
          class="item-image"
        />
      </div>
    </div>
    <TrapezoidPattern
      :direction="'right'"
      :justifyContent="'flex-start'"
      :color="'white'"
      class="trapezoid-desktop"
    />
  </div>
</template>

<style scoped>
.product-list-container {
  display: flex;
  flex-direction: column;
  gap: 55px;
}

.product-title {
  padding: 55px 16px 0px 16px;
  font-weight: 600;
  font-size: 32px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-orange);
}

.product-selector {
  padding: 0px 16px;
  display: flex;
  gap: 30px;
  overflow-y: auto;

  /* IE and Edge */
  -ms-overflow-style: none;
  /* Firefox */
  scrollbar-width: none;
}

.product-selector::-webkit-scrollbar {
  display: none;
}

.product-selector-item {
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0.05em;
  white-space: nowrap;
  color: var(--cntr-gray);
  opacity: 0.3;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.product-selector-item.active {
  font-weight: 600;
  opacity: 1;
}

.product-list-layout {
  padding: 0px 16px 55px 16px;
  flex: 1;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 30px;
}

.product-list-item {
  flex: 1 0 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color: var(--cntr-light-gray);
  -webkit-mask-image: url('@/assets/patterns/product-list-pattern.svg');
  mask-image: url('@/assets/patterns/product-list-pattern.svg');
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: cover;
  mask-size: cover;
}

.item-data {
  flex: 1;
  padding-left: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
}

.item-name {
  margin-top: 20px;
  font-weight: 600;
  font-size: 26px;
  line-height: 29.9px;
  letter-spacing: 0.05em;
  color: var(--cntr-orange);
}

.item-more {
  min-width: 145px;
  height: 35px;
  margin-bottom: 20px;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.05em;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  white-space: nowrap;
  color: var(--cntr-off-white);
  background-image: url('@/assets/patterns/vector-button-2.svg');
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
}

.item-image {
  flex: 1;
  width: 48%;
  object-fit: contain;
  display: flex;
  justify-content: flex-end;
}

.trapezoid-desktop {
  display: none;
}

@media screen and (min-width: 1025px) {
  .product-list-container {
    gap: 45px;
  }

  .product-title {
    padding: 120px 80px 0px 80px;
    font-size: 32px;
  }

  .product-selector {
    padding: 0 80px;
  }

  .product-list-layout {
    padding: 0px 80px 120px 80px;
  }

  .product-list-item {
    flex: 0 0 calc((100% / 3) - 30px);
    min-height: 300px;
  }

  .item-name {
    margin-top: 20px;
    font-size: 30px;
    line-height: 36px;
  }

  .item-more {
    height: 40px;
    margin-bottom: 30px;
  }

  .trapezoid-desktop {
    display: inherit;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .product-list-layout {
    gap: 30px;
  }

  .product-list-item {
    flex: 0 1 calc(50% - 30px);
    min-height: 235px;
  }

  .item-name {
    margin-top: 20px;
  }
}
</style>
