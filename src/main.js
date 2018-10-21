/*
	App VUE
*/

import Vue from 'vue'
import App from './app/index.vue'
Vue.config.productionTip = false


/*
	Estilo
*/

import './style/app.css'
import './style/icons.css'
import './style/fonts.css'


/*
    VUEX
*/

import Vuex from 'vuex'
import VuexStore    from './store'

Vue.use(Vuex)
const store = new Vuex.Store(VuexStore)


/*
    Router
*/

import Router from 'vue-router'
import { routes } from './router'

Vue.use(Router)
const router = new Router({
    // mode: 'history', // Requiere configuraciones en el servidor
    routes
})


router.afterEach((to,) => {
    if (to.params && to.params.id) {
        document.querySelector('title').innerHTML = `${to.name} ${to.params.id}`
    } else {
        document.querySelector('title').innerHTML = to.name
    }
    window.scrollTo(0, 0)
})


/*
    Fusionar Router y Vue
*/
import { sync } from 'vuex-router-sync'
sync(store, router)


/*
	Ejecutar aplicación
*/
new Vue({
	router,
	store,
	render: h => h(App),
	created () {
		window.addEventListener('resize', () => {
				this.$store.commit('cambiarAcncho')
		}, true)
		window.addEventListener('scroll', () => {
				this.$store.commit('cambiarScrollY')
		})
	}
}).$mount('#app')
