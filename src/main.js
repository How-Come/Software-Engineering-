import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import Util from './libs/util';
import App from './app.vue';
import axios from 'axios';
import vueAxios from 'vue-axios';
import store from './store/store';
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(iView);
Vue.use(vueAxios, axios);


//请求配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL = 'http://muma2018.com:25761';


// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (!localStorage.currenUser_token) {
            store.commit('setToken', localStorage.getItem('currentUser_token'));
        }   
        if (store.state.token) {  // 通过vuex state获取当前的token是否存在
            next();
        }
        else {
            next({
                path: '',
                query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            });
        }
    }
    else {
        next();
    }
});

// created: function () {
//         var self = this;
//         checkPermissions(function (result) {
//             if(result === 'allowed') {
//                 // start making AJAX requests to return data
//                 console.log('permission allowed!');
//             } else {
//                 console.log('permission denied!');
//                 self.$router.go('/denied');
//             }   
//         });
//     }


// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    store.commit('logout');
                    router.replace({
                        path: '/',
                        query: { redirect: router.currentRoute.fullPath }
                    });
            }
        }
        return Promise.reject(error.response.data);   // 返回接口返回的错误信息
    });

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});








new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});