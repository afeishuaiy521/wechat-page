<template>
  <div class="search">
    <div class="list-top">
      <mt-loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="autofill">
        <mt-search
        autofocus
        v-model="value"
        cancel-text="确定"
        placeholder="搜索" :result="filterResult1"   @click.native="handleClick1">
      </mt-search>
      </mt-loadmore>
      
    </div>
  </div>
</template>

<script>
import { Loadmore } from "mint-ui";
export default {
  data() {
    return {
      value: "",
      defaultResult: [],
      apiUrl:
        "http://localhost:9081/api/DiseaseGroupRela/JNT_DrugByDrugNameList",
      allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
      scrollMode: "touch", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
      autofill: true
    };
  },
  template:
    '<mt-loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="autofill"></mt-loadmore>',
  mounted() {},
  components: {
    "v-loadmore": Loadmore // 为组件起别名，vue转换template标签时不会区分大小写，例如：loadMore这种标签转换完就会变成loadmore，容易出现一些匹配问题
  },
  computed: {
    filterResult1() {
      return this.defaultResult.filter(value =>
        new RegExp(this.value, "i").test(value)
      );
    }
  },
  methods: {
    loadBottom() {
      // 上拉加载
      this.more(); // 上拉触发的分页查询
      this.$refs.loadmore.onBottomLoaded(); // 固定方法，查询完要调用一次，用于重新定位
    },
    more() {
      //分页
    },
    isHaveMore(isHaveMore) {
      // 是否还有下一页，如果没有就禁止上拉刷新
      this.allLoaded = true; //true是禁止上拉加载
      if (isHaveMore) {
        this.allLoaded = false;
      }
    },
    handleClick1() {
      $(".mint-search-list").wrap("<mt-loadmore  v-if=\"isShow\" :bottom-method=\"loadBottom\" :bottom-all-loaded=\"allLoaded\" ref=\"loadmore\" :autoFill=\"autofill\"></mt-loadmore>")
      $("#drugSearch").css("pointer-events", "none");
      $(".list-top").on("click", ".mint-cell-wrapper", function() {
        var search = $(this)
          .children("div")
          .eq(0)
          .children()
          .html();
        if (search != "") {
          $(".mint-searchbar-core").val(search);
        }
      });
      var vm = this;
      var startx, starty;
      var pageSize = 0;
      $(".mint-searchbar-core").keyup(function() {
        $(".mint-searchbar-core").val(this.value);
        var sz = new Array();
        vm.$http
          .post(
            vm.apiUrl,
            {
              DrugName: this.value,
              Limit: 10,
              Start: pageSize
            },
            { emulateJSON: true }
          )
          .then(res => {
            for (var i = 0; i < res.data.Data.length; i++) {
              sz[i] = res.data.Data[i].ProductName;
            }
            vm.defaultResult = sz;
            console.log(res.data.Data)
            function getAngle(angx, angy) {
              return Math.atan2(angy, angx) * 180 / Math.PI;
            }
            //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
            function getDirection(startx, starty, endx, endy) {
              var angx = endx - startx;
              var angy = endy - starty;
              var result = 0;

              var angle = getAngle(angx, angy);
              if (angle >= -135 && angle <= -45) {
                result = 1;
              } else if (angle > 45 && angle < 135) {
                result = 2;
              } else if (
                (angle >= 135 && angle <= 180) ||
                (angle >= -180 && angle < -135)
              ) {
                result = 3;
              } else if (angle >= -45 && angle <= 45) {
                result = 4;
              }

              return result;
            }
            document.addEventListener(
              "touchstart",
              function(e) {
                startx = e.touches[0].pageX;
                starty = e.touches[0].pageY;
              },
              false
            );
            document.addEventListener(
              "touchend",
              function(e) {
                var endx, endy;
                endx = e.changedTouches[0].pageX;
                endy = e.changedTouches[0].pageY;
                var direction = getDirection(startx, starty, endx, endy);
                switch (direction) {
                  case 1:
                    vm.$http
                      .post(
                        vm.apiUrl,
                        {
                          DrugName: this.value,
                          Limit: 10,
                          Start: pageSize+10
                        },
                        { emulateJSON: true }
                      )
                      .then(res => {
                        for (var i = 0; i < res.data.Data.length; i++) {
                          sz[i] = res.data.Data[i].ProductName;
                        }
                        vm.defaultResult = sz;
                      });
                    break;
                  default:
                }
              },
              false
            );
          })
          .catch(error => {
            console.log(error);
          });
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.search {
  background: #fff;
  position: fixed;
  width: 100%;
  bottom: 0;
  top: 0;
}
.search .mint-searchbar {
  background: #eee;
}
.search .mint-cell-wrapper {
  border-bottom: 1px solid #eee;
}
.search .mint-search {
  height: 100%;
}
.search .mint-searchbar-inner {
  height: 36px;
}
.search .mint-search-list {
  padding-top: 52px !important;
}
</style>
