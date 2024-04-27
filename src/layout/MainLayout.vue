<script setup>
import { defineAsyncComponent, computed, ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { GET_CONTENT_SETTINGS } from '@/graphql/query'
import { constructContactsData } from '@/util/data'

const {
  result: contentSettingsResult,
  error: contentSettingsError,
  loading: contentSettingsLoading
} = useQuery(GET_CONTENT_SETTINGS)
const data = computed(() => contentSettingsResult.value?.contents.nodes[0].contentSettings ?? {})
const errorMessage = computed(() => contentSettingsError.value ?? null)

// Components
const Loading = defineAsyncComponent(() => import('@/components/Loading.vue'))
const Header = defineAsyncComponent(() => import('@/components/Header.vue'))
const HeaderMobile = defineAsyncComponent(() => import('@/components/HeaderMobile.vue'))
const MenuMobile = defineAsyncComponent(() => import('@/components/MenuMobile.vue'))
const ContactButton = defineAsyncComponent(() => import('@/components/ContactButton.vue'))

const showMenuMobile = ref(false)

const toggleMenuMobile = (toggle) => {
  showMenuMobile.value = toggle
}
</script>

<template>
  <template v-if="contentSettingsLoading">
    <Loading />
  </template>
  <template v-else>
    <main class="main-layout">
      <Header />
      <HeaderMobile @toggle="toggleMenuMobile" />
      <MenuMobile
        :show="showMenuMobile"
        :contacts="constructContactsData(data)"
        @toggle="toggleMenuMobile"
      />
      <RouterView :data="data" />
      <ContactButton :contacts="constructContactsData(data)" />
    </main>
  </template>
</template>

<style scoped>
.main-layout {
  overflow-x: hidden;
  overflow-y: auto;

  /* IE and Edge */
  -ms-overflow-style: none;
  /* Firefox */
  scrollbar-width: none;
}

.main-layout::-webkit-scrollbar {
  display: none;
}
</style>
