<script setup>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import TrapezoidPattern from '@/components/TrapezoidPattern.vue'

defineComponent({
  TrapezoidPattern
})

const { t } = useI18n()
</script>

<template>
  <div class="introduction-container">
    <div class="introduction-content">
      <div class="introduction-headline">
        {{ t('contents.contact.headline') }}
      </div>
      <div class="introduction-image">
        <img src="@/assets/images/team.png" alt="team" />
      </div>
      <div class="introduction-description">
        <div>
          <p>{{ t('contents.contact.description[0]') }}</p>
        </div>
        <div>
          <p>{{ t('contents.contact.description[1]') }}</p>
        </div>
      </div>
    </div>
    <TrapezoidPattern
      :direction="'right'"
      :justifyContent="'flex-start'"
      :color="'blue'"
      class="trapezoid-desktop"
    />
  </div>
</template>

<style scoped>
.introduction-container {
  display: flex;
  flex-direction: column;
}

.introduction-content {
  padding: 0px 16px 60px 16px;
  display: flex;
  flex-direction: column;
  gap: 55px;
  background-color: var(--cntr-blue);
}

.introduction-headline {
  font-weight: 600;
  font-size: 9vw;
  line-height: 10vw;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-orange);
}

.introduction-image>img {
  width: 100%;
  aspect-ratio: 1 / 0.6;
  object-fit: cover;
}

.introduction-description {
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.introduction-description>div {
  flex: 1 1 50%;
}

.introduction-description>div:first-child {
  font-weight: 600;
  font-size: 7vw;
  font-style: italic;
  line-height: 8vw;
  letter-spacing: 0.05em;
  color: var(--cntr-white);
}

.introduction-description>div:last-child {
  font-weight: 400;
  font-size: 3.5vw;
  line-height: 5vw;
  letter-spacing: 0.05em;
  color: var(--cntr-white);
}

.trapezoid-desktop {
  display: none;
}

@media screen and (min-width: 1025px) {
  .introduction-content {
    padding: 120px 80px;
  }

  .introduction-headline {
    font-size: 60px;
    line-height: 61px;
  }

  .introduction-image>img {
    aspect-ratio: inherit;
  }

  .introduction-description {
    flex-direction: row;
    gap: 0px;
  }

  .introduction-description>div:first-child {
    width: 80%;
    font-size: 32px;
    line-height: 38px;
  }

  .introduction-description>div:last-child {
    font-size: 18px;
    line-height: 28px;
  }

  .introduction-description>div>p {
    width: 80%;
  }

  .trapezoid-desktop {
    display: inherit;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .introduction-headline {
    font-size: 6vw;
    line-height: 7vw;
  }

  .introduction-image>img {
    aspect-ratio: inherit;
  }

  .introduction-description>div:first-child {
    font-size: 3.5vw;
    line-height: 5vw;
  }

  .introduction-description>div:last-child {
    font-size: 2.5vw;
    line-height: 4vw;
  }
}
</style>
