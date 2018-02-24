<template>
  <div class="index-footer"v-show="false">
    <mu-paper>
      <mu-bottom-nav :value="bottomNav" @change="">

        <mu-flexbox-item class="flex-bottom">
          <span>返回上一个问题</span>
        </mu-flexbox-item>
        <mt-button class="back-btn"  id="backAsk"><span class="fa fa-reply"></span></mt-button>
        <!--<mu-bottom-nav-item value="nearby" id="backAsk" title=""  icon="rotate_left"/>-->
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>
  import './../assets/js/chat'
    export default {
        name: 'index-footer',
        data () {
            return {
              bottomNav: 'recents'
            }
        },
      methods:{
        /*backAsk(type){
          var qu1 = $(".chatBox-content-demo .clearfloat").eq($(this).size() - 2)
          var qu4 = $(".chatBox-content-demo .clearfloat").eq($(this).size() - 4)
          var qu3 = $(".chatBox-content-demo .clearfloat").eq($(this).size() - 5)
          var qu2 = $(".chatBox-content-demo .clearfloat").eq($(this).size() - 3)
          var quId = qu1[0].id
          $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight);
          switch (quId) {
            case "addDiagnosis":
              $(".chatBox-content-demo").append(qu3)
              qu4.hide()
              qu1.hide()
              $(".chatBox-send").show();
              break;
            case "addDrugMsg":
              $(".chatBox-content-demo").append(qu4)
              qu2.hide()
              qu1.hide()
              $("#nums").html("0")
              $(".fix-item").html("")
              $(".mint-searchbar-core").val("")
              $(".tab-box p span").removeClass("active");
              $("#fixBox").hide();
              break;
            case "addUse":
              $(".chatBox-content-demo").append(qu4)
              qu3.hide()
              qu1.hide()
              qu2.hide()
              break;
            case "addItem":
              $(".chatBox-content-demo").append(qu4)
              qu1.hide()
              qu2.hide()
              $('#showMsg').css('pointer-events','auto');
              $('.save-drug-msg').remove()
              $(".drugItem").hide()
              break;
            case "conceive":
              $(".chatBox-content-demo").append(qu3)
              qu1.hide()
              qu4.hide()
              $("#conceive-btn").hide()
              $(".chatBox-send").show()
              break;
            default:
              break;
          }
        }*/
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .index-footer{
    position: fixed;
    width: 100%;
    bottom: 0;
  }
  .index-footer .mu-bottom-nav{
    color: #999;
    height: 36px;
  }
  .index-footer .mu-buttom-item-wrapper{
    float: right;
  }
  .flex-bottom{
    text-align: left;
    padding-left: 10px;
  }
  .back-btn{
    height: 100%!important;
    background: #fff!important;
    border:none!important;
    box-shadow: none!important;
    color: #0066ff!important;
  }
</style>
