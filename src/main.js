import Vue from 'vue'
import App from './App.vue'
import apolloProvider from './graphql/apollo'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

Vue.use(Buefy, { defaultIconPack: 'fas' })

new Vue({
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
