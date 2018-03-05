<template>
  <div class="list">
    <div class="list-top">
      <mt-search
        v-model="value"
        cancel-text="取消"
        placeholder="搜索" :result="filterResult" autofocus @click.native="handleClick">
      </mt-search>
    </div>

    <!--<mu-row gutter>
      <mu-tabs :value="activeTab"  id="tabItem" @change="handleTabChange">
        <mu-tab value="tab1"  id="tab1" />
        <mu-tab value="tab2"  title="2"/>
      </mu-tabs>
      <div class="tab-box">
        <div v-if="activeTab === 'tab1'">
          <p>
            <span class="addItem1" @click="openBottomSheet(1)">这是第一个 tab</span>

          </p>
          <p>
            <span class="addItem2" @click="openBottomSheet(2)">haha</span>
          </p>
          <p>
            <span class="addItem3" @click="openBottomSheet(3)">这是第一个 tab</span>
          </p>
          <p>
          <span class="addItem4" @click="openBottomSheet(4)">这是</span>
          </p>
          <p>
            <span class="addItem5" @click="openBottomSheet(5)">这是1</span>
          </p>
          <p>
            <span class="addItem6" @click="openBottomSheet(6)">这是2</span>
          </p>
        </div>
        <div v-if="activeTab === 'tab2'">
          <p>
            这是第二个 tab
          </p>
        </div>
        <div v-if="activeTab === 'tab3'">
          <p>
            这是第三个 tab
          </p>
        </div>
      </div>
    </mu-row>-->
    <div class="list-container">
      <div class="nav-list">
        <mt-button size="small" :class="{activeTab:index==nowIndex}" v-for="(item,index) in tabText" :key="index"
                   @click.native="activer(index)">{{item.text}}
        </mt-button>
      </div>
      <mt-tab-container v-model="active" class="tab-container">
        <mt-tab-container-item v-show="nowIndex===ins">
          <mt-cell  v-for="(n,index) in tabRightText" :class="addItem" @click.native="openBottomSheet()" :key="index">{{n.rightText}}</mt-cell>
        </mt-tab-container-item>
       <!-- <mt-tab-container-item v-show="nowIndex===1">
          <mt-cell v-for="(n,index) in 5" :key="index">222</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item v-show="nowIndex===2">
          <mt-cell v-for="(n,index) in 7"  :key="index">333</mt-cell>
        </mt-tab-container-item>-->
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
  import {TabContainer, TabContainerItem} from "mint-ui";
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
        ins: 0,
        active: "tab-container",
        tabText: [],
        tabRightText: [],
        tabItems: [],
        index: "",
        type: "",
        nowIndex: 0,
        addItem:"addTtem"
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
        var arr1 = new Array();

        this.$http
          .post(
            "http://localhost:9081/api/DiseaseGroupRela/List",
            {GenderType: 1},
            {emulateJSON: true}
          )
          .then(res => {
            // 处理成功的结果
            var id = 0;
            for (var i = 0; i < res.data.Data.length; i++) {
              if (res.data.Data[i].DiseaseGroupId != id) {
                id = res.data.Data[i].DiseaseGroupId;
                sz[i] = res.data.Data[i].DiseaseGroupName;
                arr1[i] = res.data.Data[i].DiseaseName;
                vm.tabText.push({text: sz[i]});
                if(id){
                  vm.tabRightText.push(i)
                }

//                vm.addTtem = "addTtem"+id;
              }

              //获取右边数据
              if (res.data.Data[i].DiseaseGroupId) {
                arr[i] = res.data.Data[i].DiseaseName;
                vm.tabRightText.push({rightText: arr[i]})
              }

            }
          })
          .catch(res => {
          });
      },
      activer(index){
        this.nowIndex = index;

        this.$http
          .post(
            "http://localhost:9081/api/DiseaseGroupRela/List",
            {GenderType: 1},
            {emulateJSON: true}
          ).then(res => {
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
      openBottomSheet(type) {
          var vm = this

        if ($(".fix-item a").length == 0) {
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
        }
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
  }

  .list .mint-search-list {
    z-index: 999;
    margin-top: 54px;
    padding-top: 0;
    background: #fff;
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

  .list .mu-tabs {
    flex-direction: column;
    width: 30%;
    background: #fff;
  }

  .list .mu-tab-text {
    color: #000000;
    font-weight: 500;
  }

  .list .mu-tab-link {
    border-bottom: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    width: 100%;
  }

  .list .mu-tab-link.mu-tab-active {
    border-right: 1px solid transparent;
  }

  .list .mu-tab-active .mu-tab-text {
    color: #0265fe;
  }

  .tab-box {
    width: 70%;
  }

  .mu-tab-link-highlight {
    display: none;
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

  .list-top {
    background: #eee;
  }

  .mu-bottom-sheet {
    background-color: #000;
    opacity: 0.5;
    height: 200px;
  }

  .fix-box {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.51);
    height: 200px;
    z-index: 9999;
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
    position: absolute;
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
    width: 25%;
    float: left;
  }

  .list .tab-container {
    width: 75%;
  }

  .list .mint-button {
    width: 100% !important;
    height: 40px;
    border-radius: 0;
    background: #fff;
    border-right: 1px solid #e2e2e2;
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
</style>
