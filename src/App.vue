<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app{
    background: #eee;
    position: absolute;
    top: 0;
    bottom: 0;
    overflow: hidden;
  }

</style>
