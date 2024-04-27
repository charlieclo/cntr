<script setup>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import TrapezoidPattern from '@/components/TrapezoidPattern.vue'

const { t } = useI18n()

// Components
defineComponent({
  TrapezoidPattern
})
</script>

<template>
  <div class="container">
    <!-- Trapezoid -->
    <TrapezoidPattern
      :direction="'left'"
      :justifyContent="'flex-end'"
      :color="'mid-gray'"
    />
    <div class="content-container">
      <div class="information-container">
        <div class="information-title">{{ t('navigations.partners') }}</div>
        <div class="information-name">{{ t('contents.home.partners.name') }}</div>
        <div class="information-description">{{ t('contents.home.partners.description') }}</div>
        <div class="information-more-container">
          <router-link to="/partners" class="more-button">
            {{ t('browse-more') }} <img src="@/assets/icons/arrow-black.svg" alt="arrow" />
          </router-link>
        </div>
      </div>
      <div class="image-container">
        <img src="@/assets/images/home-our-partners.png" class="image" />
      </div>
    </div>
    <!-- Trapezoid -->
    <TrapezoidPattern
      :direction="'right'"
      :justifyContent="'flex-start'"
      :color="'mid-gray'"
      class="trapezoid-desktop"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.content-container {
  padding: 40px 16px;
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  background-color: var(--cntr-mid-gray);
}

.information-container {
  flex: 1 1 50%;
  padding: 5% 0px;
  display: flex;
  flex-direction: column;
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
  font-size: 5vw;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-orange);
}

.information-description {
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: 400;
  font-size: 2.5vw;
  letter-spacing: 0.05em;
  line-height: 3vw;
  text-align: justify;
  color: var(--cntr-gray);
}

.information-more-container {
  flex: 1 1 100%;
  display: flex;
  align-items: flex-end;
}

.more-button {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  font-size: 2vw;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-gray);
}

.image-container {
  flex: 1 1 50%;
  display: flex;
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

.trapezoid-desktop {
  display: none;
}

@media screen and (min-width: 1025px) {
  .container {
    position: relative;
    top: -235px;
  }

  .content-container {
    padding: 120px 80px;
    flex-direction: row;
  }

  .information-title {
    font-size: 0.95vw;
  }

  .information-name {
    padding-top: 4%;
    font-size: 3.8vw;
  }

  .information-description {
    width: 90%;
    padding-top: 4%;
    padding-bottom: 4%;
    font-size: 1.2vw;
    line-height: 2vw;
  }

  .more-button {
    font-size: 1vw;
    gap: 22px;
  }

  .trapezoid-desktop {
    display: inherit;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .content-container {
    flex-direction: row;
  }

  .information-title {
    font-size: 1.5vw;
  }

  .information-name {
    padding-top: 4%;
    font-size: 5vw;
  }

  .information-description {
    padding-top: 4%;
    padding-bottom: 0px;
    font-size: 1.5vw;
    line-height: 2vw;
  }

  .more-button {
    font-size: 1.4vw;
  }
}
</style>
