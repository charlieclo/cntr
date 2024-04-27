<script setup></script>

<template>
  <div class="loading-container">
    <div class="custom-loader"></div>
  </div>
</template>

<style scoped>
.loading-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-loader {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--cntr-dark-blue);
  -webkit-mask:
    repeating-conic-gradient(#0000 0deg,#000 1deg 70deg,#0000 71deg 90deg),
    radial-gradient(farthest-side,#0000 calc(100% - 9px),#000 calc(100% - 8px));
  mask:
    repeating-conic-gradient(#0000 0deg,#000 1deg 70deg,#0000 71deg 90deg),
    radial-gradient(farthest-side,#0000 calc(100% - 9px),#000 calc(100% - 8px));
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation: s5 1s infinite;
}

@keyframes s5 {
  to {
    transform: rotate(.5turn)
  }
}

@media screen and (min-width: 1025px) {
  .custom-loader {
    width: 100px;
    height: 100px;
    -webkit-mask:
      repeating-conic-gradient(#0000 0deg,#000 1deg 70deg,#0000 71deg 90deg),
      radial-gradient(farthest-side,#0000 calc(100% - 18px),#000 calc(100% - 16px));
    mask:
      repeating-conic-gradient(#0000 0deg,#000 1deg 70deg,#0000 71deg 90deg),
      radial-gradient(farthest-side,#0000 calc(100% - 18px),#000 calc(100% - 16px));
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;
  }
}
</style>
