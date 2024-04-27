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
  <div class="certification-container">
    <div class="certification-content">
      <div class="certification-title-description">
        <div class="certification-title">
          {{ t('certification') }}
        </div>
        <div class="certification-description">
          {{ t('contents.about.certification') }}
        </div>
      </div>
      <div class="certification-document">
        <div class="document-container">
          <div>
            <img src="@/assets/icons/document-icon.png" alt="document" />
            <p>Sertifikasi 1</p>
          </div>
          <button class="document-download-button">{{ t('view-certificate') }}</button>
        </div>
      </div>
    </div>
    <TrapezoidPattern
      :direction="'right'"
      :justifyContent="'flex-start'"
      :color="'white'"
      class="trapezoid-desktop"
    />
  </div>
</template>

<style scoped>
.certification-container {
  display: flex;
  flex-direction: column;
}

.certification-content {
  padding: 65px 16px;
  display: flex;
  flex-direction: column;
  gap: 80px
}

.certification-title-description {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  gap: 75px;
}

.certification-title {
  font-weight: 600;
  font-size: 6vw;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-orange);
}

.certification-description {
  width: 80%;
  display: none;
  font-weight: 400;
  font-size: 1.2vw;
  line-height: 2vw;
  letter-spacing: 0.05em;
  color: var(--cntr-gray);
}

.certification-document {
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
}

.document-container {
  width: 300px;
  height: 300px;
  padding: 40px 50px 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url('@/assets/patterns/vector-background.svg');
  background-repeat: no-repeat;
  background-size: contain;
}

.document-container p {
  font-weight: 600;
  font-size: 30px;
  letter-spacing: 0.05em;
  color: var(--cntr-orange);
}

.document-container button {
  width: 70%;
  padding: 10px 10px;
  margin-bottom: 30px;
  border: 0;
  outline: 0;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-light-gray);
  background-image: url('@/assets/patterns/vector-button-2.png');
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
}

.trapezoid-desktop {
  display: none;
}

@media screen and (min-width: 1025px) {
  .certification-content {
    padding: 120px 80px;
    flex-direction: row;
    gap: 20px;
  }

  .certification-title {
    font-size: 3vw;
  }

  .certification-description {
    display: inherit;
  }

  .trapezoid-desktop {
    display: inherit;
  }
}
</style>
