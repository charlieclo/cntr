<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { navigations } from '@/constant/navigation'
import { langs } from '@/constant/lang'

defineProps({
  show: {
    type: Boolean,
    required: true
  },
  contacts: {
    type: Object
  }
})

const emit = defineEmits(['toggle'])

const router = useRouter()
const { t, locale } = useI18n({
  useScope: 'global'
})

const goToPage = (page) => {
  router.push(page)
  emit('toggle', false)
}

const changeLocale = (newLocale) => {
  locale.value = newLocale
}
</script>

<template>
  <Transition name="slide-right">
    <div v-if="show" class="menu-mobile">
      <div class="menu-container">
        <div class="menu-header">
          <img
            src="@/assets/images/logo-white.svg"
            alt="logo"
            class="header-logo"
            @click="goToPage('/')"
          />
          <img
            src="@/assets/icons/arrow-orange.svg"
            alt="arrow"
            class="header-back"
            @click="emit('toggle', false)"
          />
        </div>
        <div class="menu-navigation">
          <button
            v-for="(navigation, index) in navigations"
            :key="`mobile-navigation-${index}`"
            @click="goToPage(navigation.path)"
          >
            {{ t(navigation.name) }}
          </button>
        </div>
        <div class="menu-language">
          <p>{{ t('language') }}</p>
          <div class="language-selector">
            <a :key="langs[0]" :class="{ active: langs[0] === locale }" @click="changeLocale(langs[0])">{{ langs[0] }}</a>
            |
            <a :key="langs[1]" :class="{ active: langs[1] === locale }" @click="changeLocale(langs[1])">{{ langs[1] }}</a>
          </div>
        </div>
        <div class="menu-social-media">
          <p>{{ t('social-media') }}</p>
          <div class="menu-social-media-icon">
            <!-- Instagram -->
            <a
              :href="contacts.instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="@/assets/icons/instagram-icon.svg" alt="instagram-icon" />
            </a>
            <!-- Facebook -->
            <a
              :href="contacts.facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="@/assets/icons/facebook-icon.svg" alt="facebook-icon" />
            </a>
            <!-- Tiktok -->
            <a
              :href="contacts.tiktok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="@/assets/icons/tiktok-icon.svg" alt="tiktok-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.menu-mobile {
  width: calc(100% - 32px);
  height: 100dvh;
  padding: 25px 16px;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  background-color: var(--cntr-dark-blue);
}

.menu-container {
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.menu-header {
  display: flex;
  justify-content: space-between;
}

.header-logo {
  width: 100px;
  object-fit: contain;
  cursor: pointer;
}

.header-back {
  cursor: pointer;
}

.menu-navigation {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 35px;
}

.menu-navigation>button {
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-off-white);
  background-color: transparent;
  cursor: pointer;
}

.menu-language {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 27px;
  font-weight: 500;
  font-size: 146x;
  letter-spacing: 0.05em;
  color: var(--cntr-off-white);
}

.language-selector>a {
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-blue);
  cursor: pointer;
}

.language-selector>a.active {
  color: var(--cntr-orange);
}

.menu-social-media {
  display: flex;
  justify-content: space-between;
}

.menu-social-media>p {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-orange);
}

.menu-social-media-icon {
  display: flex;
  gap: 40px;
}

.menu-social-media-icon>a {
  cursor: pointer;
}
</style>
