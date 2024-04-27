<script setup>
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import TrapezoidPattern from '@/components/TrapezoidPattern.vue'

defineProps({
  industries: {
    type: Array
  }
})

defineComponent({
  TrapezoidPattern
})

const { t } = useI18n()

const selectedIndustryIndex = ref(0)

const selectIndustry = (index) => {
  selectedIndustryIndex.value = index
}
</script>

<template>
  <div class="partners-list-container">
    <div class="partners-list-content">
      <div class="partners-list-title">{{ t('our-partners') }}</div>
      <div class="partners-list-selector">
        <button
          v-for="(i, index) in industries.length"
          :key="`partners-selector-${index}`"
          :class="{ active: index === selectedIndustryIndex }"
          @click="selectIndustry(index)"
        >
          {{ t('industry', { index: index + 1 }) }}
        </button>
      </div>
      <div class="partners-list-item-container">
        <div
          v-for="(industry, index) in industries[selectedIndustryIndex]"
          :key="`industry-${index}`"
          class="partners-list-item"
        >
          <img
            v-if="industry !== null"
            :src="industry.node.mediaItemUrl"
            :alt="`industry-${index}`"
          />
        </div>
      </div>
      <div class="partners-list-item-mobile-container">
        <template v-for="(industry, index) in industries[selectedIndustryIndex]">
          <div
            v-if="industry !== null"
            :key="`industry-mobile-${index}`"
            class="partners-list-item-mobile"
          >
            <img :src="industry.node.mediaItemUrl" :alt="`industry-mobile-${index}`" />
          </div>
        </template>
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
.partners-list-container {
  display: flex;
  flex-direction: column;
}

.partners-list-content {
  margin-top: 40px;
  padding: 0px 16px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.partners-list-title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36.8px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-orange);
}

.partners-list-selector {
  display: flex;
  align-items: center;
  gap: 40px;
  overflow: auto;

  /* IE and Edge */
  -ms-overflow-style: none;
  /* Firefox */
  scrollbar-width: none;
}

.partners-list-selector::-webkit-scrollbar {
  display: none;
}

.partners-list-selector>button {
  padding: 10px 0px;
  border: 0;
  border-bottom: 3px solid transparent;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.05em;
  white-space: nowrap;
  color: var(--cntr-gray);
  opacity: 0.4;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
}

.partners-list-selector>button.active {
  border-bottom: 3px solid var(--cntr-orange);
  opacity: 1;
  transition: all 0.2s ease;
}

.partners-list-item-container {
  margin-bottom: 40px;
  display: none;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, minmax(auto, 150px));
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.partners-list-item {
  align-content: center;
  border: 1px solid var(--cntr-off-white);
}

.partners-list-item>img {
  width: 100%;
  max-height: 150px;
  object-fit: contain;
}

.partners-list-item-mobile-container {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
}

.partners-list-item-mobile {
  flex: 1;
  width: 100%;
  border: 1px solid var(--cntr-off-white);
  text-align: center;
}

.partners-list-item-mobile>img {
  width: 100%;
  max-width: 200px;
  height: 150px;
  object-fit: contain;
}

.trapezoid-desktop {
  display: none;
}

@media screen and (min-width: 1025px) {
  .partners-list-content {
    padding: 0 160px;
    gap: 75px;
  }

  .partners-list-title {
    display: none;
  }

  .partners-list-selector {
    justify-content: center;
    gap: 80px;
  }

  .partners-list-selector>button {
    font-size: 20px;
  }

  .partners-list-item-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  .partners-list-item {
    padding: 40px 20px;
  }

  .partners-list-item-mobile-container {
    display: none;
  }

  .trapezoid-desktop {
    display: inherit;
  }
}
</style>
