/**
 * Created by gy on 2018/1/24.
 */
$(function () {
  var sss =1;

  function auto_height() {
    var h = document.documentElement.clientHeight - 92;
    var high = document.getElementById("chatBox-info");
    high.style.height = h + "px";
    document.getElementById("chatBox-info").style.height = document.documentElement.clientHeight - 92 + "px";
    var topHeight = $(".index-header").innerHeight();
    var bottomHeight = $(".index-footer").innerHeight();
    var totalHeight = $(window).height(); //页面整体高度
    $(".chatBox-info").css("height", totalHeight - topHeight - bottomHeight);
    var infoHeight = $(".chatBox-info").innerHeight();//聊天头部以下高度
    //中间内容高度
    $(".chatBox-content").css("height", infoHeight - 56);
    $(".chatBox-content-demo").css("height", infoHeight - 56);
    $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight);

  }

  auto_height();
  (window.onresize = function () {
    auto_height();
  })();

  //选择男

  /*$("#btn-send-man").click(function () {
   var textContent = $("#btn-send-man").html();
   $(".chatBox-content-demo").append("<div class=\"clearfloat sexId\">" +
   "<div class=\"right\"> <div class=\"chat-message\"> " + textContent + " </div> " +
   "<div class=\"chat-avatars\"><i class=\"mu-icon material-icons\">account_circle</i></div> </div> </div>")
   $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight
   );
   //发送隐藏按钮
   $(".choos-btn").hide();
   setTimeout(function () {
   $(".chatBox-content-demo").append(
   $("#ageBox").show());
   $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight)
   $(".chatBox-send").show()
   $('.index-footer').show();
   },1000)
   /!* $("#sendBtn").click(function () {
   var textAge = $(".div-textarea").val().replace(/[\n\r]/g, '<br>');
   if(textAge != ""){
   $(".chatBox-content-demo").append("<div class=\"clearfloat\">" +
   "<div class=\"right\"> <div class=\"chat-message\"> " + textAge + " </div> " +
   "<div class=\"chat-avatars\"><i class=\"mu-icon material-icons\">account_circle</i></div> </div> </div>" +
   "<div class=\"clearfloat\"></div>");
   $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight)
   $(".div-textarea").val("")
   $(".chatBox-send").hide();
   setTimeout(function () {
   $(".chatBox-content-demo").append($("#addDiagnosis").show())
   $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight)
   },1000)
   }

   })*!/

   });*/
  //选择女
  /* $("#btn-send-woman").click(function () {
   var textContent = $("#btn-send-woman").html();
   $(".chatBox-content-demo").append("<div class=\"clearfloat sexId\">" +
   "<div class=\"right\"> <div class=\"chat-message\"> " + textContent + " </div> " +
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
   /!*$("#sendBtn").click(function () {
   var textAge = $(".div-textarea").val().replace(/[\n\r]/g, '<br>');
   if(textAge != ""){
   $(".chatBox-content-demo").append("<div class=\"clearfloat\">" +
   "<div class=\"right\"> <div class=\"chat-message\"> " + textAge + " </div> " +
   "<div class=\"chat-avatars\"><i class=\"mu-icon material-icons\">account_circle</i></div> </div> </div>" +
   "<div class=\"clearfloat\"></div>");
   $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight)
   $(".div-textarea").val("")
   $(".chatBox-send").hide()
   }
   setTimeout(function () {
   if(textAge<="16"){
   $(".chatBox-content-demo").append($("#addDiagnosis").show())
   $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight)
   }else{
   $(".chatBox-content-demo").append(
   $("#conceive").show())
   $("#conceive-btn").show()
   $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight)
   }
   },1000)
   })*!/
   });*/
  //返回上一步
  $("#backAsk").click(function () {
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
        qu1.hide()
        qu2.hide()
        $('#drugSearch').css('pointer-events','auto')
        break;
      case "addItem":
        $(".chatBox-content-demo").append(qu4)
        qu1.hide()
        qu2.hide()
        $('#showMsg').css('pointer-events','auto');
        //返回之后用药信息清空
        $('#msg'+(sss-1)).html("")
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
  })
  //添加药品
  /*$("#NumberDrug").click(function () {
    var numSize = $(".fix-item div").length

    var a="<div class='clearfloat'> <div class='right'> <div class='chat-message'> ";
    for(var i = 0;i < numSize; i++) {
      a += $(".fix-item-span").children("span").eq(i).html()+"</br>";
    }
    a += " </div> <div class='chat-avatars'><i class='mu-icon material-icons'>account_circle</i></div> </div> </div>";
    $(".chatBox-content-demo").append(a);
    $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight);

    this.isList = false;
    setTimeout(function () {
      $(".chatBox-content-demo").append($("#addDrugMsg").show())
      $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight);
    }, 1000)
  })*/
  //搜索药品
  $(".mint-searchbar-cancel").click(function () {
    var drugText = $(".mint-searchbar-core").val();
    if (drugText != "") {
      $("#isShowSearch").hide()
      $(".chatBox-content-demo").append("<div class=\"clearfloat\">" +
        "<div class=\"right\"> <div class=\"chat-message p-text\"> " + drugText + " </div> " +
        "<div class=\"chat-avatars\"><i class=\"mu-icon material-icons\">account_circle</i></div> </div> </div>")
      $(".chatBox-content-demo").append($("#addUse").show())
      $(".chat-message>strong").html(drugText);
      $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight);
    }
  })
  //保存药品信息
  $("#save-drug-msg").click(function () {
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
          "<div class=\"right\"> <div class=\"chat-message save-drug-msg\" id='msg"+sss+"'> <span> "+ msg.msg1 + "</span></br>" + "用法：<span>" + msg.msg2 + " </span></br>" + "用量：<span>" + msg.msg3 + msg.unit1 + " </span></br>" + "每日次数：<span> " + msg.msg4 + msg.unit2 + "</span> </div> " +
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
        $('#showMsg').css('pointer-events','none')
        sss++;
      }
    }else{
      layer.msg('请输入正确信息');
      return false
    }
  })
  $("#isShowResult").click(function () {
    $(".index-footer").hide();
    for (var i= 1; i<sss; i++) {
      let mseUseDiv = "<div class='drugItem'><h5><span id='drugName"+i+"'></span>50mg*6袋/盒</h5>"+
        "<p><span>用法用量：每日<small id='everydayCount"+i+"'></small>，每次：<small id='everyNum"+i+"'></small>,<small id='useType"+i+"'></small></span></p>"+
        "<hr class=\"line-after\"><span class=\"icon-question fa fa-question-circle\"></span></div>"
      var textResult = $("#msg" + i).children("span")
      //判断上一个空的用药信息
      var textVal = $('#drugName'+(i-1)).html()
      if(textVal == ""){
        $('#drugName'+(i-1)).parent().parent().hide()
        $(".result-drug-use-det").append(mseUseDiv)
      }else{
        $(".result-drug-use-det").append(mseUseDiv)
      }

      for (var j = 0; j < textResult.length; j++) {
         $('#drugName'+i).html(textResult.eq(0).html());
         $('#everydayCount'+i).html(textResult.eq(3).html());
         $('#everyNum'+i).html(textResult.eq(2).html());
         $('#useType'+i).html(textResult.eq(1).html());
      }
    }


    layer.load();
    setTimeout(function(){
      layer.closeAll('loading');
    }, 1000);
/*    Indicator.open({
        text:"提交中..",
        spinnerType: 'triple-bounce'
      }
    );*/
    setTimeout(
      function () {
        $(".chatBox-content-demo").append(
          $("#levelItem").show(),
          $("#assDetails").show(),
          $("#evaluate").show(),
          $(".bottom-tip-box").show(),
         /* Indicator.close()*/
        );
        $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight);
      },1000
    )
  })
  //查询结果
  /*$("#isShowResult").click(function () {
    $.ajax(
      {
        type: "post",
        dataType: "json",
        url: "",
        async: false,
        data: {},//要发送的数据
        success: function (data) {
        },
        beforeSend: function (XMLHttpRequest) {

        },
        error: function (data) {
        }
      })

  })*/
  //重新用药审查
  $("#initQuesion").click(function () {
    $(".bottom-tip-box").hide();
    $("#nums").html("0");
    $(".fix-item").html("");
    $(".tab-box p span").removeClass("active");
    $('#showMsg').css('pointer-events','auto');
    $('#drugSearch').css('pointer-events','auto');
    $("#fixBox").hide();
    $(".index-footer").hide();
    $(".chatBox-content-demo").append($("#sexBox").show(), $("#choos-btn").show());
    $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight);
  })
})
//删除疾病
/*$(".fix-item").on("click ",function () {
  alert("1")
  var del = $(this).children("div").html()
  console.log(del)

  var nums = $(".fix-item").children().length;
  if(nums==0) {
    $("#fixBox").hide();
    $("#nums").html(nums)
  }else{
    $("#nums").html(nums)
  }
})*/
/*$(".fix-item-span").on("click",function(){
  console.log("11")
});*/

