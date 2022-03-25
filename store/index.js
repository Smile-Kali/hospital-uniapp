import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		login:uni.getStorageSync('token')?true:false,
		token:"",
		userInfo:"",
		isDealer:false,
	},
	mutations:{
		wxLogin(state, params) {  
			
			let { token } = params;
			
			state.token = token;
			state.login = true;
			
			uni.setStorageSync('token',token);
			
		},
		getUserInfo(state) {
			uni.$u.api.User.getUserInfo().then(res =>{
				state.userInfo = res.data.userInfo;
			})
			uni.$u.api.Distribution.getApplyState().then(res =>{
				state.isDealer = res.data.is_dealer;
			})
		},
		logout(state) {  
			state.login = false;  
			state.token = "";  
			state.userInfo = "";
			uni.removeStorageSync('token')
		} 
	},
	actions:{
		
	}
})