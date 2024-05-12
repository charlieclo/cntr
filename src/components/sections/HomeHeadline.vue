<script setup>
import { onUnmounted, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  headlines: {
    type: Array,
    default: []
  }
})

const router = useRouter()
const { t, locale } = useI18n()

const headlineIndex = ref(0)

let headlineBackgroundInterval = setInterval(() => {
  setHeadlineIndex(headlineIndex.value + 1, false)
}, 10000)

const setHeadlineIndex = (index, reset) => {
  if (reset) {
    clearInterval(headlineBackgroundInterval)
    headlineBackgroundInterval = setInterval(() => {
      setHeadlineIndex(headlineIndex.value + 1, false)
    }, 10000)
  }
  headlineIndex.value = index > props.headlines.length - 1 ? 0 : index
}

const checkMimeType = (storedMimeType, mimeType) => {
  return storedMimeType.includes(mimeType)
}

const goToPage = (path) => {
  router.push(path)
}

onUnmounted(() => {
  clearInterval(headlineBackgroundInterval)
})
</script>

<template>
  <div class="container">
    <!-- Background -->
    <div class="background">
      <Transition name="fade" mode="out-in">
        <img
          v-if="checkMimeType(headlines[headlineIndex].background.node.mimeType, 'image')"
          :key="`home-headline-background-image-${headlineIndex}`"
          :src="headlines[headlineIndex].background.node.mediaItemUrl"
          :alt="`home-headline-background-${headlineIndex}`"
          :id="`home-headline-background-${headlineIndex}`"
        />
        <video
          v-else-if="checkMimeType(headlines[headlineIndex].background.node.mimeType, 'video')"
          :key="`home-headline-background-video-${headlineIndex}`"
          :src="headlines[headlineIndex].background.node.mimeType"
          :muted="true"
          autoplay
          loop
          playsinline
        />
      </Transition>
    </div>
    <!-- Content -->
    <div class="content-container">
      <!-- Title -->
      <div v-html="headlines[headlineIndex][locale].title" class="content-title"></div>
      <!-- Description -->
      <div class="content-description">
        {{ headlines[headlineIndex][locale].description }}
      </div>
      <!-- More Button -->
      <button @click="goToPage('/product')" class="content-more-button">{{ t('browse-more') }}</button>
      <!-- Selector -->
      <div class="selector">
        <button
          v-for="(headlineBackground, index) in headlines"
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
.container {
  flex: 1 0 100%;
  height: calc(100dvh - var(--cntr-header-height));
}

.background {
  width: 100%;
  height: 100%;
  position: relative
}

.background>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.background>video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content-container {
  height: 100%;
  padding: 40px;
  padding-left: 4%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  bottom: 100%;
  background: linear-gradient(0deg, #1E1E1E 0%, rgba(20, 20, 20, 0) 100%);
}

.content-title {
  font-weight: 700;
  font-style: italic;
  font-size: 8vw;
  line-height: 8vw;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-orange);
}

.content-title :deep(span) {
  display: block;
  font-weight: 400;
  color: var(--cntr-white);
}

.content-description {
  padding-top: 25px;
  padding-bottom: 25px;
  font-weight: 400;
  font-size: 3.5vw;
  line-height: 5vw;
  letter-spacing: 0.05em;
  color: var(--cntr-off-white);
}

.content-more-button {
  width: 145px;
  height: 47px;
  border: 0px;
  background-color: transparent;
  background-image: url('@/assets/patterns/vector-button.svg');
  background-repeat: no-repeat;
  background-size: 147px 45px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: var(--cntr-white);
  text-transform: uppercase;
  word-wrap: nowrap;
  cursor: pointer;
}

.selector {
  padding-top: 35px;
  padding-bottom: 100px;
  display: flex;
  align-items: center;
  gap: 21px;
}

.selector>button {
  border: 0;
  font-weight: 700;
  font-size: 14px;
  color: var(--cntr-off-white);
  outline: 0;
  opacity: 0.3;
  background: transparent;
  cursor: pointer;
}

.selector>button.active {
  opacity: 1;
  transition: all 0.2s ease;
}

@media screen and (min-width: 1025px) {
  .background>img {
    object-fit: cover;
  }

  .background>video {
    object-fit: cover;
  }

  .content-container {
    max-width: 60%;
    justify-content: center;
    background: linear-gradient(90deg, #1E1E1E 0%, rgba(20, 20, 20, 0) 66.8%);
  }

  .content-title {
    font-size: 4.5vw;
    line-height: 4.5vw;
  }

  .content-description {
    max-width: 80%;
    height: 190px;
    padding-top: 40px;
    padding-bottom: 0px;
    font-size: 1.3vw;
    line-height: 2vw;
    letter-spacing: 0.05em;
  }

  .selector {
    gap: 42px;
  }

  .selector>button {
    font-size: 18px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .content-title {
    font-size: 6vw;
  }

  .content-description {
    max-width: 80%;
    font-size: 2vw;
    line-height: 3vw;
  }
}
</style>
