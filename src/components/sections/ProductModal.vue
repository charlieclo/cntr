<script setup>
import { useI18n } from 'vue-i18n'

defineProps({
  show: {
    type: Boolean,
    required: true
  },
  product: {
    type: Object
  }
})

const emit = defineEmits(['close'])

const { t, locale } = useI18n()

const closeModal = () => {
  emit('close')
}
</script>

<template>
  <Transition name="appear" mode="out-in">
    <div v-if="show" class="product-modal-container">
      <div class="product-modal-content">
        <img
          src="@/assets/icons/close-icon.svg"
          alt="close-icon"
          class="product-modal-close-icon"
          @click="closeModal"
        />
        <div class="product-image">
          <img :src="product.imageOutline?.node.mediaItemUrl" alt="product-outline" />
        </div>
        <div class="product-name">{{ product[locale].name }}</div>
        <div v-html="product[locale].description" class="product-description"></div>
        <div class="product-specification">
          <p>{{ t('specification') }}</p>
          <img :src="product.imageSpecification?.node.mediaItemUrl" alt="product-specification" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.product-modal-container {
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.5);
}

.product-modal-close-icon {
  position: absolute;
  top: 35px;
  right: 35px;
  cursor: pointer;
}

.product-modal-content {
  width: 90%;
  height: 80%;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto) 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 10px;
  position: relative;
  overflow-y: auto;
  background-color: var(--cntr-white);
  -webkit-mask-image: url('@/assets/patterns/modal-pattern.svg');
  mask-image: url('@/assets/patterns/modal-pattern.svg');
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: cover;
  mask-size: cover;

  /* IE and Edge */
  -ms-overflow-style: none;
  /* Firefox */
  scrollbar-width: none;
}

.product-modal-content::-webkit-scrollbar {
  display: none;
}

.product-image {
  grid-area: 2 / 1 / 3 / 2;
  background-color: transparent;
}

.product-image>img {
  height: 150px;
  object-fit: contain;
}

.product-name {
  grid-area: 1 / 1 / 2 / 2;
  padding: 60px 20px 0px 20px;
  font-weight: 600;
  font-size: 26px;
  line-height: 29.9px;
  letter-spacing: 0.05em;
  color: var(--cntr-orange);
}

.product-description {
  grid-area: 3 / 1 / 4 / 2;
  padding: 0 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: var(--cntr-gray);
}

.product-specification {
  grid-area: 4 / 1 / 5 / 2;
  padding: 0px 20px 20px 20px;
}

.product-specification>p {
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.05em;
  text-align: left;
  color: var(--cntr-gray);
}

.product-specification>img {
  width: 100%;
  object-fit: contain;
}

@media screen and (min-width: 1025px) {
  .product-modal-content {
    width: 782px;
    height: 90%;
    padding: 20px 20px 20px 0px;
    grid-template-columns: auto 1fr;
    grid-template-rows: repeat(2, auto) 1fr;
    grid-column-gap: 35px;
    grid-row-gap: 35px;
  }

  .product-image {
    grid-area: 1 / 1 / 4 / 2;
    align-self: center;
  }

  .product-image>img {
    height: 100%;
  }

  .product-name {
    grid-area: 1 / 2 / 2 / 3;
    padding: 0px 55px 0px 0px;
    font-size: 50px;
    line-height: 60px;
  }

  .product-description {
    grid-area: 2 / 2 / 3 / 3;
    padding: 0;
    font-size: 18px;
    line-height: 24.1px;
  }

  .product-specification {
    grid-area: 3 / 2 / 4 / 3;
    padding: 0;
  }

  .product-specification>p {
    font-size: 18px;
  }
}
</style>
