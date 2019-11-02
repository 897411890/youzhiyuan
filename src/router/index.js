import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import women from '@/components/women'
import fengcai from '@/components/fengcai'
import pinzhi from '@/components/pinzhi'
import jiaoxue from '@/components/jiaoxue'
import guoji from '@/components/guoji'
import huodong from '@/components/huodong'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: HelloWorld},
     {path: '/women',component: women},
     {path: '/fengcai',component: fengcai},
     {path: '/pinzhi',component: pinzhi},
     {path: '/jiaoxue',component: jiaoxue},
     {path: '/guoji',component: guoji},
     {path: '/huodong',component: huodong},
  ]
})
