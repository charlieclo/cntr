<script setup>
defineProps({
  direction: {
    type: String,
    required: true,
    validation(value, props) {
      return ['left', 'right'].includes(value)
    }
  },
  justifyContent: {
    type: String,
    required: true,
    validator(value, props) {
      return ['flex-start', 'flex-end'].includes(value)
    }
  },
  color: {
    type: String,
    required: true,
    validator(value, props) {
      return ['white', 'mid-gray', 'blue', 'dark-blue', 'orange'].includes(value)
    }
  }
})
</script>

<template>
  <div
    class="trapezoid-pattern"
    :class="{
      'flex-start': justifyContent === 'flex-start',
      'flex-end': justifyContent === 'flex-end',
    }"
  >
    <div
      v-if="direction === 'left'"
      class="trapezoid left" 
      :style="{
        'border-bottom-color': `var(--cntr-${color})`
      }"
    ></div>
    <div
      v-if="direction === 'right'"
      class="trapezoid right" 
      :style="{
        'border-top-color': `var(--cntr-${color})`
      }"
    ></div>
  </div>
</template>

<style scoped>
.trapezoid-pattern {
  width: 100%;
  display: flex;
  z-index: 1;
}

.trapezoid-pattern.flex-start {
  justify-content: flex-start;
}

.trapezoid-pattern.flex-end {
  justify-content: flex-end;
}

.trapezoid {
  height: 0;
}

.trapezoid.left{
  width: 100px;
  border-right: 0px solid transparent;
  border-bottom: 23px solid;
	border-left: 15px solid transparent;
}

.trapezoid.right {
  width: 110px;
  border-top: 23px solid;
  border-right: 15px solid transparent;
  border-left: 0px solid transparent;
}

@media screen and (min-width: 1025px) {
  .trapezoid.left{
    width: 220px;
    border-bottom: 55px solid;
    border-left: 30px solid transparent;
  }

  .trapezoid.right {
    width: 220px;
    border-top: 55px solid;
    border-right: 30px solid transparent;
    border-left: 0px solid transparent;
  }
}
</style>
