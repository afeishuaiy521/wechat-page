<template>
  <div class="search">
    <div class="list-top">
      <mt-search
        autofocus
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
      handleClick1 (){
        $('#drugSearch').css('pointer-events','none')
        $(".list-top").on("click",".mint-cell-wrapper",function () {
          var search = $(this).children("div").eq(0).children().html()
          if (search != ""){
            $(".mint-searchbar-core").val(search)
          }
        })
        $(".mint-searchbar-core").keyup(function () {
          $(".mint-searchbar-core").val(this.value)
        })
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
.search .mint-searchbar-inner{
  height: 36px;
}
</style>
