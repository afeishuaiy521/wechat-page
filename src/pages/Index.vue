<template>
  <div class="index">
    <div class="chatBox-info"id="chatBox-info">
      <mu-content-block>
        <div class="chatBox-content-demo" id="chatBox-content-demo">

          <div class="clearfloat">
            <div class="left">
              <div class="chat-avatars"><img src="../assets/img/header-img.png"/></div>
              <div class="chat-message">
                欢迎使用【智能分析】服务，在分析的过程中，您提供的信息越详细，分析会更准确。您的用药安全我们全程护航！
              </div>
            </div>
          </div>
          <div class="clearfloat"v-show="false" id="sexBox">
            <div class="left">
              <div class="chat-avatars"><img src="../assets/img/header-img.png"/></div>
              <div class="chat-message">
                请选择您的性别
              </div>
            </div>
          </div>
          <div class="clearfloat"v-show="false" id="noResult">
            <div class="left">
              <div class="chat-avatars"><img src="../assets/img/header-img.png"/></div>
              <div class="chat-message">
                非常抱歉，系统没查询到“<span></span>”药物
                请确认药物名称输入是否正确，若名称无误，小德会尽快完善药品库，请您持续关注！
              </div>
            </div>
          </div>

          <div class="clearfloat"v-show="false" id="ageBox">
            <div class="left">
              <div class="chat-avatars"><img src="../assets/img/header-img.png"/></div>
              <div class="chat-message">
                请输入您的年龄
              </div>
            </div>
          </div>
          <div class="clearfloat"v-show="false" id="conceive">
            <div class="left">
              <div class="chat-avatars"><img src="../assets/img/header-img.png"/></div>
              <div class="chat-message">
                是否是孕妇
              </div>
            </div>
          </div>
          <div class="clearfloat"v-show="false" id="addDiagnosis">
            <div class="left">
              <div class="chat-avatars"><img src="../assets/img/header-img.png"/></div>
              <div class="chat-message">
                请添加您的诊断结果
                <div class="add-link"id="showList">
                  <a @click="isShowList">
                    <span><i class="fa fa-arrow-circle-o-right"></i></span>
                    添加疾病信息
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="clearfloat"v-show="false" id="addDrugMsg">
            <div class="left">
              <div class="chat-avatars"><img src="../assets/img/header-img.png"/></div>
              <div class="chat-message">
                请添加您要查询的药物
                <div class="add-link">
                  <a @click="isShowSearch"id="drugSearch">
                    <span><i class="fa fa-arrow-circle-o-right"></i></span>
                    添加药物信息
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="clearfloat"v-show="false" id="addUse">
            <div class="left">
              <div class="chat-avatars"><img src="../assets/img/header-img.png"/></div>
              <div class="chat-message">
                请输入<strong></strong>的用量用法及频次
                <div class="add-link">
                  <a @click="isShowMsg" id="showMsg" >
                    <span><i class="fa fa-arrow-circle-o-right"></i></span>
                    添加用药信息
                  </a>
                </div>
              </div>
            </div>
            <div class="left-bottom-tip">您提供的信息越详细，分析会更准确</div>
          </div>
          <div class="clearfloat"v-show="false" id="addItem">
            <div class="left">
              <div class="chat-avatars"><img src="../assets/img/header-img.png"/></div>
              <div class="chat-message">
                若要继续添加药物，请点击继续
                <div class="add-link-sub">
                  <a @click="isShowSearch">
                    <span><i class="fa fa-arrow-circle-o-right"></i></span>
                    添加药物
                  </a>
                </div>
                若无需添加药物，请确定提交
                <div class="add-link-sub">
                  <a id="isShowResult">
                    <span><i class="fa fa-arrow-circle-o-right"></i></span>
                    提交审查
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="clearfloat"v-show="false" id="levelItem">
            <div class="left">
              <div class="chat-avatars"><img src="../assets/img/header-img.png"/></div>
              <div class="chat-message">
                <p class="level-t">用药风险评估</p>
                <p class="level-p"><span>Ⅳ</span>级</p>
                <p class="level-p">为配伍禁忌风险</p>
              </div>
            </div>
          </div>
          <div class="clearfloat"v-show="false" id="assDetails">
            <div class="left">
              <div class="chat-avatars"><img src="../assets/img/header-img.png"/></div>
              <div class="chat-message">
                根据您提交的信息，智能助手分析已完成，请查看详情。
                <div class="add-link">
                  <a @click="isShowResultPage"class="blue-text">
                    <span><i class="fa fa-arrow-circle-o-right"></i></span>
                    分析详情
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="clearfloat"v-show="false" id="evaluate">
            <div class="left">
              <div class="chat-avatars"><img src="../assets/img/header-img.png"/></div>
              <div class="chat-message">
                您的支持和反馈是我们前进的动力。
                <div class="add-link">
                  <a @click="open"class="blue-text">
                    <span><i class="fa fa-arrow-circle-o-right"></i></span>
                    评价我们的分析
                  </a>
                </div>
              </div>
            </div>
          </div>
        <!--  <div class="clearfloat">
            <div class="right">
              <div class="chat-message">22222</div>
              <div class="chat-avatars"><i class="mu-icon material-icons">account_circle</i></div>
            </div>
          </div>
          <div class="clearfloat">
            <div class="right">
              <div class="chat-message">22222</div>
              <div class="chat-avatars"><i class="mu-icon material-icons">account_circle</i></div>
            </div>
          </div>
          <div class="clearfloat">
            <div class="right">
              <div class="chat-message">22222</div>
              <div class="chat-avatars"><i class="mu-icon material-icons">account_circle</i></div>
            </div>
          </div>
          <div class="clearfloat">
            <div class="right">
              <div class="chat-message">22222</div>
              <div class="chat-avatars"><i class="mu-icon material-icons">account_circle</i></div>
            </div>
          </div>-->
        </div>
      </mu-content-block>
    </div>
    <div class="choos-btn"v-show="false"id="choos-btn">
      <div class="man-btn">
        <button class="btn-send"value="男"id="btn-send-man" @click="chooseSex(true)">男</button>
      </div>
      <div class="woman-btn">
        <button class="btn-send"value="女"id="btn-send-woman" @click="chooseSex(false)">女</button>
      </div>
    </div>
    <div class="choos-btn"v-show="false"id="conceive-btn">
      <div class="conceive-btn">
        <button class="btn-conceive"value="已怀孕"id="Already" @click="choosecConceive(1)">已怀孕</button>
      </div>
      <div class="conceive-btn">
        <button class="btn-conceive"value="未怀孕"id="NotConceive" @click="choosecConceive(2)">未怀孕</button>
      </div>
      <div class="conceive-btn">
        <button class="btn-conceive"value="不确定"id="Uncertain" @click="choosecConceive(3)">不确定</button>
      </div>
    </div>
    <div class="chatBox-send"v-show="false">
      <input type="text" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/" class="div-textarea"id="div-textarea">
      <div class="send-btn-box">
        <button class="send-btn"@click="checkAge" id="sendBtn">发送</button>
      </div>
    </div>
    <div class="bottom-tip-box"v-show="false">
      <div class="send-btn-box">
        本次分析结束，如有疑问可再次<span id="initQuesion">用药审查</span>分析
      </div>
    </div>
    <index-footer></index-footer>
    <list v-show="isList" id='isShowList'></list>
    <search v-show="false" id="isShowSearch"></search>
    <drug-use-msg v-show="false" id="isShowMsg"></drug-use-msg>
    <result-page v-show="false" id="isShowResultPage"></result-page>
    <div class="model-page">
      <mu-dialog :open="dialog"  dialogClass="model-box"bodyClass="model-box" @close="close1">
        <section class="model-title">
          <mu-flexbox class="result-content">
            <mu-flexbox-item class="result-left"grow="2">
              <div class="model-icon">
                <img src="../assets/img/header-img.png"/>
              </div>
            </mu-flexbox-item>
            <mu-flexbox-item class="model-box-right"grow="10">
              <p>好德医已经为<span>1234567</span>位用户提供了用药审查服务。您的反馈和支持是我们前进的动力。</p>
            </mu-flexbox-item>
          </mu-flexbox>
        </section>
        <section class="model-box-tabs">
          <mt-navbar v-model="selected">
            <mt-tab-item id="smile"><i class="fa fa-smile-o"></i>有用</mt-tab-item>
            <mt-tab-item id="ungry"><i class="fa fa-frown-o"></i>无用</mt-tab-item>
          </mt-navbar>

          <!-- tab-container -->
          <mt-tab-container v-model="selected">
            <mt-tab-container-item id="smile">
              <mu-flexbox class="flower-send-first":gutter="6">
                <mu-flexbox-item class="flower-send"@click.native="flowerSend(1)">
                  <a>
                    <mu-flexbox :gutter="0">
                      <mu-flexbox-item class="flower-icon-1"grow="4">
                        <img src="../assets/img/flower_03.png"/>
                      </mu-flexbox-item>
                      <mu-flexbox-item class="flower-cion-right"grow="8">
                        <h5 id="send1">赠送花束</h5>
                        <p>￥2</p>
                        <h6 class="nobr-ellipsis">已收到<span>123444</span>份</h6>
                      </mu-flexbox-item>
                    </mu-flexbox>
                  </a>
                </mu-flexbox-item>
                <mu-flexbox-item class="flower-send"@click.native="flowerSend(2)">
                  <a>
                    <mu-flexbox :gutter="0">
                      <mu-flexbox-item class="flower-icon-2"grow="4">
                        <img src="../assets/img/flower_06.png"/>
                      </mu-flexbox-item>
                      <mu-flexbox-item class="flower-cion-right"grow="8">
                        <h5 id="send2">赠送锦旗</h5>
                        <p>￥5</p>
                        <h6 class="nobr-ellipsis">已收到<span>123444</span>份</h6>
                      </mu-flexbox-item>
                    </mu-flexbox>
                  </a>
                </mu-flexbox-item>
              </mu-flexbox>
              <mu-flexbox class="flower-send-first" :gutter="6">
                <mu-flexbox-item class="flower-send"@click.native="flowerSend(3)">
                  <a>
                    <mu-flexbox :gutter="0">
                      <mu-flexbox-item class="flower-icon-3"grow="4">
                        <img src="../assets/img/flower_14.png"/>
                      </mu-flexbox-item>
                      <mu-flexbox-item class="flower-cion-right"grow="8">
                        <h5 id="send3">赠送牌匾</h5>
                        <p>￥10</p>
                        <h6 class="nobr-ellipsis">已收到<span>123444</span>份</h6>
                      </mu-flexbox-item>
                    </mu-flexbox>
                  </a>
                </mu-flexbox-item>
                <mu-flexbox-item class="flower-send"@click.native="nextFree">
                  <a>
                    <mu-flexbox :gutter="0">
                      <mu-flexbox-item class="flower-icon-4"grow="4">
                        <img src="../assets/img/flower_11.png"/>
                      </mu-flexbox-item>
                      <mu-flexbox-item class="flower-cion-right"grow="8">
                        <h5>下次再送</h5>
                        <p>免费</p>
                      </mu-flexbox-item>
                    </mu-flexbox>
                  </a>
                </mu-flexbox-item>
              </mu-flexbox>
              <mu-flexbox>
                <mu-flexbox-item class="moder-textarea">
                  <textarea id="haveUse" placeholder="感谢小德" ></textarea>
                </mu-flexbox-item>
              </mu-flexbox>
              <div class="model-sub-btn">
                <mu-raised-button @click="close(true)" label="提交" class="save-model-btn"/>
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="ungry">
              <section class="model-no-have">
                <mu-raised-button label="没有解决问题" id="noQuestion1" @click="quesNo(1)" class="model-no-btn"/>
                <mu-raised-button label="系统故障" id="noQuestion2" @click="quesNo(2)"class="model-no-btn"/>
                <mu-flexbox class="no-textarea-box">
                  <mu-flexbox-item class="moder-textarea">
                    <textarea id="noUse" placeholder="有待提高！"rows="5"></textarea>
                  </mu-flexbox-item>
                </mu-flexbox>
              </section>
              <div class="model-sub-btn">
                <mu-raised-button @click="close(false)" label="提交" class="save-model-btn"/>
              </div>
            <!--  <mu-flat-button slot="actions"  @click="close(false)" label="提交1"/>-->
            </mt-tab-container-item>
          </mt-tab-container>
        </section>

      </mu-dialog>
    </div>
    <success-page v-show="false" id="isShowSuccess"></success-page>
  </div>

</template>

<script>
  import IndexHeader from "../components/IndexHeader";
  import IndexFooter from "../components/IndexFooter";
  import Search from "../components/Search";
  import List from "../components/List";
  import DrugUseMsg from "../components/DrugUseMsg"
  import ResultPage from "../components/ResultPage"
  import SuccessPage from "../components/SuccessPage"
  import { Toast } from 'mint-ui';
  import { Indicator } from 'mint-ui';
  import './../assets/js/layer'
  import './../assets/css/default/layer.css'
  import './../assets/js/chat'
  import './../assets/css/font-awesome.min.css'
    export default {
      created(){
        setTimeout(function () {
          $("#sexBox").show();
          $("#choos-btn").show();
        },1000)
      },
      components: {IndexHeader,IndexFooter,List,Search,DrugUseMsg,ResultPage,SuccessPage},
      name: 'index',
      data () {
        return {
          isList:false,
          dialog: false,
          selected: 'smile',
          type:"",
        }
      },
      methods: {
        chooseSex(bool){
            if(bool){
              var textContent = $("#btn-send-man").html();
              $(".chatBox-content-demo").append("<div class=\"clearfloat sexId1\">" +
                "<div class=\"right\"> <div class=\"chat-message sex-text\"> " + textContent + " </div> " +
                "<div class=\"chat-avatars\"><i class=\"mu-icon material-icons\">account_circle</i></div> </div> </div>");
              //发送隐藏按钮
              $(".choos-btn").hide();
              setTimeout(function () {
                $(".chatBox-content-demo").append(
                  $("#ageBox").show(),
                  $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight)
                )
                $(".chatBox-send").show();
                $('.index-footer').show();
              },1000);
            }else {
              var textContent = $("#btn-send-woman").html();
              $(".chatBox-content-demo").append("<div class=\"clearfloat sexId2\">" +
                "<div class=\"right\"> <div class=\"chat-message sex-text\"> " + textContent + " </div> " +
                "<div class=\"chat-avatars\"><i class=\"mu-icon material-icons\">account_circle</i></div> </div> </div>");
              //发送隐藏按钮
              $(".choos-btn").hide();
              setTimeout(function () {
                $(".chatBox-content-demo").append(
                  $("#ageBox").show(),
                  $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight)
                )
                $(".chatBox-send").show();
                $('.index-footer').show();
              },1000);
            }
        },
        checkAge(){
          let ageNum = $("#div-textarea").val();
          if(ageNum<0 || ageNum>120){
            Toast({
              message: '年龄在0-120之间,且不能为空',
              duration: 2000
            });
            return false
          }else if( ageNum == "" ){
            Toast({
              message: '年龄在0-120之间,且不能为空',
              duration: 2000
            });
            return false
          }
          else{
            var textAge = $(".div-textarea").val().replace(/[\n\r]/g, '<br>');
            var sexId1 = $(".sexId1 .chat-message").html()
            var sexId2 = $(".sexId2 .chat-message").html()
            if(ageNum != ""){
              $(".chatBox-content-demo").append("<div class=\"clearfloat\">" +
                "<div class=\"right\"> <div class=\"chat-message age-text\"> " + textAge + " </div> " +
                "<div class=\"chat-avatars\"><i class=\"mu-icon material-icons\">account_circle</i></div> </div> </div>" +
                "<div class=\"clearfloat\"></div>");
              $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight)
              $(".div-textarea").val("")
              $(".chatBox-send").hide()
            }
              if(textAge<"17" && sexId2){
                $(".chatBox-content-demo").append($("#addDiagnosis").show())
                $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight)
                return true
              }else if(sexId2){
                $(".chatBox-content-demo").append(
                  $("#conceive").show())
                $("#conceive-btn").show()
                $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight)
                return true
              }else if(sexId1) {
                $(".chatBox-content-demo").append($("#addDiagnosis").show())
                $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight)
                return true
              }
              else{
                setTimeout(function () {
                  $(".chatBox-content-demo").append($("#addDiagnosis").show())
                  $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight)
                },1000)
              }
          }
        },
        choosecConceive(type){
            //已怀孕
           if(type == "1"){
             $("#conceive-btn").hide()
             let text1 = $("#Already").html()
             $(".chatBox-content-demo").append("<div class=\"clearfloat\">" +
               "<div class=\"right\"> <div class=\"chat-message\"> " + text1 + " </div> " +
               "<div class=\"chat-avatars\"><i class=\"mu-icon material-icons\">account_circle</i></div> </div> </div>" +
               "<div class=\"clearfloat\"></div>");
             setTimeout(function () {
               $(".chatBox-content-demo").append($("#addDiagnosis").show())
               $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight)
             },1000)
             $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight)
           }
           //未怀孕
           else if(type == "2"){
             let text2 = $("#NotConceive").html()
             $("#conceive-btn").hide()
             $(".chatBox-content-demo").append("<div class=\"clearfloat\">" +
               "<div class=\"right\"> <div class=\"chat-message\"> " + text2 + " </div> " +
               "<div class=\"chat-avatars\"><i class=\"mu-icon material-icons\">account_circle</i></div> </div> </div>" +
               "<div class=\"clearfloat\"></div>");
             setTimeout(function () {
               $(".chatBox-content-demo").append($("#addDiagnosis").show())
               $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight)
             },1000)
             $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight)
           }
           //不确定
           else if(type == "3"){
             let text3 = $("#Uncertain").html()
             $("#conceive-btn").hide()
             $(".chatBox-content-demo").append("<div class=\"clearfloat\">" +
               "<div class=\"right\"> <div class=\"chat-message\"> " + text3 + " </div> " +
               "<div class=\"chat-avatars\"><i class=\"mu-icon material-icons\">account_circle</i></div> </div> </div>" +
               "<div class=\"clearfloat\"></div>");
             setTimeout(function () {
               $(".chatBox-content-demo").append($("#addDiagnosis").show())
               $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight)
             },1000)
             $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight)
           }
        },
        isShowList:function () {
          var numSize = $(".fix-item div").length
          if(numSize == 0){
            $("#isShowList").show()
          }
        },

        isShowSearch:function () {
          $("#isShowSearch").show()
          $('#showMsg').css('pointer-events','auto')
        },
        isShowMsg:function () {
          $("#isShowMsg").show()
          var drugText = $(".chat-message>strong").html();
          $(".mint-field-core").eq(0).val(drugText);
          $(".mint-field .mint-cell-value").eq(0).addClass("font-name-1")
        },
        //分析详情
        isShowResultPage(text){
          Date.prototype.Format = function (fmt) {
            var o = {
              "M+": this.getMonth() + 1,
              "d+": this.getDate(),
              "h+": this.getHours(),
              "m+": this.getMinutes(),
              "s+": this.getSeconds(),
              "q+": Math.floor((this.getMonth() + 3) / 3),
              "S": this.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
              if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
          }
          let date = new Date()
          let createdTime = date.Format("yyyy-MM-dd")
          $("#isShowResultPage").show()
          let sexText = $(".sex-text").html()
          let ageText = $(".age-text").html()
          let pText = $(".p-text").html()
          let drugText = $(".drug-text").html()
          const reg=/<br>/g;
          drugText=drugText.replace(reg,'、');
          drugText = drugText.substring(0, drugText.lastIndexOf('、'));
          let msg = {};
          msg.msg2 = $(".save-drug-msg span").eq(1).text();
          msg.msg3 = $(".save-drug-msg span").eq(2).text();
          msg.msg4 = $(".save-drug-msg span").eq(3).text();
          msg.unit1 = $(".drugUnit").html();
          msg.unit2 = $(".drugNum").html();
          $("#createdTime").html(createdTime)
          $("#sexResult").html(sexText)
          $("#ageResult").html(ageText)
          $("#resultMsg").html(drugText)
          $("#drugName").html(pText)
          $("#everydayCount").html(msg.msg4)
          $("#everyNum").html(msg.msg3)
          $("#useType").html(msg.msg2)

        },
        open () {
          this.dialog = true
        },
        close (bool) {
          if(bool){
              let haveUse = $("#haveUse").html()
            if(haveUse !=""){
              this.dialog = false
              $("#isShowSuccess").show()
            }else{
              Toast({
                message: '期待您的选择',
                duration: 2000
              });
              return false
            }

          }else {
            let noUse = $("#noUse").html()
            if(noUse !=""){
              this.dialog = false
              Toast({
                message: '感谢您的评价，我们会更加完善',
                duration: 2000
              });
            }else{
              Toast({
                message: '期待您的选择',
                duration: 2000
              });
              return false
            }
          }

        },
        close1 (){
          this.dialog = false
        },
        quesNo(type){
          let quse1 = $("#noQuestion1 .mu-raised-button-label").html()
          let quse2 = $("#noQuestion2 .mu-raised-button-label").html()
          if(type == 1){
            $("#noUse").html(quse1)
          }else if(type == 2){
            $("#noUse").html(quse2)
          }
        },
        flowerSend(type){
            let h5text1 = $("#send1").html()
            let h5text2 = $("#send2").html()
            let h5text3 = $("#send3").html()
            if(type == 1){
              $("#haveUse").html("感谢小德,"+h5text1)
            }else if(type == 2){
              $("#haveUse").html("感谢小德,"+h5text2)
            }else if(type == 3){
              $("#haveUse").html("感谢小德,"+h5text3)
            }
        },
        nextFree (){
          this.dialog = false
          Toast({
            message: '谢谢小德，辛苦了',
            duration: 4000
          });
        },
        /*isShowResult(){
          var textResult = $(".save-drug-msg").children("span")
          for (var i= 0; i<textResult.length; i++){
            console.log(textResult[i].innerText)
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

           /!* $.ajax({
              type: "post",
              dataType:"json",
              url: "",
              async:false,
              data: {},
              success: function(data){
                this.$indicator.close()
              },
              beforeSend:function(XMLHttpRequest){

              },
              error: function(data){
              }
            })*!/

        }*/
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .nobr-ellipsis{
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
  }
  .blue-text{
    color: #0066ff!important;
  }
  .chatBox-info .mu-content-block{
    padding: 16px 0 16px 8px;
  }
.chat-box{
  padding: 30px;
}
.conceive-btn{
  width: 33%;
  float: left;
  text-align: center;
}
  .conceive-btn .btn-conceive{
    border: none;
    border-radius: 50px;
    padding: 2px 14px;
    background: #fff;
    color: #0066ff;
  }
.choos-btn{
  position: absolute;
  bottom: 36px;
  width: 100%;
  padding: 10px 20px;
}
.choos-btn .man-btn,.choos-btn .woman-btn{
  float: left;
  width: 50%;
  text-align: center;
}
  .choos-btn  .btn-send{
    border: none;
    padding: 2px 34px;
    border-radius: 50px;
    background: #fff;
    color: #0066ff;
  }

.chatBox-send{
  width: 100%;
  background: #eee;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
}
.div-textarea{
  width: 70%;
  height: 36px;
  padding: 3px;
  outline: 0;
  border: none;
  background: #fff;
  font-size: 14px;
  line-height: 20px;
  word-wrap: break-word;
  overflow-x: hidden;
  overflow-y: auto;
  user-modify: read-write-plaintext-only;    /*纯文本*/
  -webkit-user-modify: read-write-plaintext-only;
  -moz-user-modify: read-write-plaintext-only;
  float: left;
}
.chatBox-send .send-btn{
  float: left;
}
  .send-btn{
    width: 30%;
    height: 36px;
    border: none;
    color: #fff;
    background: #0066ff;
  }
.chatBox-content-demo{
  width: 100%;
  overflow-y: scroll;
}

.clearfloat:after{
  display:block;
  clear:both;
  content:"";
  visibility:hidden;
  height:0
}
.clearfloat{
  zoom:1;
  margin: 10px 10px;
}
.clearfloat .right{
  float: right;
}
.clearfloat .right .chat-avatars{
  background: transparent;
  padding: 0;
}
.author-name{
  text-align: center;
  margin: 15px 0 5px 0;
  color: #888;
}

.clearfloat .chat-message{
  max-width: 80%;
  text-align: left;
  padding: 8px 12px;
  word-wrap:break-word;
  display: inline-block;
  position: relative;
}


.clearfloat .left .chat-message{
  background: #fff;
  min-height: 36px;
  border-radius: 0 6px 6px 6px;
}
.clearfloat .left .chat-message:before{
  position: absolute;
  content: "";
  top: 0;
  left: -9px;
  border-top: 0 solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 20px solid #fff;
}

.clearfloat .right{
  text-align: right;
}
.clearfloat .right .chat-message{
  background: #0066ff;
  color: #fff;
  text-align: left;
  min-height: 36px;
  border-radius: 6px 0 6px 6px;
}
.clearfloat .right .chat-message:before{
  position: absolute;
  content: "";
  top: 0;
  right: -9px;
  border-top: 0 solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 20px solid #0066ff;
}

.clearfloat .chat-avatars{
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #fff;
  vertical-align: top;
  overflow: hidden;
  padding: 3px 5px;
}
.clearfloat .chat-avatars>img{
  width: 30px;
  height: 34px;
}
.clearfloat .left .chat-avatars{
  margin-right: 10px;
}
.clearfloat .right .chat-avatars .mu-icon{
  color: #b7e0ea;
  font-size: 40px;
}
.clearfloat .right .chat-avatars{
  margin-left: 10px;
}
  /* 设置滚动条的样式 */
  ::-webkit-scrollbar {
      width:5px;
  }
  /* 滚动槽 */
  ::-webkit-scrollbar-track {
      border-radius:10px;
  }
  /* 滚动条滑块 */
  ::-webkit-scrollbar-thumb {
      border-radius:10px;
      background: #c9c9c9;
      -webkit-box-shadow:#c9c9c9;
  }
  ::-webkit-scrollbar-thumb:window-inactive {
      background: #eee
  }
  .add-link{
    border-top: 1px solid #cccccc;
    color: #cccccc;
    margin-top: 5px;
    padding-top: 5px;
  }
  .add-link a{
    color: #cccccc;
  }
  .left-bottom-tip{
    padding: 2px 2px 2px 60px;
    font-size: 10px;
    color: #a6a9ad;
  }
  .add-link-sub:first-child{
    border-bottom: 1px solid #ccc;
    margin-bottom: 2px;
    padding-bottom: 2px;
  }
  .add-link-sub a{
    color: #0066ff;
  }
  .level-t{
    margin-bottom: 0!important;
    text-align: center;
  }
  .level-p{
    margin: 0!important;
    text-align: center;
    color: red;
    font-size: 12px;
  }
  .level-p span{
    font-size: 24px;
  }
  .model-box.mu-dialog{
    border-radius: 12px;
    width: 87%;
  }
  .model-box.mu-dialog-body{
    padding: 0;
    border-radius: 12px 12px 0 0;
  }
  .model-title{
    background: #0066ff;
    padding: 10px;
  }
  .model-icon{
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 3px;
    background: #fff;
    vertical-align: top;
    overflow: hidden;
    padding: 3px 5px;
  }
  .model-icon>img{
    width: 30px;
    height: 34px;
  }
  .model-box-right p{
    color: #fff;
    font-size: 10px;
    margin: 0;
    line-height: 15px;
  }
  .model-box-right p span{
    color: yellow;
  }
  .model-box-tabs .fa{
    margin-right: 4px;
    font-size: 16px;
  }
  .model-box-tabs .mint-tab-item-label{
    font-size: 14px;
  }
  .model-box-tabs .mint-navbar .mint-tab-item.is-selected{
    border:none;
    margin-bottom: 0;
    background: #fff;
    color: #0066ff;
  }
  .model-box-tabs .mint-navbar .mint-tab-item{
    background: #eee;
    color: #bbb;
    padding: 10px 0;
  }
  .model-box-tabs .mint-tab-container-item{
    padding: 8px 8px 0 8px;
  }
  .flower-send{
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0 3px;
    margin-left: 6px;
    height: 57px;
  }
  .flower-send:hover{
    border: 1px solid #0066ff;
  }
  .flower-send-first{
    margin-bottom: 6px;
  }
  .flower-icon-1{
    text-align: center;
    vertical-align: middle;
    padding-top: 4px;
  }
  .flower-icon-1 img{
    width: 26px;
  }
  .flower-cion-right h5{
    margin: 0;
    color: #444;
  }
  .flower-cion-right p{
    margin: 0;
    color: red;
    font-size: 12px;
  }
  .flower-cion-right h6{
    margin: 0;
    font-weight: normal;
    color: #cccccc;
    font-size: 10px;
  }
  .flower-icon-2{
    text-align: center;
    vertical-align: middle;
    padding-top: 4px;
  }
  .flower-icon-2 img{
    width: 26px;
  }
  .flower-icon-3{
    text-align: center;
    vertical-align: middle;
    padding-top: 4px;
  }
  .flower-icon-3 img{
    width: 32px;
  }
  .flower-icon-4{
    text-align: center;
    vertical-align: middle;
    padding-top: 10px;
  }
  .flower-icon-4 img{
    width: 30px;
  }
  .moder-textarea textarea{
    width: 100%;
    border: none;
    border-radius: 4px;
    resize: none;
    background: #eee;
    color: #aaa;
    font-size: 14px;
    padding: 3px 10px;
  }
  .model-sub-btn{
    justify-content: center;
    padding-top: 0;
    text-align: center;
    margin-bottom: 6px;
  }
  .model-sub-btn .save-model-btn{
    background: #0066ff;
    border-radius: 4px;
    color: #fff;
    min-width: 108px;
    height: 34px;
    min-height: 34px;
  }
  .model-sub-btn .mu-raised-button-label{
    font-size: 16px;
    letter-spacing: 2px;
  }
  .model-no-have{
    padding-top: 5px;
  }
  .model-no-btn{
    color: #999;
  }
  .no-textarea-box{
    margin-top: 10px;
  }
  .bottom-tip-box{
    width: 100%;
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 3;
    height: 36px;
    line-height: 36px;
    text-align: center;
    color: #ababab;
    font-size: 13px;
  }
  .bottom-tip-box span{
    color: #0066ff;
  }
  .mint-toast{
    z-index: 10000000000!important;
  }
</style>
