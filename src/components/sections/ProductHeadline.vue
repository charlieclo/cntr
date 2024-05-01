<script setup>
import { onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  services: {
    type: Array
  }
})

const { t, locale } = useI18n()

const headlineIndex = ref(0)

let headlineBackgroundInterval = setInterval(() => {
  setHeadlineIndex(headlineIndex.value + 1, false)
}, 9000)

const setHeadlineIndex = (index, reset) => {
  if (reset) {
    clearInterval(headlineBackgroundInterval)
    headlineBackgroundInterval = setInterval(() => {
      setHeadlineIndex(headlineIndex.value + 1, false)
    }, 9000)
  }
  headlineIndex.value = index > props.services.length - 1 ? 0 : index
}

onUnmounted(() => {
  clearInterval(headlineBackgroundInterval)
})
</script>

<template>
  <div class="product-headline">
    <!-- Services Background -->
    <Transition name="fade" mode="out-in">
      <div
        :key="`service-headline-background-${headlineIndex}`"
        :style="{
          'background-image': `url(${services[headlineIndex].background.node.mediaItemUrl})`
        }"
        class="headline-background"
      >
      </div>
    </Transition>
    <Transition name="fade" mode="out-in">
      <div
        :key="`service-headline-mobile-background-${headlineIndex}`"
        :style="{
          'background-image': `url(${services[headlineIndex].backgroundMobile.node.mediaItemUrl})`
        }"
        class="headline-mobile-background"
      >
      </div>
    </Transition>
    <!-- Content Background Pattern -->
    <div class="headline-content">
      <div class="content-title">
        {{ t('our-services') }}
      </div>
      <Transition name="fade" mode="out-in">
        <div :key="`product-service-name-${headlineIndex}`" class="content-name">
          {{ services[headlineIndex][locale].title }}
        </div>
      </Transition>
      <Transition name="fade" mode="out-in">
        <div :key="`product-service-description-${headlineIndex}`" class="content-description">
          {{ services[headlineIndex][locale].description }}
        </div>
      </Transition>
      <div class="selector">
        <button
          v-for="(service, index) in services"
          :key="`selector-${index}`"
          :class="{ active: index === headlineIndex }"
          @click="setHeadlineIndex(index, true)"
        >
          {{ index + 1 }}
        </button>
      </div>
    </div>
  </div>  
</template>

<style scoped>
.product-headline {
  flex: 1 0 100%;
  height: calc(100dvh - var(--cntr-header-height));
  overflow: hidden;
}

.headline-background {
  width: 100%;
  height: calc(100dvh - var(--cntr-header-height));
  display: none;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
}

.headline-mobile-background {
  width: 100%;
  height: calc(100dvh - var(--cntr-header-height));
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
}

.headline-content {
  height: 100%;
  padding: 20px 16px 0px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  bottom: 70%;
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
  width: 80%;
  height: 15%;
  padding-top: 15px;
  font-weight: 600;
  font-size: 28px;
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

.selector {
  padding-bottom: 100px;
  display: flex;
  align-items: center;
  gap: 35px;
}

.selector>button {
  border: 0;
  font-weight: 700;
  font-size: 18px;
  color: var(--cntr-gray);
  outline: 0;
  opacity: 0.4;
  background: transparent;
  cursor: pointer;
}

.selector>button.active {
  opacity: 1;
  transition: all 0.2s ease;
}

@media screen and (min-width: 1025px) {
  .headline-background {
    display: inherit;
    background-position: center right;
  }

  .headline-mobile-background {
    display: none;
  }

  .headline-content {
    width: 50%;
    height: calc(100dvh - var(--cntr-header-height));
    padding: 0 80px;
    justify-content: center;
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
    height: 20%;
    font-size: 3.5vw;
    line-height: 4vw;
  }

  .content-description {
    width: 60%;
    height: 15%;
    padding-top: 35px;
    font-size: 1vw;
    line-height: 2vw;
  }

  .selector {
    padding-top: 35px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .content-name {
    width: 50%;
  }

  .content-description {
    width: 55%;
    font-size: 18px;
  }
}
</style>
