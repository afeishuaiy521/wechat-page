<template>
  <div class="list">
    <div class="list-top">
      <mt-search
        v-model="value"
        cancel-text="取消"
        placeholder="搜索" :result="filterResult" autofocus @click.native="handleClick">
      </mt-search>
    </div>
    <div class="list-container">
      <div class="nav-list">
        <mt-button size="small" :class="{activeTab:index==nowIndex}" v-for="(item,index) in tabText" :key="index"
                   @click.native="activer(index)">{{item}}
        </mt-button>
      </div>
      <mt-tab-container class="tab-container">
        <mt-tab-container-item :class="{activeTab:index==nowIndex}" :id="groupId" v-show="nowIndex === index"
                               v-for="(item,index) in tabText" :key="index">
          <mt-cell :class="addItem+index" @click.native.prevent="openBottomSheet(index,$event)"
                   v-for="right,index in tabRightText"
                   :key="index">
            {{right}}
          </mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <div class="fix-box" v-show="false" id="fixBox">
      <!--  <div class="fix-item" @click="deleteItems">
   &lt;!&ndash;       <div class="fix-item-span"><span>洒水大多</span><i class="mu-icon material-icons">close</i></div>&ndash;&gt;
        </div>-->
      <div class="fix-item" id="deleteItems">
        <!--       <div class="fix-item-span"><span>洒水大多</span><i class="mu-icon material-icons">close</i></div>-->
      </div>
      <div class="fix-box-bottom" id="NumberDrug" @click="NumberDrug">
        <p>完成(<span id="nums"></span>个疾病)</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {Indicator} from 'mint-ui';
  export default {
    mounted() {
      this.showlist();
    },
    data() {
      return {
        bottomSheet: false,
        value: "",
        apiUrl: "http://localhost:9081/api/DiseaseGroupRela/DiseaseByNameList",
        Name: "",
        defaultResult: [],
        tabText: [],
        tabRightText: [],
        tabItems: [],
        nowIndex: 0,
        addItem: "addTtem",
        groupId: 0,
        type: 0
      };
    },
    computed: {
      filterResult() {
        return this.defaultResult.filter(value =>
          new RegExp(this.value, "i").test(value)
        );
      }
    },
    methods: {
      showlist() {
        var vm = this;
        var sz = new Array();
        var arr = new Array();

        this.$http
          .post(
            "http://localhost:9081/api/DiseaseGroupRela/List",
            {GenderType: 1},
            {emulateJSON: true}
          )
          .then(res => {
            // 处理成功的结果
            var id = 0;
            var Num = 0;
            var dname = new Array();
            for (var i = 0; i < res.data.Data.length; i++) {
              if (res.data.Data[i].DiseaseGroupId != id) {
                id = res.data.Data[i].DiseaseGroupId;
                sz[Num] = res.data.Data[i].DiseaseGroupId;
                dname[Num] = res.data.Data[i].DiseaseGroupName;
                Num++;
              }
            }

            var k = 0;
            for (var i = 0; i < res.data.Data.length; i++) {
              if (sz[0] == res.data.Data[i].DiseaseGroupId) {
                arr[k] = res.data.Data[i].DiseaseName;
                k++;
              }
            }

            vm.tabText = dname;
            vm.tabRightText = arr;
            vm.groupId = sz;
          })
          .catch(res => {
          });
      },
      activer(index){
        this.nowIndex = index;
        var vm = this;
        var arr = new Array();
        this.$http
          .post(
            "http://localhost:9081/api/DiseaseGroupRela/List",
            {GenderType: 1},
            {
              emulateJSON: true, before: ( () => {
              Indicator.open();
            })
            }
          ).then(res => {
          Indicator.close();
          var k = 0;
          for (var i = 0; i < res.data.Data.length; i++) {
            if (vm.groupId[index] == res.data.Data[i].DiseaseGroupId) {
              arr[k] = res.data.Data[i].DiseaseName;
              k++;
            }
          }
          vm.tabRightText = arr;
        })
      },
      /*handleTabChange(val) {
       this.activeTab = val;
       },*/
      handleClick(val) {
        var vm = this;
        var search = val.srcElement.innerText;
        if (search != "" && search != "取消") {
          $(".mint-search-list").hide();
          $(".mint-searchbar-core").val("");
          $("#fixBox").show();
          $(".fix-item").append(
            "<a class='fix-item-span'><span>" +
            search +
            '</span><i  class="mu-icon material-icons">close</i></a>'
          );
          var num = $(".fix-item").children().length;
          $("#nums").html(num);
          $(".fix-item-span").on("click", function () {
            $(this).hide();
          });
        }
        var sz = new Array();
        this.$http
          .post(vm.apiUrl, vm.Name, {emulateJSON: true})
          .then(res => {
            for (var i = 0; i < res.data.Data.length; i++) {
              sz[i] = res.data.Data[i].Name;
            }
            vm.defaultResult = sz;
          })
          .catch(error => {
            console.log(error);
          });
      },
      openBottomSheet(index, ev) {
        var vm = this;
        $("#fixBox").show();
        var rightText = ev.target.innerText;
        $(".fix-item").append(
          "<a class='fix-item-span'><span>" +
          rightText +
          '</span><i  class="mu-icon material-icons">close</i></a>'
        );
        var num = $(".fix-item").children().length;
        $("#nums").html(num);

        var abc = $(".addTtem"+index).children("div").children("div").eq(1).addClass("rightactive")
        console.log(abc)
        /* if ($(".fix-item a").length == 0) {
         $("#fixBox").show();
         $(".addItem" + type).children().eq(1).addClass("active");

         var addContent = $(".addItem" + type).html();
         $(".fix-item").append(
         "<a class='fix-item-span' id='addItem" +
         type +
         "'><span>" +
         addContent +
         '</span><i  class="mu-icon material-icons">close</i></a>'
         );
         var num = $(".fix-item").children().length;
         $("#nums").html(num);
         } else {
         var count = 0;
         for (var i = 0; i < $(".fix-item a").length; i++) {
         if ($(".fix-item a")[i].id != "addItem" + type) {
         count++;
         if ($(".fix-item a").length == count) {
         $("#fixBox").show();
         $(".addItem" + type).addClass("active");
         var addContent = $(".addItem" + type).html();
         $(".fix-item").append(
         "<a class='fix-item-span' id='addItem" +
         type +
         "'><span>" +
         addContent +
         '</span><i  class="mu-icon material-icons">close</i></a>'
         );
         var num = $(".fix-item").children().length;
         $("#nums").html(num);
         }
         }
         }
         $(".fix-item-span").on("click", function () {
         console.log(num);
         $(this).remove();
         $("#nums").html((num -= 1));
         if (num == 0) {
         $("#fixBox").hide();
         }
         });
         }*/
      },
      /* deleteItems(num){
       var aa = num.path[1];
       aa.remove();
       $("."+num.path[1].id).removeClass("active");
       var nums = $(".fix-item").children().length;.
       if(nums==0) {
       $("#fixBox").hide();
       $("#nums").html(nums)
       }else{
       $("#nums").html(nums)
       }
       },*/
      //添加药品
      NumberDrug() {
        $("#isShowList").hide();
        var numSize = $(".fix-item a").length;

        var a =
          "<div class='clearfloat'> <div class='right'> <div class='chat-message drug-text'> ";
        for (var i = 0; i < numSize; i++) {
          a +=
            $(".fix-item-span")
              .children("span")
              .eq(i)
              .html() + "</br>";
        }
        a +=
          " </div> <div class='chat-avatars'><i class='mu-icon material-icons'>account_circle</i></div> </div> </div>";
        $(".chatBox-content-demo").append(a);
        $("#chatBox-content-demo").scrollTop(
          $("#chatBox-content-demo")[0].scrollHeight
        );

        setTimeout(function () {
          $(".chatBox-content-demo").append($("#addDrugMsg").show());
          $("#chatBox-content-demo").scrollTop(
            $("#chatBox-content-demo")[0].scrollHeight
          );
        }, 1000);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .list {
    background: #fff;
    position: fixed;
    width: 100%;
    bottom: 0;
    top: 0;
    overflow: auto;
  }

  .list .mint-search-list {
    z-index: 999;
    margin-top: 52px;
    background: #fff;
    padding-top: 0;
    padding-bottom: 300px;
    position: fixed;
  }

  .list .mint-searchbar {
    background: #eee;
  }

  .list .mint-cell-wrapper {
    border-bottom: 1px solid #eee;
  }

  .list .mint-search {
    height: 100%;
  }

  .tab-box {
    width: 70%;
  }

  .tab-box p {
    text-align: center;
  }

  .tab-box p span {
    cursor: pointer;
  }

  .tab-box p span.active {
    background: #e6efff;
    color: #0265fe;
    padding: 6px 10px;
    border-radius: 50px;
  }

  .list .list-top {
    background: #eee;
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 1;
  }

  .list .list-container {
    padding-bottom: 200px;
    min-height: 570px;
    position: absolute;
    margin-top: 52px;
  }

  .fix-box {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.51);
    height: 200px;
    z-index: 9999;
    overflow: auto;
    padding-bottom: 40px;
  }

  .fix-item-span {
    background: #fff;
    padding: 5px 5px 5px 10px;
    border-radius: 50px;
    color: #0265fe;
    margin-right: 10px;
    margin-bottom: 10px;
    display: inline-block;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .fix-item-span i {
    vertical-align: middle;
    font-size: 19px;
    margin-left: 5px;
    margin-top: -3px;
  }

  .fix-item {
    padding: 15px 10px;
  }

  .fix-box-bottom {
    width: 100%;
    padding: 10px;
    background: #0066ff;
    position: fixed;
    bottom: 0;
  }

  .fix-box-bottom p {
    margin: 0;
    text-align: center;
    color: #fff;
  }

  .list .mint-searchbar-inner {
    height: 36px;
  }

  .list .nav-list {
    width: 26%;
    float: left;
  }

  .list .tab-container {
    width: 74%;
  }

  .list .mint-button {
    width: 100% !important;
    height: 40px;
    border-radius: 0;
    background: #fff;
    border-right: 1px solid #e2e2e2;
    border-bottom: 1px solid #e2e2e2;
  }

  .list .mint-button--default {
    box-shadow: none;
  }

  .list .activeTab {
    border-right: transparent 1px solid;
    color: #0066ff;
  }

  .tab-container {
    text-align: center
  }

  .tab-container .mint-cell-wrapper {
    border: none
  }

  .tab-container .mint-cell-wrapper .mint-cell-text {
    font-size: 14px
  }

  .tab-container .mint-cell {
    min-height: 40px
  }

  .tab-container .mint-cell-title {
    -webkit-box-flex: .5;
    -ms-flex: .5;
    flex: .5;
  }

  .tab-container .mint-cell-value {
    color: #222;
    font-size: 14px
  }

  .rightactive {
    background: #e6efff;
    color: #0265fe;
    padding: 6px 10px;
    border-radius: 50px;
  }
</style>
