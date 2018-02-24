<template>
  <div class="search">
    <div class="list-top">
      <mt-search
        v-model="value"
        cancel-text="确定"
        placeholder="搜索" :result="filterResult1"   @click.native="handleClick1">
      </mt-search>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value: '',
        defaultResult: [
          'Apple',
          'Banana',
          'Orange',
          'Durian',
          'Lemon',
          'Peach',
          'Cherry',
          'Berry',
          'Core',
          'Fig',
          'Haw',
          'Melon',
          'Plum',
          '123',
          'Peanut',
          'Other'
        ]
      }
    },
    computed:{
      filterResult1() {
        return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
      }
    },
    methods: {
      handleClick1 (val){
        $('#drugSearch').css('pointer-events','none')
        var search = val.srcElement.innerText;
        var search2 = val.path[0]._value

        if (search != "" && search != "确定"){
          $(".mint-searchbar-core").val(search)
        }else{
          $(".mint-searchbar-core").val(search2)
        }
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.search{
  background: #fff;
  position: fixed;
  width: 100%;
  bottom: 0;
  top:0;
}
.search .mint-searchbar{
  background: #eee;
}
.search .mint-cell-wrapper{
  border-bottom: 1px solid #eee;
}
.search .mint-search{
  height:100%;
}
</style>
