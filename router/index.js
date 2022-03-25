import {RouterMount,createRouter} from 'uni-simple-router';
import store from '@/store'

const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,  
	routes: [...ROUTES]
});

//需要拦截的路由名称
const interceptRouter = []

//全局路由前置守卫
router.beforeEach((to, from, next) => {
	console.log(ROUTES)
	if(interceptRouter.includes(to.name)){
		//判断是否登录
		if(store.state.login){
			next();
		}else{
			next();
		}
	}else{
		next();
	}
});
// 全局路由后置守卫
router.afterEach((to, from) => {
    console.log('跳转结束')
})

export {
	router,
	RouterMount
}