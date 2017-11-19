<template>
  <h1 class="test">{{msg}}</h1>
</template>
<script>
    export default{
      data () {
        return {
          msg: 'Test'
        }
      }
    }
</script>
<style scoped>
.test{
    background: #f0f;
}
</style>
