<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Swal from 'sweetalert2'
import { countries } from '@/constant/country'

defineProps({
  contacts: {
    type: Object
  }
})

const { t } = useI18n()

const showCountryCodeDropdown = ref(false)
const input = ref({
  name: '',
  countryCode: '+62',
  phoneNumber: '',
  email: '',
  message: ''
})

const computedCountries = computed(() => {
  const tempCountries = countries
  tempCountries.unshift({ code: 'ID', dial_code: '+62' })
  return tempCountries
})

const sendAlert = (icon, titleText, text) => {
  Swal.fire({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    icon: icon,
    titleText: titleText,
    text: text
  })
}

const toggleCountryCodeDropdown = (toggle) => {
  showCountryCodeDropdown.value = toggle
}

const changeCountryCode = (countryCode) => {
  input.value.countryCode = countryCode
  toggleCountryCodeDropdown(false)
}

const validateMessage = () => {
  const nameMaxLength = 50
  const phoneNumberMaxLength = 13
  const emailPattern = /^[^@]+@\w+(\.\w+)+\w$/
  const emailMaxLength = 100

  if (input.value.name === null || input.value.name === '') {
    sendAlert('error', `${t('error.failed-send-message')}`, `${t('error.empty', { field: t('full-name') })}`)
    return false
  }

  if (input.value.name.length > nameMaxLength) {
    sendAlert('error', `${t('error.failed-send-message')}`, `${t('error.length', { field: t('full-name').toLowerCase(), maxLength: nameMaxLength })}`)
    return false
  }

  if (input.value.phoneNumber === null || input.value.phoneNumber === '') {
    sendAlert('error', `${t('error.failed-send-message')}`, `${t('error.empty', { field: t('phone-number') })}`)
    return false
  }

  if (input.value.phoneNumber.toString().length > phoneNumberMaxLength) {
    sendAlert('error', `${t('error.failed-send-message')}`, `${t('error.length', { field: t('phone-number').toLowerCase(), maxLength: phoneNumberMaxLength })}`)
    return false
  }

  if (input.value.email === null || input.value.email === '') {
    sendAlert('error', `${t('error.failed-send-message')}`, `${t('error.empty', { field: t('email-address') })}`)
    return false
  }

  if (input.value.email.length > emailMaxLength) {
    sendAlert('error', `${t('error.failed-send-message')}`, `${t('error.length', { field: t('email-address').toLowerCase(), maxLength: emailMaxLength })}`)
    return false
  }

  if (!emailPattern.test(input.value.email)) {
    sendAlert('error', `${t('error.failed-send-message')}`, `${t('error.pattern', { field: t('email-address') })}`)
    return false
  }

  if (input.value.message === null || input.value.message === '') {
    sendAlert('error', `${t('error.failed-send-message')}`, `${t('error.empty', { field: t('message') })}`)
    return false
  }

  return true
}

const sendMessage = async () => {
  try {
    if (validateMessage()) {
      const response = await fetch(import.meta.env.DEV ? '/contacts' : import.meta.env.VITE_CONTACTS_PATH,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          name: input.value.name,
          phoneNumber: input.value.countryCode + input.value.phoneNumber,
          email: input.value.email,
          message: input.value.message
        })
      })

      const result = await response.json()
      if (result.status === 200) {
        sendAlert('success', t('success.success-send-message'), '')
        input.value = {
          name: '',
          countryCode: '+62',
          phoneNumber: '',
          email: '',
          message: ''
        }
      } else {
        sendAlert('error', t('error.failed-send-message'), result.response ?? result.message ?? 'No error message')
      }
    }
  } catch (error) {
    sendAlert('error', t('error.failed-send-message'), error.message)
  }
}

const openLocationMap = (locationMap) => {
  if (locationMap !== null) {
    window.open(locationMap, '_blank')
  }
}
</script>

<template>
  <div id="contact-us-form" class="form-container">
    <div class="form-contact">
      <div class="contact-title">{{ t('navigations.contact-us') }}</div>
      <div class="form-first-row">
        <div class="form-input">
          <label>{{ t('full-name') }}</label>
          <input
            v-model="input.name"
            type="input"
            title="name"
          />
        </div>
        <div class="form-input form-select">
          <label>{{ t('phone-number') }}</label>
          <div>
            <div class="country-code-select">
              <img
                src="@/assets/icons/dropdown-arrow.svg"
                alt="dropdown-svg"
                @click="toggleCountryCodeDropdown(!showCountryCodeDropdown)"
              />
              <button @click="toggleCountryCodeDropdown(!showCountryCodeDropdown)">
                {{ input.countryCode }}
              </button>
              <Transition name="slide-down" mode="out-in">
                <div v-if="showCountryCodeDropdown" class="country-code-dropdown">
                  <a
                    v-for="(country, index) in computedCountries"
                    :key="`country-${index}`"
                    @click="changeCountryCode(country.dial_code)"
                  >
                    {{ country.code }} - {{ country.dial_code }}
                  </a>
                </div>
              </Transition>
            </div>
            <input
              v-model="input.phoneNumber"
              type="number"
              title="phone-number"
            />
          </div>
        </div>
      </div>
      <div class="form-input">
        <label>{{ t('email-address') }}</label>
        <input v-model="input.email" type="input" />
      </div>
      <div class="form-input">
        <label>{{ t('message') }}</label>
        <input v-model="input.message" type="input" title="message" />
      </div>
      <button class="send-message-button" @click="sendMessage">
        {{ t('send-message') }}
      </button>
    </div>
    <div class="address-contact-information">
      <div class="address-information">
        <div>{{ t('head-office') }}</div>
        <div>{{ contacts.address }}</div>
        <button @click="openLocationMap(contacts.locationMap)">{{ t('location-map') }}</button>
      </div>
      <div class="contact-information">
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
  </div>
</template>

<style scoped>
.form-container {
  height: 915px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  background-color: var(--cntr-blue);
}

.form-contact {
  padding: 40px 40px 150px 40px;
  display: flex;
  flex-direction: column;
  gap: 45px;
  position: relative;
  bottom: 480px;
  background-image: url('@/assets/patterns/contact-form-white.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

.contact-title {
  font-weight: 600;
  font-size: 26px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-orange);
}

.form-first-row {
  display: flex;
  flex-direction: column;
  gap: 45px;
}

.form-input {
  border-bottom: 1px solid var(--cntr-gray);
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.form-input .input-example {
  font-weight: 600;
  opacity: 0.4;
  color: var(--cntr-dark-blue);
}

.form-input.form-select>div {
  display: flex;
  align-items: center;
}

.form-input.form-select>input {
  position: relative;
  left: -5px;
}

.country-code-select {
  margin-bottom: 11px;
  display: flex;
}

.country-code-select>button {
  width: 65px;
  padding-right: 10px;
  padding-left: 0px;
  border: 0;
  outline: 0;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.05em;
  background-color: transparent;
  color: var(--cntr-dark-blue);
}

.country-code-dropdown {
  max-height: 150px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  position: absolute;
  overflow-y: auto;
  z-index: 1;
  background-color: var(--cntr-dark-blue);
  color: var(--cntr-off-white);

  /* IE and Edge */
  -ms-overflow-style: none;
  /* Firefox */
  scrollbar-width: none;
}

.country-code-dropdown::-webkit-scrollbar {
  display: none;
}

.country-code-dropdown>a {
  padding: 4px 15px;
  text-align: center;
  cursor: pointer;
}

.country-code-dropdown>a:hover {
  background-color: var(--cntr-off-white);
  color: var(--cntr-dark-blue);
  transition: all 0.2s;
}

.form-input label {
  font-weight: 400;
  font-size: 14px;
  line-height: 19.2px;
  letter-spacing: 0.05em;
  color: var(--cntr-gray);
}

.form-input input {
  padding-bottom: 10px;
  border: 0;
  outline: 0;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.05em;
}

.form-input input::placeholder {
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.05em;
  opacity: 0.4;
  color: var(--cntr-dark-blue);
}

.send-message-button {
  align-self: self-end;
  width: 175px;
  height: 40px;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  word-wrap: nowrap;
  color: var(--cntr-white);
  background-color: transparent;
  background-image: url('@/assets/patterns/vector-button-2.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  cursor: pointer;
}

.address-contact-information {
  padding: 75px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  bottom: 575px;
  background-image: url('@/assets/patterns/contact-form-orange.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

.address-information {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.address-information>div:nth-child(1) {
  font-weight: 600;
  font-size: 26px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cntr-white);
}

.address-information>div:nth-child(2) {
  width: 70%;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: var(--cntr-white);
}

.address-information>button {
  width: 130px;
  height: 70px;
  padding: 0px;
  border: 0px;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  word-wrap: nowrap;
  color: var(--cntr-white);
  background-color: transparent;
  background-image: url('@/assets/patterns/vector-button.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  cursor: pointer;
}

.contact-information {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: var(--cntr-white);
}

.contact-information>table {
  border-spacing: 0px;
}

.contact-information>table tr>th {
  padding-top: 20px;
}

.contact-information>table tr>td {
  padding-top: 20px;
  padding-left: 10px;
}

@media screen and (min-width: 1025px) {
  .form-container {
    max-height: 450px;
    padding: 0 160px;
    flex-direction: row;
    justify-content: center;
  }

  .form-contact {
    width: 690px;
    height: 530px;
    padding: 40px 70px 40px 40px;
    gap: 55px;
    bottom: 250px;
  }

  .contact-title {
    font-size: 46px;
  }

  .form-first-row {
    flex-direction: row;
    gap: 55px;
  }

  .form-input {
    gap: 20px;
  }

  .country-code-select>button {
    font-weight: 600;
    font-size: 16px;
  }

  .form-input label {
    font-size: 16px;
  }

  .form-input input {
    font-weight: 600;
    font-size: 16px;
  }

  .form-input input::placeholder {
    font-weight: 600;
    font-size: 16px;
  }

  .send-message-button {
    width: 140px;
    height: 50px;
  }

  .address-contact-information {
    width: 415px;
    height: 530px;
    padding: 40px;
    right: 25px;
    bottom: 250px;
  }

  .address-information {
    gap: 55px;
  }

  .address-information>div:nth-child(1) {
    font-size: 46px;
    line-height: 55.2px;
  }

  .address-information>div:nth-child(2) {
    width: 60%;
    font-size: 18px;
    line-height: 26px;
  }

  .contact-information {
    font-size: 16px;
    line-height: 19.2px;
  }

  .contact-information>table tr>td {
    padding-left: 40px;
  }
}
</style>
