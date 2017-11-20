import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Test1 from '@/components/Test1'
import Test2 from '@/components/Test2'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/test',
      name: 'Test',
      component: Test,
      alias: '/abc',
      children:[
        {
          path: 'test1',
          name: 'test1',
          component: Test1
        }, {
          path: 'test2/:userId(\\d+)/:userName',
          component: Test2
        }
      ]
    }, {
      path: '/redirect/:userMonth(\\d+)/:userSchool',
      redirect: '/test/test2/:userMonth(\\d+)/:userSchool'
    }, {
      path: '*',
      component: Error,
      beforeEnter:(to,from,next)=>{
        console.log("路由钩子函数");
        console.log(to);
        console.log(from);
        next(true);
      }
    }
  ]
})
