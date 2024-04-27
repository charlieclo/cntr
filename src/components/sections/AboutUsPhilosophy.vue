<script setup>
import { onUnmounted, defineComponent, ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import TrapezoidPattern from '@/components/TrapezoidPattern.vue'

defineComponent({
  TrapezoidPattern
})

const { t } = useI18n()

const philosophies = reactive([
  {
    letter: 'c',
    name: 'commitment'
  },
  {
    letter: 'e',
    name: 'excellence'
  },
  {
    letter: 'n',
    name: 'notability'
  },
  {
    letter: 't',
    name: 'trust'
  },
  {
    letter: 'r',
    name: 'readiness'
  },
  {
    letter: 'a',
    name: 'aggressiveness'
  }
])
const selectedPhilosophy = ref(0)

let philosophyInterval = setInterval(() => {
  selectPhilosophy(selectedPhilosophy.value + 1, false)
}, 7000)

const selectPhilosophy = (index, reset) => {
  if (reset) {
    clearInterval(philosophyInterval)
    philosophyInterval = setInterval(() => {
      selectPhilosophy(selectedPhilosophy.value + 1, false)
    }, 7000)
  }
  selectedPhilosophy.value = index > philosophies.length - 1 ? 0 : index
}

onUnmounted(() => {
  clearInterval(philosophyInterval)
})
</script>

<template>
  <div class="philosophy-container">
    <!-- Trapezoid -->
    <TrapezoidPattern
      :direction="'left'"
      :justifyContent="'flex-end'"
      :color="'white'"
      class="trapezoid-desktop"
    />
    <div class="philosophy-content">
      <div class="philosophy-title-selector">
        <div class="philosophy-title">Filosofi</div>
        <div class="philosophy-selector">
          <div
            v-for="(philosophy, index) in philosophies"
            :key="`philosophy-selector-${index}`"
            :class="[{ active: selectedPhilosophy === index}, `letter-${philosophy.letter}`]"
            @click="selectPhilosophy(index, true)"
          >
          </div>
        </div>
      </div>
      <div class="philosophy-image">
        <img src="@/assets/images/about-us-3.png" alt="philosophy" />
      </div>
      <Transition name="fade" mode="out-in">
        <div :key="`name-${philosophies[selectedPhilosophy].name}`" class="philosophy-name">
          {{ philosophies[selectedPhilosophy].name }}
        </div>
      </Transition>
      <Transition name="fade" mode="out-in">
        <div :key="`description-${philosophies[selectedPhilosophy].name}`" class="philosophy-description">
          {{ t(`contents.about.philosophies.${philosophies[selectedPhilosophy].name}`) }}
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.philosophy-container {
  display: flex;
  flex-direction: column;
}

.trapezoid-desktop {
  display: none;
}

.philosophy-content {
  padding: 65px 16px 110px 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto minmax(206px, auto) 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 30px;
}

.philosophy-title-selector {
  grid-area: 1 / 1 / 2 / 2;
}

.philosophy-title {
  font-weight: 600;
  font-size: 3vw;
  line-height: 4vw;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-gray);
}

.philosophy-selector {
  padding-top: 25px;
  display: flex;
  gap: 8px;
}

.philosophy-selector>div {
  width: calc(100% / 6);
  height: 45px;
  background-color: var(--cntr-off-white);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  cursor: pointer;
  transition: all 0.2s ease;
}

.philosophy-selector>div.active {
  background-color: var(--cntr-orange);
  transition: all 0.2s ease;
}

.philosophy-selector>div.letter-c {
  -webkit-mask-image: url("@/assets/icons/letter-c.svg");
  mask-image: url("@/assets/icons/letter-c.svg");
}

.philosophy-selector>div.letter-e {
  -webkit-mask-image: url("@/assets/icons/letter-e.svg");
  mask-image: url("@/assets/icons/letter-e.svg");
}

.philosophy-selector>div.letter-n {
  -webkit-mask-image: url("@/assets/icons/letter-n.svg");
  mask-image: url("@/assets/icons/letter-n.svg");
}

.philosophy-selector>div.letter-t {
  -webkit-mask-image: url("@/assets/icons/letter-t.svg");
  mask-image: url("@/assets/icons/letter-t.svg");
}

.philosophy-selector>div.letter-r {
  -webkit-mask-image: url("@/assets/icons/letter-r.svg");
  mask-image: url("@/assets/icons/letter-r.svg");
}

.philosophy-selector>div.letter-a {
  -webkit-mask-image: url("@/assets/icons/letter-a.svg");
  mask-image: url("@/assets/icons/letter-a.svg");
}

.philosophy-image {
  grid-area: 4 / 1 / 5 / 2;
  text-align: center;
}

.philosophy-image>img {
  width: 100%;
  max-width: 520px;
  max-height: 400px;
  object-fit: cover;
}

.philosophy-name {
  grid-area: 2 / 1 / 3 / 2;
  font-weight: 700;
  font-size: 7vw;
  font-style: italic;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-orange);
}

.philosophy-description {
  grid-area: 3 / 1 / 4 / 2; 
  width: 80%;
  font-weight: 400;
  font-size: 3.5vw;
  line-height: 5vw;
  letter-spacing: 0.05em;
}

@media screen and (min-width: 1200px) {
  .philosophy-content {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-column-gap: 0px;
    grid-row-gap: 80px;
    position: relative;
    top: -55px;
  }

  .trapezoid-desktop {
    display: inherit;
  }

  .philosophy-title-selector {
    align-content: flex-end;
  }

  .philosophy-image {
    grid-area: 1 / 2 / 2 / 3;
    justify-self: center;
    align-content: flex-end;
  }

  .philosophy-name {
    grid-area: 2 / 1 / 3 / 2;
  }

  .philosophy-description {
    grid-area: 2 / 2 / 3 / 3;
    width: 55%;
  }
}

@media screen and (min-width: 1025px) {
  .philosophy-container {
    position: relative;
    top: -54px;
  }

  .philosophy-content {
    height: calc(100dvh - var(--cntr-header-height));
    padding: 150px 80px 100px 80px;
  }

  .philosophy-title {
    font-size: 1vw;
    line-height: 2vw;
  }

  .philosophy-selector {
    padding-top: 40px;
    gap: 12px;
  }

  .philosophy-selector>div {
    width: 60px;
    height: 45px;
  }

  .philosophy-image {
    justify-self: flex-end;
    text-align: left;
  }

  .philosophy-name {
    font-size: 2vw;
    line-height: 2vw;
  }

  .philosophy-description {
    min-height: 190px;
    font-size: 1vw;
    line-height: 1.5vw;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .philosophy-content {
    grid-template-rows: auto auto minmax(357px, auto) 1fr;
    grid-row-gap: 40px;
  }

  .philosophy-title {
    font-size: 2.5vw;
    line-height: 3vw;
  }

  .philosophy-selector {
    padding-top: 40px;
    gap: 12px;
  }

  .philosophy-selector>div {
    width: 60px;
    height: 45px;
  }

  .philosophy-image {
    text-align: left;
  }

  .philosophy-name {
    font-size: 4vw;
    line-height: 5vw;
  }

  .philosophy-description {
    font-size: 3vw;
    line-height: 5vw;
  }
}
</style>
