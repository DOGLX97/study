<template>
  <div>
    <h1 class="test">{{msg}}</h1>
    <h2>计算器:{{$store.state.count}}</h2>
    <h2>{{count}}</h2>  
    <button @click="$store.commit('add',10)">加一</button>
    <button @click="reduce(10)">减一</button>
    <router-view/>
  </div>
</template>
<script>
    import store from '@/vuex/store'
    import {mapState,mapMutations,mapGetters} from 'vuex'
    export default{
      data () {
        return {
          msg: 'Test'
        }
      },
      store,
      // computed:{
      //   count(){
      //     return this.$store.state.count;
      //   }
      // }
      // computed:mapState({
      //   count:state=>state.count
      // })
      computed:{
        ...mapState(['count']),
        ...mapGetters(['count'])
        },
      methods: mapMutations(['add','reduce'])
    }
</script>
<style scoped>
.test{
    background: #f0f;
}
</style>
