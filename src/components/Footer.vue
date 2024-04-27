<script setup>
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { navigations } from '@/constant/navigation'
import TrapezoidPattern from '@/components/TrapezoidPattern.vue'

defineProps({
  contacts: {
    type: Object
  }
})

defineComponent({
  TrapezoidPattern
})

const router = useRouter()
const route = useRoute()
const { t } = useI18n()

const goToPage = (page) => {
  if (route.path === page) {
    $('.main-layout').animate({
      scrollTop: 0
    })   
  } else {
    router.push(page)
  }
}
</script>

<template>
  <footer class="footer">
    <!-- Trapezoid -->
    <TrapezoidPattern
      :direction="'left'"
      :justifyContent="'flex-end'"
      :color="'dark-blue'"
      class="trapezoid-mobile"
    />
    <div class="footer-content">
      <!-- First Row -->
      <div class="footer-first-row">
        <h1 class="footer-contact-us">{{ t('navigations.contact-us') }}</h1>
        <button class="footer-send-message-button" @click="goToPage('/contact-us')">
          {{ t('send-message') }}
        </button>
      </div>
      <!-- Separator -->
      <div class="separator"></div>
      <!-- Second Row -->
      <div class="footer-second-row">
        <div class="footer-logo">
          <p>{{ t('part-of') }}</p>
          <img src="@/assets/images/logo-centra-group.svg" alt="logo" />
        </div>
        <div class="footer-address-navigation">
          <div class="footer-address">
            <p>{{ t('head-office') }}</p>
            <div class="address">
              {{ contacts.address }}
              <table>
                <tr>
                  <th>P</th>
                  <td>{{ contacts.phoneNumber }}</td>
                </tr>
                <tr>
                  <th>E</th>
                  <td>{{ contacts.email }}</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="footer-navigation">
            <p>{{ t('navigation') }}</p>
            <template
              v-for="navigation in navigations"
              :key="navigation.name"
            >
              <router-link
                v-if="navigation.name !== 'home'"
                :to="navigation.path"
                :id="navigation.name"
              >
                {{ t(navigation.name) }}
              </router-link>
            </template>
          </div>
        </div>
      </div>
      <!-- Third Row -->
      <div class="footer-third-row">
        <!-- Social Media -->
        <div class="footer-social-media">
          <p>{{ t('social-media') }}</p>
          <div class="footer-social-media-icon">
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
        <!-- Copyright -->
        <div class="footer-copyright">2023 © Copyright PT. Centra Hasta Mitra. All rights Reserved.</div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
}

.trapezoid-mobile {
  display: inherit;
}

.footer-content {
  padding: 46px 16px;
  display: flex;
  flex-direction: column;
  background-color: var(--cntr-dark-blue);
  background-image: url('@/assets/patterns/footer-pattern.svg');
  background-size: cover;
}

.footer-first-row {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.footer-contact-us {
  font-weight: 600;
  font-size: 6vw;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-orange);
}

.footer-contact-us:hover {
  color: var(--cntr-white);
  transition: all 0.2s ease;
}

.footer-send-message-button {
  width: 125px;
  height: 38px;
  padding: 0px;
  border: 0px;
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

.footer-send-message-button:hover {
  background-image: url('@/assets/patterns/vector-button-hover.svg');
}

.separator {
  width: 100%;
  height: 0;
  margin-top: 22px;
  margin-bottom: 80px;
  border-bottom: 1px solid var(--cntr-off-white);
}

.footer-second-row {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.footer-logo {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.footer-logo>p {
  font-weight: 600;
  font-size: 3vw;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-orange);
}

.footer-address-navigation {
  display: flex;
  gap: 35px;
}

.footer-address {
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.footer-address>p {
  font-weight: 600;
  font-size: 3vw;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-orange);
}

.address {
  width: 60%;
  font-weight: 400;
  font-size: 3vw;
  letter-spacing: 0.05em;
  text-align: justify;
  text-transform: none;
  color: var(--cntr-off-white);
}

.address>table {
  border-spacing: 0px;
}

.address>table>tr>th {
  padding-top: 20px;
  color: var(--cntr-orange);
}

.address>table>tr>td {
  padding-top: 20px;
  padding-left: 20px;
}

.footer-navigation {
  display: none;
  flex-direction: column;
  gap: 35px;
}

.footer-navigation>p {
  font-weight: 600;
  font-size: 1vw;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-orange);
}

.footer-navigation>a {
  font-weight: 600;
  font-size: 1vw;
  letter-spacing: 0.05em;
  color: var(--cntr-off-white);
  cursor: pointer;
}

.footer-third-row {
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.footer-social-media {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-social-media>p {
  font-weight: 600;
  font-size: 4vw;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-orange);
}

.footer-social-media-icon {
  display: flex;
  gap: 20px;
}

.footer-social-media-icon>a {
  margin-top: 2px;
  cursor: pointer;
}

.footer-copyright {
  font-weight: 400;
  font-size: 3vw;
  letter-spacing: 0.05em;
  color: var(--cntr-off-white);
}

@media screen and (min-width: 1025px) {
  .trapezoid-mobile {
    display: none;
  }

  .footer-content {
    padding: 160px 80px;
  }

  .footer-first-row {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0px;
  }

  .footer-contact-us {
    font-size: 2.7vw;
  }

  .separator {
    margin-top: 80px;
    margin-bottom: 55px;
  }

  .footer-second-row {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0px;
  }

  .footer-logo {
    width: inherit;
    gap: 35px;
  }

  .footer-logo>p {
    font-size: 1vw;
  }

  .footer-address>p {
    font-size: 1vw;
  }

  .address {
    width: inherit;
    max-width: 280px;
    font-size: 0.9vw;
  }

  .footer-navigation {
    display: flex;
  }

  .footer-third-row {
    padding-top: 70px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0px;
  }

  .footer-social-media {
    justify-content: inherit;
    gap: 35px;
  }

  .footer-social-media>p {
    font-size: 1vw;
  }

  .footer-social-media-icon>a {
    margin-right: 0px;
  }

  .footer-copyright {
    font-size: 0.9vw;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .footer-send-message-button {
    width: 16vw;
    height: 5vw;
    font-size: 1.5vw;
  }

  .footer-address {
    gap: 20px;
  }

  .address {
    font-size: 2vw;
  }

  .footer-social-media {
    font-size: 2vw;
  }

  .footer-social-media-icon {
    gap: 35px;
  }

  .footer-social-media-icon>a>img {
    width: 25px;
  }

  .footer-copyright {
    font-size: 2vw;
  }
}
</style>
