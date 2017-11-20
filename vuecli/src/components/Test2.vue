<template>
  <div>
      <h2>{{msg}}</h2>
      <h3>id:{{$route.params.userId}} 姓名:{{$route.params.userName}}</h3>
  </div>
</template>
<script>
export default {
  data() {
      return {
          msg:'这是一个子路由2'
      }
  }
}
</script>
<style scoped>
h2{
    background: #ff0;
}
</style>
