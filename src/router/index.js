import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import women from '@/components/women'
import fengcai from '@/components/fengcai'
import pinzhi from '@/components/pinzhi'
import jiaoxue from '@/components/jiaoxue'
import guoji from '@/components/guoji'
import huodong from '@/components/huodong'
import ruxue from '@/components/ruxue'
import jiaru from '@/components/jiaru'

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
     {path: '/ruxue',component: ruxue},
     {path: '/jiaru',component: jiaru},
  ]
})
