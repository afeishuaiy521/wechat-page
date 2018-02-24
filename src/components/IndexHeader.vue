<template>
  <div class="index-header">
    <mu-appbar title="智能分析">
      <mu-icon-button icon="navigate_before" slot="left"/>
      <mu-icon-menu icon="more_vert" slot="right">
        <mu-menu-item title="菜单 1"/>
      </mu-icon-menu>
    </mu-appbar>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .index-header .mu-appbar{
    background: #fff;
    color: #000;
  }
  .index-header .mu-appbar-title{
    text-align: center;
  }
</style>
