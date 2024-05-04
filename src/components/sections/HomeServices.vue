<script setup>
import { onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  services: {
    type: Array
  }
})

const { t, locale } = useI18n()

const selectedServiceIndex = ref(0)

let selectedServiceInterval = setInterval(() => {
  setSelectedServiceIndex(selectedServiceIndex.value + 1, false)
}, 9000)

const changeSelectedServiceIndex = (index) => {
  if (index >= 0 && index <= props.services.length - 1) {
    selectedServiceIndex.value = index
  } else if (index < 0) {
    selectedServiceIndex.value = props.services.length - 1
  } else if (index > props.services.length - 1) {
    selectedServiceIndex.value = 0
  }
}

const setSelectedServiceIndex = (index, reset) => {
  if (reset) {
    clearInterval(selectedServiceInterval)
    selectedServiceInterval = setInterval(() => {
      setSelectedServiceIndex(selectedServiceIndex.value + 1, false)
    }, 9000)
  }
  changeSelectedServiceIndex(index)
}

onUnmounted(() => {
  clearInterval(selectedServiceInterval)
})
</script>

<template>
  <!-- Container -->
  <div class="container">
    <!-- Content Container -->
    <div class="content-container">
      <!-- Image Container -->
      <div class="image-container">
        <!-- Image -->
        <Transition name="fade" mode="out-in">
          <img
            :src="services[selectedServiceIndex].backgroundMobile.node.mediaItemUrl"
            :key="`service-${selectedServiceIndex}`"
            class="image"
          />
        </Transition>
      </div>
      <!-- Information Container -->
      <div class="information-container">
        <!-- Title -->
        <div class="information-title">
          {{ t('our-services') }}
        </div>
        <!-- Name -->
        <Transition name="fade" mode="out-in">
          <h1 :key="`service-name-${selectedServiceIndex}`" class="information-name">
            {{ services[selectedServiceIndex][locale].title }}
          </h1>
        </Transition>
        <!-- Description -->
        <Transition name="fade" mode="out-in">
          <div :key="`service-description-${selectedServiceIndex}`" class="information-description">
            {{ services[selectedServiceIndex][locale].description }}
          </div>
        </Transition>
        <!-- Selector -->
        <div class="selector">
          <button
            v-for="(service, index) in services"
            :key="`service-selector-${index}`"
            :class="{ active: index === selectedServiceIndex }"
            @click="setSelectedServiceIndex(index, true)"
          >
            {{ index + 1 }}
          </button>
        </div>
      </div>
    </div>
    <div class="arrow-selector-container">
      <img
        src="@/assets/icons/arrow-left-2.svg"
        alt="arrow-left"
        class="arrow-selector"
        @click="setSelectedServiceIndex(selectedServiceIndex - 1, true)"
      />
      <img
        src="@/assets/icons/arrow-right-2.svg"
        alt="arrow-right"
        class="arrow-selector"
        @click="setSelectedServiceIndex(selectedServiceIndex + 1, true)"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 0 16px;
  display: flex;
  flex-direction: column;
}

.content-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.image-container {
  flex: 1 0 50%;
  position: relative;
}

.image {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  -webkit-mask-image: url('@/assets/patterns/image-mask.png');
  mask-image: url('@/assets/patterns/image-mask.png');
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: cover;
  mask-size: cover;
}

.information-container {
  flex: 1 1 50%;
  padding: 35px 0 65px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.information-title {
  font-weight: 600;
  font-size: 2vw;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-gray);
}

.information-name {
  padding-top: 5px;
  font-weight: 600;
  font-size: 5.5vw;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-orange);
}

.information-description {
  padding-top: 20px;
  font-weight: 400;
  font-size: 3.5vw;
  line-height: 5vw;
  letter-spacing: 0.05em;
  color: var(--cntr-gray);
}

.selector {
  flex: 1 1 100%;
  padding-bottom: 5%;
  display: none;
  align-items: flex-end;
  gap: 12px;
}

.selector>button {
  border: 0;
  font-weight: 700;
  font-size: 1.5vw;
  color: var(--cntr-gray);
  outline: 0;
  opacity: 0.3;
  background: transparent;
  cursor: pointer;
}

.selector>button.active {
  color: var(--cntr-blue);
  opacity: 1;
  transition: all 0.2 ease;
}

.arrow-selector-container {
  width: 100%;
  display: none;
  text-align: center;
  position: relative;
  bottom: 4.57vw;
}

.arrow-selector {
  width: 4.1vw;
  object-fit: cover;
}

@media screen and (min-width: 1025px) {
  .container {
    padding: 220px 80px 0 80px;
  }

  .content-container {
    flex-direction: row;
  }

  .information-container {
    padding: 8% 0px 5% 8%;
  }

  .information-title {
    font-size: 0.95vw;
  }

  .information-name {
    padding-top: 4%;
    font-size: 3.8vw;
  }

  .information-description {
    font-size: 1.2vw;
    line-height: 2vw;
  }

  .selector {
    padding-top: 10%;
    display: flex;
    gap: 22px;
  }

  .selector>button {
    font-size: 1vw;
  }

  .arrow-selector-container {
    display: initial;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .content-container {
    flex-direction: row;
  }

  .information-container {
    padding: 4% 0px 2% 4%;
  }

  .information-title {
    font-size: 1.5vw;
  }

  .information-description {
    width: 90%;
    padding-top: 4%;
    font-size: 1.5vw;
    line-height: 2vw;
  }

  .selector {
    display: flex;
  }
}
</style>
