<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <h3>编程式导航</h3>
      <button @click='goBack'>back</button>
      <button @click='goForward'>forward</button>
      <button @click='goHome'>home</button>
    </div>
    <h3>路由，子路由，带参数传参，url传参，重定向，别名</h3>
    <router-link to="/">主页</router-link>
    <router-link to="/test">路由</router-link>
    <router-link :to="{name:'test1',params:{name:'zhangsan',age:18}}">子路由1</router-link> 
    <router-link to="/test/test2/1997/lisi">子路由2</router-link>   
    <router-link to="/redirect/1021/nongda">重定向</router-link>    
    <router-link to="/abc">alias</router-link>    
    <transition name="fade" mode="out-in">
      <router-view/>    
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    goForward(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-leave{
  opacity: 1;
}
.fade-enter-active{
  transition: opacity 0.5s;
}
.fade-leave-active{
  transition:opacity 0.5s;
}
</style>
