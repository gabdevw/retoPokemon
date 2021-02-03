import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	flagModoOscuro:false,
     classObject: { 
                      
                   allWhite: false,
                       
                },

  },
  mutations: {
 activaModo(state){

		if (!state.flagModoOscuro) {

				state.classObject.allWhite=true;
				
				state.flagModoOscuro=true;
				
				} else {
				
				state.flagModoOscuro=false;
				state.classObject.allWhite=false;
				

				}
  }
  },
  actions: {
  activaModoAction(context){

  context.commit('activaModo');
  }
  },
  modules: {
  }
})
