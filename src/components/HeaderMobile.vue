<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const emit = defineEmits(['toggle'])

const router = useRouter()
const { t } = useI18n()

const goToPage = (page) => {
  router.push(page)
  emit('toggle', false)
}
</script>

<template>
  <header class="header-mobile">
    <!-- Menu Button -->
    <img
      src="@/assets/images/menu-mobile.svg"
      alt="menu-mobile"
      class="menu-toggle"
      @click="emit('toggle', true)"
    />
    <!-- Logo -->
    <div class="logo-container">
      <img
        src="@/assets/images/logo-white.svg"
        alt="logo"
        @click="goToPage('/')"
      />
    </div>
  </header>
</template>

<style scoped>
.header-mobile {
  height: var(--cntr-header-height);
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 3;
  background-color: var(--cntr-dark-blue);
}

.menu-toggle {
  cursor: pointer;
}

.logo-container {
  padding: 16px;
  display: flex;
}

.logo-container>img {
  height: 40px;
  object-fit: contain;
}

@media screen and (min-width: 1025px) {
  .header-mobile {
    display: none;
  }
}
</style>
