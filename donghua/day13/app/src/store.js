import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var state ={
	arr:[],
	name:''
}
var getters ={
	sxy(state){
		return state.arr
	},
	zh(state){
		var znum=0
		for(var i = 0;i<state.arr.length;i++){
			znum += state.arr[i].price*state.arr[i].s
			
		}
		return znum
		
	}
}
var mutations ={
	revise(state,num){
		location.href='#/shopping'
		var type =true
		console.log(type)
		for(var i=0;i<state.arr.length;i++){
				if(state.arr[i].title==num.title){
					type =false
					state.arr[i].s++	
				}
			
		}
		if(type){
			num.s=1
			state.arr.push(num)
			state.name=num.title
		}
		console.log(num)
	},
	jia(state,a){
		for(var i=0;i<state.arr.length;i++){
				if(state.arr[i].title==a){
					state.arr[i].s++	
				}
			
		}
	},
	jian(state,a){
			for(var i = 0;i<state.arr.length;i++){
				if(state.arr[i].title==a){
					state.arr[i].s--
					if(state.arr[i].s<=0){
						state.arr[i].s=1
					}
				}
			}
		
	},
	del(state,a){
			for(var i = 0;i<state.arr.length;i++){
				if(state.arr[i].title==a){
					
					state.arr.splice(i,1)
				}
			}
		
	},
	
}
var actions ={
	a_revise({commit},num){
		commit('revise',num)
	},
	jia({commit},a){
		commit('jia',a)
	},
	jian({commit},a){
		commit('jian',a)
	},
	del({commit},a){
		commit('del',a)
	}
}
export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})