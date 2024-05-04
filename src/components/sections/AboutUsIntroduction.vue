<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="introduction-container">
    <div class="introduction-content">
      <div class="content-title">{{ t('contents.about.introduction.title') }}</div>
      <div class="content-name">{{ t('contents.about.introduction.name') }}</div>
      <div class="content-description">{{ t('contents.about.introduction.description') }}</div>
    </div>
    <div class="introduction-image"></div>
  </div>
</template>

<style scoped>
.introduction-container {
  flex: 1 0 100%;
  height: calc(100dvh - var(--cntr-header-height));
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 100px;
  background: linear-gradient(90deg, #1E1E1E 0%, rgba(20, 20, 20, 0) 66.8%), url('@/assets/images/about-us-1.png');
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
}

.introduction-content {
  display: flex;
  flex-direction: column;
}

.content-title {
  font-weight: 600;
  font-size: 3vw;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-off-white);
}

.content-name {
  padding-top: 20px;
  padding-bottom: 40px;
  font-weight: 600;
  font-size: 6vw;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-orange);
}

.content-description {
  font-weight: 400;
  font-size: 3.5vw;
  line-height: 5vw;
  letter-spacing: 0.05em;
  color: var(--cntr-off-white);
}

.introduction-image {
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  max-height: 220px;
  background-image: url('@/assets/images/about-us-2.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

@media screen and (min-width: 1025px) {
  .introduction-container {
    padding: 0 80px;
    flex-direction: row;
    align-items: center;
    gap: 0px;
    background-position: center;
    background-size: cover;
  }

  .introduction-content {
    flex: 1 1 100%;
  }

  .content-title {
    font-size: 1.5vw;
  }

  .content-name {
    font-size: 4vw;
  }

  .content-description {
    max-width: 80%;
    font-size: 1.2vw;
    line-height: 2vw;
  }

  .introduction-image {
    width: 80%;
    max-height: 350px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .introduction-container {
    background-position: center;
    background-size: cover;
  }

  .content-title {
    font-size: 3vw;
  }

  .content-name {
    font-size: 5vw;
  }

  .content-description {
    font-size: 2.5vw;
    line-height: 3vw;
  }

  .introduction-image {
    max-height: 350px;
  }
}
</style>
