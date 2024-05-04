<script setup>
import { RouterLink, useRouter, useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n'
import { navigations } from '@/constant/navigation'
import { langs } from '@/constant/lang'

const router = useRouter()
const route = useRoute()
const { t, locale } = useI18n({
  useScope: 'global'
})

const goToPage = (page) => {
  if (route.path === page) {
    $('.main-layout').animate({
      scrollTop: 0
    })   
  } else {
    router.push(page)
  }
}

const changeLocale = (newLocale) => {
  locale.value = newLocale
}
</script>

<template>
  <header class="header">
    <div class="header-logo">
      <div class="logo-background"></div>
      <img
        src="@/assets/images/logo-white.svg"
        alt="logo"
        @click="goToPage('/')"
      />
    </div>
    <nav class="header-navigation">
      <router-link
        v-for="(navigation, index) in navigations"
        :key="`navigation-${index}`"
        :to="navigation.path"
        :id="navigation.name"
        exactActiveClass="active"
      >
        {{ t(navigation.name) }}
      </router-link>
      <div class="navigation-language">
        <a :key="langs[0]" :class="{ active: langs[0] === locale }" @click="changeLocale(langs[0])">{{ langs[0] }}</a>
        |
        <a :key="langs[1]" :class="{ active: langs[1] === locale }" @click="changeLocale(langs[1])">{{ langs[1] }}</a>
      </div>
    </nav>
    <div class="header-message">
      <div class="message-background"></div>
      <button @click="goToPage('/contact-us')">{{ t('send-message') }}</button>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  height: var(--cntr-header-height);
  display: none;
  justify-content: center;
  align-items: stretch;
  position: sticky;
  top: 0;
  z-index: 3;
  background: var(--cntr-dark-blue);
  color: white;
}

.header-logo {
  flex: 1 1 auto;
}

.logo-background {
  width: 230px;
  border-top: 95px solid var(--cntr-blue);
	border-right: 60px solid transparent;
  position: relative;
  top: 0;
  left: 0;
}

.header-logo>img {
  width: 123px;
  max-width: 123px;
  height: 52px;
  max-height: 52px;
  position: relative;
  top: -75px;
  left: 25%;
  cursor: pointer;
}

.header-navigation {
  flex: 1 1 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 8px;
}

.header-navigation a {
  text-align: center;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 1px;
  color: var(--cntr-white);
  text-transform: uppercase;
  transition: ease 0.2s;
  cursor: pointer;
}

.header-navigation a:hover {
  color: var(--cntr-orange);
}

.header-navigation a.active {
  color: var(--cntr-orange);
}

.navigation-language {
  flex-shrink: 0;
  letter-spacing: 0.05em;
}

.navigation-language>a.active {
  color: var(--cntr-orange);
}

.header-message {
  flex: 1 1 auto;
}

.message-background {
  width: 230px;
  border-bottom: 95px solid var(--cntr-blue);
	border-left: 60px solid transparent;
  position: relative;
  top: 0;
}

.header-message>button {
  width: 125px;
  height: 38px;
  padding: 0px;
  border: 0px;
  position: relative;
  top: -66px;
  right: -28%;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  word-wrap: nowrap;
  color: var(--cntr-white);
  background-color: transparent;
  background-image: url('@/assets/patterns/vector-button.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: 0.2s ease;
  cursor: pointer;
}

.header-message>button:hover {
  background-image: url('@/assets/patterns/vector-button-hover.svg');
}

@media screen and (min-width: 1025px) {
  .header {
    display: flex;
  }
}
</style>
