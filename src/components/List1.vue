<template>
  <div class="list">
    <div class="list-top">
      <mt-search
        v-model="value"
        cancel-text="取消"
        placeholder="搜索":result="filterResult"autofocus  @click.native="handleClick">
      </mt-search>
    </div>

    <mu-row gutter>
      <mu-tabs :value="activeTab"  @change="handleTabChange">
        <mu-tab value="tab1" title="常见疾病"/>
        <mu-tab value="tab2" title="头部"/>
        <mu-tab value="tab3" title="咽喉和颈部"/>
        <mu-tab value="tab4" title="四肢"/>
        <mu-tab value="tab5" title="胸部"/>
        <mu-tab value="tab6" title="腹部"/>
        <mu-tab value="tab7" title="腰背部"/>
        <mu-tab value="tab8" title="泌尿生殖"/>
        <mu-tab value="tab9" title="臀部及肛门"/>
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
    </mu-row>
    <div class="fix-box" v-show="false" id="fixBox">
     <div class="fix-item" @click="deleteItems">
<!--       <div class="fix-item-span"><span>洒水大多</span><i class="mu-icon material-icons">close</i></div>-->
     </div>
      <div class="fix-box-bottom"id="NumberDrug"@click="NumberDrug">
        <p>完成(<span id="nums"></span>个疾病)</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    created(){
    },
    data () {
      return {
        activeTab: 'tab1',
        bottomSheet: false,
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
      filterResult() {
        return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
      }
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
      },
      handleClick (val){
          var search = val.srcElement.innerText;
          if (search != "" && search != "取消"){
            $(".mint-search-list").hide();
            $(".mint-searchbar-core").val("")
            $("#fixBox").show();
            $(".fix-item").append("<div class='fix-item-span'><a>"+search+"</a><i  class=\"mu-icon material-icons\">close</i></div>")
            var num = $(".fix-item").children().length
            $("#nums").html(num)
          }
      },
      openBottomSheet:function (type) {
        if($(".fix-item div").length == 5){
            return false;
        }
        if(type == 1 && $(".fix-item div").length == 0) {
          $("#fixBox").show();
          $(".addItem" + type).addClass("active");
          var addContent = $(".addItem" + type).html();
          $(".fix-item").append("<div class='fix-item-span' id='addItem"+type+"'><a>" + addContent + "</a><i  class=\"mu-icon material-icons\">close</i></div>")
          var num = $(".fix-item").children().length
          $("#nums").html(num)
        }else{
          var count=0;
          for (var i=0;i<$(".fix-item div").length; i++)
          {
              if($(".fix-item div")[i].id != "addItem"+type) {
                  count++;
                  if($(".fix-item div").length == count){
                    $("#fixBox").show();
                    $(".addItem" + type).addClass("active");
                    var addContent = $(".addItem" + type).html();
                    $(".fix-item").append("<div class='fix-item-span' id='addItem"+type+"'><a>" + addContent + "</a><i  class=\"mu-icon material-icons\">close</i></div>")
                    var num = $(".fix-item").children().length
                    $("#nums").html(num)
                  }
              }
          }
        }
      },
      deleteItems(num){
           var aa = num.path[1]
           aa.remove()
           $("."+num.path[1].id).removeClass("active")
        var nums = $(".fix-item").children().length
        if(nums==0) {
          $("#fixBox").hide();
          $("#nums").html(nums)
        }else{
          $("#nums").html(nums)
        }
      },
      //添加药品
      NumberDrug(){
        $("#isShowList").hide();
        var numSize = $(".fix-item div").length

        var a="<div class='clearfloat'> <div class='right'> <div class='chat-message drug-text'> ";
        for(var i = 0;i < numSize; i++) {
          a += $(".fix-item-span").children("span").eq(i).html()+"</br>";
        }
        a += " </div> <div class='chat-avatars'><i class='mu-icon material-icons'>account_circle</i></div> </div> </div>";
        $(".chatBox-content-demo").append(a);
        $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight);


        setTimeout(function () {
          $(".chatBox-content-demo").append($("#addDrugMsg").show())
          $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight);
        }, 1000)
      }
      /*deleteItem (){

        /!*let deleteSpan2 = $(".fix-item .fix-item-span").eq(1)
        let deleteSpan3 = $(".fix-item .fix-item-span").eq(2)
        let deleteSpan4 = $(".fix-item .fix-item-span").eq(3)
        let deleteSpan5 = $(".fix-item .fix-item-span").eq(4)
        console.log(deleteSpan1)
        console.log(deleteSpan2)
        console.log(deleteSpan3)
        console.log(deleteSpan4)
        console.log(deleteSpan5)*!/

       /!* switch (i){
          case "1":
            deleteSpan.hide()
            break;
          case "2":
            deleteSpan.hide()
            break;
          case "3":
            deleteSpan.hide()
            break;
          case "3":
            $(".fix-item").children().eq(3).hide()
            break;
          case "4":
            $(".fix-item").children().eq(4).hide()
            break;
          default:
              break
        }*!/



      }*/
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .list{
    background: #fff;
    position: fixed;
    width: 100%;
    bottom: 0;
    top:0;
  }
  .list .mint-search-list{
    z-index: 999;
    margin-top: 44px;
    padding-top: 0;
    background: #fff;
  }
  .list .mint-searchbar{
    background: #eee;
  }
  .list .mint-cell-wrapper{
    border-bottom: 1px solid #eee;
  }
  .list .mint-search{
    height:100%;
  }
  .list .mu-tabs{
    flex-direction: column;
    width: 30%;
    background: #fff;
  }
  .list .mu-tab-text{
    color: #000000;
    font-weight: 500;
  }
  .list .mu-tab-link{
    border-bottom: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    width: 100%;
  }
  .list .mu-tab-link.mu-tab-active{
    border-right:1px solid transparent;
  }
  .list .mu-tab-active .mu-tab-text{
    color: #0265fe;
  }
  .tab-box{
    width: 70%;
  }
  .mu-tab-link-highlight{
    display: none;
  }
  .tab-box p{
    text-align: center;
  }
  .tab-box p span{
    cursor: pointer;
  }
  .tab-box p span.active{
    background: #e6efff;
    color: #0265fe;
    padding: 6px 10px;
    border-radius: 50px;
  }
  .list-top{
    background: #eee;
  }

  .mu-bottom-sheet {
    background-color: #000;
    opacity: .5;
    height: 200px;
  }
  .fix-box{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.51);
    height: 200px;
    z-index: 9999;
  }
  .fix-item-span{
    background: #fff;
    padding: 5px 5px 5px 10px;
    border-radius: 50px;
    color: #0265fe;
    margin-right: 10px;
    margin-bottom: 10px;
    display: inline-block;
  }
  .fix-item-span a{
    color: #0265fe;
  }
  .fix-item-span i{
    vertical-align: middle;
    font-size: 19px;
    margin-left: 5px;
    margin-top: -3px;
  }
  .fix-item{
    padding: 15px 10px;
  }
  .fix-box-bottom{
    width: 100%;
    padding: 10px;
    background: #0066ff;
    position: absolute;
    bottom: 0;
  }
  .fix-box-bottom p{
    margin: 0;
    text-align: center;
    color: #fff;
  }
  .list .mint-searchbar-inner{
    height: 36px;
  }
</style>
