<template>
  <div class="drug-use-msg">
    <div class="msg-form">
      <mt-field label="药物名称" disableClear readonly></mt-field>
      <mt-field label="用法" disableClear placeholder="请选择" @click.native="handBottom" state="close" readonly></mt-field>
      <span class="fa fa-angle-right"></span>
      <mt-field label="每次用量" disableClear placeholder="请输入用量"></mt-field>
      <a @click="UnitBtn">
        <span class="drugUnit"></span>
        <span class="fa fa-angle-right"></span>
      </a>

      <mt-field label="每日次数" disableClear placeholder="请输入次数"></mt-field>
      <span class="drugNum">次</span>
    </div>
    <div class="drug-msg-btn">
      <mu-raised-button label="返回" @click="backBtnMsg" class="demo-raised-button"/>
      <mu-raised-button id="save-drug-msg" label="保存" class="demo-raised-button"/>
    </div>
    <mt-popup id="showUse" modal="true" v-model="popupVisible"
      position="bottom">
      <mt-picker  :showToolbar="true" :slots="slots" >
        <div class="bottom-header">
          <button @click="cancelBtn">取消</button>
          <button @click="yesBtn">确定</button>
        </div>
      </mt-picker>
    </mt-popup>
    <mt-popup id="showUnit" modal="true" v-model="popupUnit"
              position="bottom">
      <mt-picker  :showToolbar="true" :slots="Unit" >
        <div class="bottom-header">
          <button @click="cancelUnit">取消</button>
          <button @click="yesBtnUnit">确定</button>
        </div>
      </mt-picker>
    </mt-popup>

  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { Indicator } from "mint-ui";
export default {
  name: "",
  data() {
    return {
      msg: "",
      popupVisible: false,
      popupUnit: false,
      slots: [{ values: [] }],
      Unit: [{ values: [] }]
    };
  },
  methods: {
    handBottom: function() {
      var vm = this;
      var sz = new Array();
      this.popupVisible = true;
      $("#showUse").show();
      //给药途径
      this.$http
        .post(
          "http://localhost:9081/api/DiseaseGroupRela/JNT_DrugAttrList",
          {
            AttrType: 30
          },
          { emulateJSON: true }
        )
        .then(res => {
          for (var i = 0; i < res.body.Data.length; i++) {
            sz[i] = res.body.Data[i].JntDrugsAttrName;
          }
          vm.slots[0].values = sz;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    /*saveDrugMsg(){
            let sss =1;
            var msg = {};
            msg.msg1 = $(".mint-field-core").eq(0).val();
            msg.msg2 = $(".mint-field-core").eq(1).val();
            msg.msg3 = $(".mint-field-core").eq(2).val();
            msg.msg4 = $(".mint-field-core").eq(3).val();
            msg.unit1 = $(".drugUnit").html();
            msg.unit2 = $(".drugNum").html();
            var reg=/^[1-9]\d*$|^0$/;
            if(reg.test(msg.msg3)==true || reg.test(msg.msg4)==true){
              if (msg.msg2 != "" && msg.msg3 != "" && msg.msg4 != "") {
                $("#isShowMsg").hide();
                $(".chatBox-content-demo").append("<div class=\"clearfloat\">" +
                  "<div class=\"right\"> <div class=\"chat-message save-drug-msg\" id=\"msg"+sss+"\"> <span> "+ msg.msg1 + "</span></br>" + "用法：<span>" + msg.msg2 + " </span></br>" + "用量：<span>" + msg.msg3 + msg.unit1 + " </span></br>" + "每日次数：<span> " + msg.msg4 + msg.unit2 + "</span> </div> " +
                  "<div class=\"chat-avatars\"><i class=\"mu-icon material-icons\">account_circle</i></div> </div> </div>")
                msg.msg1 = $(".mint-field-core").eq(0).val("");
                msg.msg2 = $(".mint-field-core").eq(1).val("");
                msg.msg3 = $(".mint-field-core").eq(2).val("");
                msg.msg4 = $(".mint-field-core").eq(3).val("");
                $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight);
                setTimeout(function () {
                  $(".chatBox-content-demo").append($("#addItem").show())
                  $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight);
                }, 1000)

                sss++;
              }
            }else{
              Toast({
                message: '请输入正确信息',
                duration: 2000
              });
              return false
            }
            $("#isShowResult").click(function () {
              for (var i= 1; i<sss; i++) {
                let mseUseDiv = "<div><h5><span id=\"drugName"+i+"\"></span>50mg*6袋/盒</h5>"+
                  "<p><span>用法用量：每日<small id=\"everydayCount"+i+"\"></small>，每次：<small id=\"everyNum"+i+"\"></small>,<small id=\"useType"+i+"\"></small></span></p>"+
                  "<hr class=\"line-after\"><span class=\"icon-question fa fa-question-circle\"></span></div>"
                var textResult = $("#msg" + i).children("span")
                $(".result-drug-use-det").append(mseUseDiv)
                for (var j = 0; j < textResult.length; j++) {
                  $('#drugName'+i).html(textResult.eq(0).html());
                  $('#everydayCount'+i).html(textResult.eq(3).html());
                  $('#everyNum'+i).html(textResult.eq(2).html());
                  $('#useType'+i).html(textResult.eq(1).html());
                  console.log($('#drugName'+i).html(textResult.eq(0).html()),$('#everydayCount'+i).html(textResult.eq(3).html()),$('#everyNum'+i).html(textResult.eq(2).html()))
                }
              }



              Indicator.open({
               text:"提交中..",
               spinnerType: 'triple-bounce'
               }
               );
              setTimeout(
                function () {
                  $(".chatBox-content-demo").append(
                    $("#levelItem").show(),
                    $("#assDetails").show(),
                    $("#evaluate").show(),
                    $(".bottom-tip-box").show(),
                     Indicator.close()
                  );
                  $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight);
                },1000
              )
            })
          },*/
    cancelBtn() {
      this.popupVisible = false;
    },
    yesBtn() {
      this.popupVisible = false;
      let popupText = $("#showUse .picker-item.picker-selected").html();
      let popupText1 = $.trim(popupText);
      $(".mint-field-core")
        .eq(1)
        .val(popupText1);
    },
    UnitBtn() {
       var vm = this;
      var sz = new Array();
      this.popupUnit = true;
      //给药单位
      this.$http
        .post(
          "http://localhost:9081/api/DiseaseGroupRela/JNT_DrugAttrList",
          {
            AttrType: 40
          },
          { emulateJSON: true }
        )
        .then((res) => {
           for (var i = 0; i < res.body.Data.length; i++) {
            sz[i] = res.body.Data[i].JntDrugsAttrName;
          }
          console.log(res);
          vm.Unit[0].values = sz;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    cancelUnit() {
      this.popupUnit = false;
    },
    yesBtnUnit() {
      this.popupUnit = false;
      let popupText = $("#showUnit .picker-item.picker-selected").html();
      let popupText1 = $.trim(popupText);
      $(".drugUnit").html(popupText1);
    },
    backBtnMsg() {
      $("#isShowMsg").hide();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.drug-use-msg {
  background: #fff;
  position: fixed;
  width: 100%;
  bottom: 0;
  top: 0;
  z-index: 9;
}
.drug-msg-btn {
  padding: 20px;
  text-align: center;
}
.drug-msg-btn .mu-raised-button:last-child {
  background: #0066ff;
  color: #fff;
}
.drug-msg-btn .mu-raised-button:last-child {
  color: #fff;
}
.drugUnit {
  position: absolute;
  z-index: 99;
  margin-top: -37px;
  right: 40px;
  color: rgba(0, 0, 0, 0.87);
}
.drugNum {
  position: absolute;
  z-index: 99;
  margin-top: -37px;
  right: 40px;
  color: rgba(0, 0, 0, 0.87);
}
.font-name-1 {
  font-size: 18px !important;
  font-weight: bold;
}
.drug-use-msg .mint-field-core {
  font-size: 14px;
}
.drug-use-msg .fa {
  position: absolute;
  z-index: 99;
  margin-top: -33px;
  right: 20px;
  color: rgba(0, 0, 0, 0.87);
}
.drug-use-msg .mint-field .mint-cell-title {
  width: 80px;
}
.drug-use-msg .mint-popup {
  width: 100%;
}
.bottom-header {
  padding-top: 3px;
}
.bottom-header button {
  background: transparent;
  border: none;
  color: #0265fe;
}
.bottom-header button:last-child {
  float: right;
}
.drug-use-msg .picker-item {
  font-size: 16px;
}
.drug-use-msg .picker-toolbar {
  height: 30px;
  background: #fff;
}
.drug-use-msg .mint-cell-wrapper {
  border-bottom: 1px solid #eee;
}
.msg-form {
  padding: 5px;
}
.drug-use-msg .picker {
  position: fixed;
  width: 100%;
  bottom: 0;
}
.drug-use-msg .picker-items {
  background: #eee;
}
.drug-use-msg .picker-center-highlight:before,
.drug-use-msg .picker-center-highlight:after {
  background-color: #ccc;
}
.drug-msg-btn .mu-raised-button {
  height: 40px;
  line-height: 40px;
}
</style>
