<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="product-headline">
    <!-- Partners Background -->
    <div class="headline-background"></div>
    <!-- Content Background Pattern -->
    <div class="headline-content">
      <div class="content-title">
        {{ t('our-partners') }}
      </div>
      <div class="content-name">
        {{ t('contents.partners.headline') }}
      </div>
      <div class="content-description">
        {{ t('contents.partners.description') }}
      </div>
    </div>
  </div>  
</template>

<style scoped>
.product-headline {
  height: calc(100dvh - var(--cntr-header-height));
}

.headline-background {
  width: 100%;
  height: calc(100dvh - var(--cntr-header-height));
  background-image: url('@/assets/images/building.png');
  background-size: cover;
  background-position: center -105px;
}

.headline-content {
  height: 60%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  position: relative;
  bottom: 60%;
  left: 0;
  background-image: url('@/assets/patterns/headline-mobile-pattern.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: top;
}

.content-title {
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-gray);
}

.content-name {
  height: 10%;
  padding-top: 20px;
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-orange);
}

.content-description {
  height: 15%;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: var(--cntr-gray);
}

@media screen and (min-width: 1025px) {
  .product-headline {
    height: 525px;
  }

  .headline-background {
    height: 525px;
    background-position: 200px center;
  }

  .headline-content {
    width: 50%;
    height: 525px;
    padding: 0 80px;
    gap: 20px;
    bottom: 100%;
    background-image: url('@/assets/patterns/headline-pattern.svg');
    background-position-x: right;
    background-position-y: center;
  }

  .content-title {
    font-size: 1vw;
  }

  .content-name {
    width: 70%;
    height: auto;
    font-size: 3.5vw;
    line-height: 4vw;
  }

  .content-description {
    width: 60%;
    height: auto;
    font-size: 1vw;
    line-height: 2vw;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .content-name {
    width: 50%;
  }

  .content-description {
    width: 45%;
    font-size: 18px;
  }
}
</style>
