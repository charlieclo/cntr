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
  <div class="networks-container">
    <div class="networks-content">
      <div class="networks-title">{{ t('our-partners') }}</div>
      <div class="separator"></div>
      <div class="networks-introduction">
        <div class="introduction-image">
          <img src="@/assets/images/logo-centra-group.svg" alt="logo" />
        </div>
        <div class="introduction-description">
          {{ t('contents.about.networks.introduction') }}
        </div>
      </div>
      <div class="separator"></div>
      <div class="networks-vision">
        <div class="vision-title">
          <span>01</span><h2>{{ t('vision') }}</h2>
        </div>
        <div class="vision-content">
          {{ t('contents.about.networks.vision') }}
        </div>
      </div>
      <div class="separator"></div>
      <div class="networks-mission">
        <div class="mission-title">
          <span>02</span><h2>{{ t('mission') }}</h2>
        </div>
        <ul class="mission-content">
          <li>{{ t('contents.about.networks.mission[0]') }}</li>
          <li>{{ t('contents.about.networks.mission[1]') }}</li>
          <li>{{ t('contents.about.networks.mission[2]') }}</li>
        </ul>
      </div>
    </div>
    <TrapezoidPattern
      :direction="'right'"
      :justifyContent="'flex-start'"
      :color="'orange'"
    />
  </div>
</template>

<style scoped>
.networks-container {
  display: flex;
  flex-direction: column;
}

.separator {
  width: 100%;
  height: 0;
  margin-top: 10px;
  margin-bottom: 30px;
  border-bottom: 1px solid var(--cntr-white);
}

.networks-content {
  padding: 45px 16px 0 16px;
  background-color: var(--cntr-orange);
}

.networks-title {
  font-weight: 600;
  font-size: 3vw;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-off-white);
}

.networks-introduction {
  display: flex;
  flex-direction: column;
}

.introduction-image {
  padding-top: 40px;
}

.introduction-image>img {
  width: 70%;
}

.introduction-description {
  padding: 70px 0px;
  font-weight: 400;
  font-size: 4vw;
  line-height: 5.5vw;
  letter-spacing: 0.05em;
  color: var(--cntr-white);
}

.networks-vision,
.networks-mission {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.vision-title,
.mission-title {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.vision-title>span,
.mission-title>span {
  padding-top: 1.3vw;
  font-weight: 600;
  font-size: 4vw;
  letter-spacing: 0.05em;
  color: var(--cntr-off-white);
}

.vision-title>h2,
.mission-title>h2 {
  font-weight: 600;
  font-size: 8vw;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-off-white);
}

.vision-content,
.mission-content {
  font-weight: 400;
  font-size: 3.5vw;
  line-height: 5vw;
  letter-spacing: 0.05em;
  color: var(--cntr-white);
}

.vision-content {
  margin-bottom: 40px;
}

.mission-content {
  margin-bottom: 80px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media screen and (min-width: 1025px) {
  .networks-container {
    position: relative;
    top: -55px;
  }

  .separator {
    margin-bottom: 10px;
  }

  .networks-content {
    padding: 120px 80px;
  }

  .networks-title {
    font-size: 1.5vw;
  }

  .networks-introduction {
    margin-bottom: 60px;
    padding-top: 35px;
    flex-direction: row;
  }

  .introduction-image {
    flex: 1 1 50%;
    padding-top: 0px;
  }

  .introduction-image>img {
    width: 50%;
    padding-top: 10px;
  }

  .introduction-description {
    flex: 1 1 50%;
    padding: 0;
    font-size: 1.5vw;
    line-height: 2.2vw;
  }

  .networks-vision,
  .networks-mission {
    flex-direction: row;
    gap: 0px;
  }

  .vision-title,
  .mission-title {
    flex: 1 1 50%;
    align-items: flex-start;
  }

  .vision-title>span,
  .mission-title>span {
    padding-top: 0.7vw;
    font-size: 1vw;
  }

  .vision-title>h2,
  .mission-title>h2 {
    font-size: 3vw;
  }

  .vision-content,
  .mission-content {
    flex: 1 1 50%;
    font-size: 1vw;
    line-height: 2vw;
  }

  .vision-content {
    margin-bottom: 60px;
  }

  .mission-content {
    margin-bottom: 60px;
  }
}
</style>
