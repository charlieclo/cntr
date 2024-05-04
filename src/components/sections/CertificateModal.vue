<script setup>
defineProps({
  show: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>

<template>
  <Transition name="appear" mode="out-in">
    <div v-if="show" class="certificate-modal-container">
      <img
        src="@/assets/images/certificate.png"
        alt="certificate"
        class="certificate"
      />
      <div class="certificate-modal-close">
        <img
          src="@/assets/icons/close-icon.svg"
          alt="close-icon"
          @click="closeModal"
        />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.certificate-modal-container {
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.75);
}

.certificate {
  max-width: 90%;
  height: auto;
  padding: 0 16px;
  object-fit: contain;
}

.certificate-modal-close {
  height: auto;
}

.certificate-modal-close>img {
  cursor: pointer;
}

@media screen and (min-width: 1025px) {
  .certificate-modal-container {
    flex-direction: row;
    gap: 12px;
  }

  .certificate {
    height: 90%;
    padding: 0;
  }

  .certificate-modal-close {
    height: 90%;
  }
}

@media screen and (min-width: 580px) and (max-width: 1025px) {
  .certificate {
    height: 90%;
  }
}
</style>