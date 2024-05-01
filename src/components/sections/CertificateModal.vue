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
    <div v-if="show" class="certificate-modal-container" @click="closeModal">
      <img
        src="@/assets/images/certificate.png"
        alt="certificate"
        class="certificate"
      />
    </div>
  </Transition>
</template>

<style scoped>
.certificate-modal-container {
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.5);
}

.certificate {
  min-width: 90%;
  height: 90%;
  padding: 0 16px;
  object-fit: contain;
}
</style>