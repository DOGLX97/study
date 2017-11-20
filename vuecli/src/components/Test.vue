<template>
  <div>
    <h1 class="test">{{msg}}</h1>
    <h2>计算器:{{$store.state.count}}</h2>
    <button @click="$store.commit('add')">加一</button>
    <button @click="$store.commit('reduce')">减一</button>
    <router-view/>
  </div>
</template>
<script>
    import store from '@/vuex/store'
    export default{
      data () {
        return {
          msg: 'Test'
        }
      },
      store
    }
</script>
<style scoped>
.test{
    background: #f0f;
}
</style>
