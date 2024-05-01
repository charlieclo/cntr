<script setup>
import { useI18n } from 'vue-i18n'

defineProps({
  products: {
    type: Array
  }
})
const emit = defineEmits(['itemClicked'])

const { t, locale } = useI18n()

const scrollProductList = (direction) => {
  const productItemList = $('.item-list-container')
  productItemList.addClass('scroll-smooth')
  if (direction === 'left') {
    productItemList.scrollLeft(productItemList.scrollLeft() - 425)
  } else {
    productItemList.scrollLeft(productItemList.scrollLeft() + 425)
  }
  productItemList.removeClass('scroll-smooth')
}

const openProductModal = (product) => {
  emit('itemClicked', true, product)
}
</script>

<template>
  <div class="container">
    <div class="menu">
      <div class="menu-title">
        <p>{{ t('navigations.product') }}</p>
        <router-link to="/product">
          {{ t('browse-products') }} <img src="@/assets/icons/arrow-black.svg" alt="arrow" />
        </router-link>
      </div>
      <div class="menu-button-container">
        <img
          src="@/assets/icons/arrow-left-1.svg"
          alt="arrow-left"
          @click="scrollProductList('left')"
        />
        <img
          src="@/assets/icons/arrow-right-1.svg"
          alt="arrow-right"
          @click="scrollProductList('right')"
        />
      </div>
    </div>
    <div class="item-list-container">
      <div
        v-for="(product, index) in products"
        :key="`product-${index}`"
        class="item-container"
        @click="openProductModal(product)"
      >
        <div class="item-category">{{ product.categoryName }}</div>
        <div class="item-name">{{ product[locale].name }}</div>
        <div class="item-more">
          {{ t('browse-more') }} <img src="@/assets/icons/arrow-black.svg" alt="arrow" />
        </div>
        <img
          :src="product.image.node.mediaItemUrl"
          :alt="`product-image-${index}`"
          class="item-image"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.menu {
  display: flex;
  justify-content: space-between;
}

.menu-title {
  flex: 1 1 auto;
  padding-right: 16px;
  padding-left: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 52px;
  font-weight: 600;
  font-size: 6.5vw;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-orange);
}

.menu-title>a {
  font-size: 14px;
  letter-spacing: 0.05em;
  word-wrap: nowrap;
  color: var(--cntr-gray);
}

.menu-title>a>img {
  padding-left: 5px;
}

.menu-button-container {
  flex: 1 1 auto;
  padding-right: 80px;
  display: none;
  justify-content: flex-end;
  align-items: center;
  gap: 22px;
}

.item-list-container {
  padding: 40px 16px 0 16px;
  display: flex;
  gap: 20px;
  overflow-x: auto;

  /* IE and Edge */
  -ms-overflow-style: none;
  /* Firefox */
  scrollbar-width: none;
}

.item-list-container::-webkit-scrollbar {
  display: none;
}

.item-list-container.scroll-smooth {
  scroll-behavior: smooth;
}

.item-container {
  flex: 1 0 100%;
  max-width: 250px;
  height: 370px;
  padding: 40px 0 35px 35px;
  position: relative;
  background-color: var(--cntr-light-gray);
  -webkit-mask-image: url('@/assets/patterns/product-pattern.svg');
  mask-image: url('@/assets/patterns/product-pattern.svg');
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  cursor: pointer;
}

.item-category {
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-blue);
}

.item-name {
  font-weight: 600;
  font-size: 30px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--cntr-orange);
}

.item-more {
  padding-top: 20px;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-gray);
  cursor: pointer;
}

.item-more>img {
  padding-left: 5px;
}

.item-image {
  width: 100%;
  max-width: 250px;
  position: absolute;
  right: 0;
  bottom: 60px;
  object-fit: contain;
}

@media screen and (min-width: 1025px) {
  .container {
    padding-top: 210px;
  }

  .menu {
    padding-top: 120px;
    padding-right: 0px;
    padding-left: 80px;
  }

  .menu-title {
    justify-content: initial;
    font-size: 46px;
  }

  .menu-title>a>img {
    padding-left: 10px;
  }

  .menu-button-container {
    display: flex;
  }

  .item-list-container {
    padding: 40px 80px 0 80px;
    gap: 35px;
  }

  .item-container {
    max-width: 390px;
    height: 535px;
    padding: 40px 0 35px 35px;
    -webkit-mask-size: cover;
    mask-size: cover;
  }

  .item-category {
    font-size: 16px;
  }

  .item-name {
    font-size: 45px;
  }

  .item-more {
    font-size: 16px;
  }

  .item-more>img {
    padding-left: 20px;
  }

  .item-image {
    max-width: 350px;
    bottom: 30px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .menu-title {
    font-size: 4.5vw;
  }
}
</style>
