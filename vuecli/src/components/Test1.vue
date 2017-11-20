<template>
  <div>
      <h2>这是一个子路由1</h2>
      <h3>姓名:{{$route.params.name}} 年龄:{{$route.params.age}}</h3>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  beforeRouteEnter: (to, from, next) => {
    console.log("beforeRouteEnter准备进入路由模板");
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("beforeRouteLeave准备离开路由模板");
    next();
  }
}
</script>
<style scoped>
h2{
    background: #00f;
}
</style>


