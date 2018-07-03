import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = resolve => {
  require.ensure([], () => {
    resolve(require('@/pages/HelloWorld'))
  }, 'helloWorld')
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
