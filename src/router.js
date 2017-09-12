import App from './app.vue'

import beforeLogin from './views/beforeLogin.vue'

import afterLogin_5 from './views/afterLogin_5.vue'
import afterLogin_3 from './views/afterLogin_3.vue'
import afterLogin_0 from './views/afterLogin_0.vue'

import signUp from './template/beforeLogin/signUp.vue'
import signIn from './template/beforeLogin/signIn.vue'

import creatNew from './template/afterLogin/creatNew.vue'
import creatNew1 from './template/afterLogin/creatNew1.vue'
import projectList from './template/afterLogin/projectList.vue'
import projectList1 from './template/afterLogin/projectList1.vue'

import passwdChg from './template/afterLogin/passwdChg.vue'
import passwdChg1 from './template/afterLogin/passwdChg1.vue'
import passwdChg2 from './template/afterLogin/passwdChg2.vue'
import projectInfoChg from './template/afterLogin/projectInfoChg.vue'
import projectInfoChg1 from './template/afterLogin/projectInfoChg1.vue'
import projectDetail from './template/afterLogin/projectDetail.vue'
import projectDetail1 from './template/afterLogin/projectDetail1.vue'
import userInfoChg from './template/afterLogin/userInfoChg.vue'
import userInfoChg1 from './template/afterLogin/userInfoChg1.vue'
import userInfoChg2 from './template/afterLogin/userInfoChg2.vue'
import viewData from './template/afterLogin/viewData.vue'
import modifydata from './template/afterLogin/modifydata.vue'

const routers = [
    {
        path: '/',
        component: beforeLogin,
        children: [
            {
                path:'',
                name:'signIn',
                component:signIn
            },
            {
                path: 'signUp',
                name: 'signUp',
                component: signUp,
            }
        ]
    },
    {
        path: '/:userId',
        component: afterLogin_0,
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
        children: [
            {
                path:'passwdChg',
                name:'passwdChg',
                component:passwdChg,
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
            },
            {
                path:'userInfoChg',
                name:'userInfoChg',
                component:userInfoChg,
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
            },
        ]
    },
    {
        path: '/:userId',
        component: afterLogin_3,
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
        children: [
            {
                path: 'projectList',
                name: 'projectList',
                component: projectList,
                meta: {
                    requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
                },
            },
            {
                path: 'creatNew',
                name: 'creatNew',
                component: creatNew,
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
            },
            {
                path:'passwdChg1',
                name:'passwdChg1',
                component:passwdChg1,
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
            },
            {
                path:'projectInfoChg',
                name:'projectInfoChg',
                component:projectInfoChg,
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
            },
            {
                path:'userInfoChg1',
                name:'userInfoChg1',
                component:userInfoChg1,
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
            },
            {
                path:':projectId',
                name:'projectDetail',
                component:projectDetail,
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
            },
        ]
    },
    {
        path: '/:userId',
        component: afterLogin_5,
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
        children: [
            {
                path: 'projectList1',
                name: 'projectList1',
                component: projectList1,
                meta: {
                    requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
                },
            },
            {
                path: 'creatNew1',
                name: 'creatNew1',
                component: creatNew1,
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
            },
            {
                path:'passwdChg2',
                name:'passwdChg2',
                component:passwdChg2,
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
            },
            {
                path:'projectInfoChg1',
                name:'projectInfoChg1',
                component:projectInfoChg1,
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
            },
            {
                path:'userInfoChg2',
                name:'userInfoChg2',
                component:userInfoChg2,
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
            },
            {
                path:':projectId1',
                name:'projectDetail1',
                component:projectDetail,
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
            },
            {
                path: 'viewData',
                name: 'viewData',
                component:viewData,
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
            },
            {
                path: 'memberId', 
                name: 'modifydata',
                component:modifydata,
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
            },
        ]
    },
    
]   


export default routers;