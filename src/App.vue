<script setup>
</script>

<template>
  <router-view></router-view>
</template>

<style>
/* Appear Animation - Start */
.appear-enter-active {
  animation: appear 0.2s ease-in-out;
}

.appear-leave-active {
  animation: appear 0.2s reverse;
}

@keyframes appear {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
/* Appear Animation - End */

/* Fade Animation - Start */
.fade-enter-active {
  animation: fade 0.2s ease-in-out;
}

.fade-leave-active {
  animation: fade 0.2s reverse;
}

@keyframes fade {
  0% {
    opacity: 0.5;
  }

  50% {
    opacity: 0.75;
  }

  100% {
    opacity: 1;
  }
}
/* Fade Animation - End */

/* Slide Right Animation - Start */
.slide-right-enter-active {
  animation: slide-right 0.2s ease-in-out;
}

.slide-right-leave-active {
  animation: slide-right 0.2s reverse;
}

@keyframes slide-right {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0%);
  }
}
/* Slide Right Animation - End */

/* Slide Down Animation - Start */
.slide-down-enter-active {
  animation: slide-down 0.5s ease-in-out;
}

.slide-down-leave-active {
  animation: slide-down 0.5s reverse ease-in-out;
}

@keyframes slide-down {
  0% {
    height: 0%;
  }

  100% {
    height: 100%;
  }
}
/* Slide Down Animation - End */
</style>
