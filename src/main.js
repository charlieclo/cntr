import { createApp, h, provide } from 'vue'
import { router } from '@/router'
import { createI18n } from 'vue-i18n'
import VueDragscroll from "vue-dragscroll"
import '@/style.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import App from '@/App.vue'
import en from '@/locales/en.json'
import id from '@/locales/id.json'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

// Create I18n
const i18n = createI18n({
  legacy: false,
  locale: 'id',
  messages: {
    en,
    id
  }
})

// Create HTTP Link for GraphQL
const httpLink = createHttpLink({
  uri: import.meta.env.DEV ? '/content' : import.meta.env.VITE_GRAPHQL_PATH
})

// Construct In Memory Cache
const cache = new InMemoryCache({
  addTypename: false
})

// Create New Apollo Client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
  connectToDevTools: import.meta.env.DEV
})

// Create App
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
})

// Router
app.use(router)

// i18n
app.use(i18n)

// Drag Scroll
app.use(VueDragscroll)

// Mount to App
app.mount('#app')
