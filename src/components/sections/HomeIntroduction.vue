<script setup>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import TrapezoidPattern from '@/components/TrapezoidPattern.vue'

// Components
defineComponent({
  TrapezoidPattern
})

const { t } = useI18n()
</script>

<template>
  <div class="container">
    <!-- Trapezoid -->
    <TrapezoidPattern
      :direction="'left'"
      :justifyContent="'flex-end'"
      :color="'blue'"
    />
    <!-- Content -->
    <div class="content-container">
      <div class="title">{{ t('contents.home.introduction.title') }}</div>
      <div class="headline">{{ t('contents.home.introduction.headline') }}</div>
      <div class="description">
        {{ t('contents.home.introduction.description') }}
      </div>
    </div>
    <!-- Trapezoid -->
    <TrapezoidPattern
      :direction="'right'"
      :justifyContent="'flex-start'"
      :color="'blue'"
      class="trapezoid-desktop"
    />
  </div>
</template>

<style scoped>
.container {
  flex: 1 1 100%;
  position: relative;
  top: -23px;
}

.content-container {
  padding: 54px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  background-image: url('@/assets/patterns/pattern-1.svg');
  background-size: cover;
}

.title {
  font-weight: 400;
  font-size: 3.5vw;
  text-transform: uppercase;
  color: var(--cntr-off-white);
}

.headline {
  font-weight: 700;
  font-style: italic;
  font-size: 7vw;
  text-transform: uppercase;
  color: var(--cntr-orange);
}

.description {
  padding-top: 20px;
  font-weight: 400;
  font-size: 3.5vw;
  line-height: 5vw;
  letter-spacing: 0.05em;
  text-align: center;
  color: var(--cntr-off-white);
}

.trapezoid-desktop {
  display: none;
}

@media screen and (min-width: 1025px) {
  .container {
    top: -55px;
  }

  .content-container {
    padding: 240px 20px 194px 20px;
  }

  .title {
    font-size: 1.8vw;
  }

  .headline {
    font-size: 3.5vw;
  }

  .description {
    max-width: 800px;
    padding-top: 47px;
    font-size: 1.3vw;
    line-height: 2vw;
  }

  .trapezoid-desktop {
    display: inherit;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .title {
    font-size: 3vw;
  }

  .headline {
    font-size: 5vw;
  }

  .description {
    font-size: 2vw;
    line-height: 3vw;
  }
}
</style>
