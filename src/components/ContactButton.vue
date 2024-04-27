<script setup>
defineProps({
  contacts: {
    type: Object
  }
})
</script>

<template>
  <a
    :href="contacts.whatsapp"
    target="_blank"
    rel="noopener noreferrer"
    class="contact-button"
  >
    <img src="@/assets/icons/contact-icon.svg" alt="contact-icon" />
  </a>
</template>

<style scoped>
.contact-button {
  width: 35px;
  height: 35px;
  position: absolute;
  right: 15px;
  bottom: 56px;
  z-index: 2;
  cursor: pointer;
}

.contact-button>img {
  width: 35px;
  height: 35px;
}

@media screen and (min-width: 1025px) {
  .contact-button {
    width: 53px;
    height: 53px;
    right: 80px;
    bottom: 76px;
  }

  .contact-button>img {
    width: 53px;
    height: 53px;
  }
}
</style>
