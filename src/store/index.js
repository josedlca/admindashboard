import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  sidebar:true
  },
  mutations: {
	  showOrNotSidebar(state){
		if(state.sidebar== true){
			state.sidebar=false
		}else{
			state.sidebar=true
		}
	  }
  },
  actions: {
  },
  modules: {
  }
})
