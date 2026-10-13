import vuetify from './plugins/vuetify'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

const app = createApp(App).use(router).use(i18n).use(vuetify)

// Espera a rota inicial (carregada sob demanda) resolver antes de montar,
// senão header e footer aparecem colados no topo enquanto a página carrega
router.isReady().then(() => app.mount('#app'))
