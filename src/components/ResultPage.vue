<template>
  <div class="result-page">
    <div class="result-header">
      <p class="result-header-p1">药物审查编号：<span>1234567</span><span id="createdTime"></span></p>
      <p class="result-header-p2">性别：<span id="sexResult"></span>年龄：<span id="ageResult">26</span></p>
      <div class="level-icon"><span>Ⅳ</span>级</div>
      <div class="result-header-bottom">
        <div class="result-header-p3"><nobr>诊断结果：</nobr></div><div id="resultMsg"></div>
      </div>

    </div>
    <div class="result-item">
      <section class="result-msg">
        <h4><span>&nbsp</span>药品信息</h4>
        <section class="result-drug-use-det">
          <!--<div class="msgUse">
            <h5><span id="drugName">氨茶碱缓释片（阿咪康）</span>50mg*6袋/盒</h5>
            <p><span>用法用量：每日<small id="everydayCount"></small>，每次：<small id="everyNum"></small>,<small id="useType"></small></span></p>
            <hr class="line-after">
            <span class="icon-question fa fa-question-circle"></span>
          </div>-->
        </section>
      </section>
      <section class="result-msg">
        <h4><span>&nbsp</span>分析结果</h4>
        <mu-flexbox class="result-content">
          <mu-flexbox-item class="result-left"grow="1">
            <span class="fa fa-question-circle"></span>
          </mu-flexbox-item>
          <mu-flexbox-item class="result-right"grow="11">
            <p><strong>氨茶碱缓释片(阿咪康)</strong>不符合配伍禁忌规则，存在不合理用药的风险。</p>
          </mu-flexbox-item>
        </mu-flexbox>
        <mu-flexbox>
          <mu-flexbox-item class="result-left"grow="1">
          </mu-flexbox-item>
          <mu-flexbox-item class="result-right"grow="11">
            <h6 class="result-tip">
              知识贴：<span>配伍禁忌是指两种以上药物混合使用或药物制成 制剂时，发生体外的相互作用,引起不良反应</span>
            </h6>
          </mu-flexbox-item>
        </mu-flexbox>
      </section>
      <section class="result-msg">
        <h4><span>&nbsp</span>温馨提示</h4>
        <p class="bottom-tip">请联系家庭医生或者药师获得专业建议，避免用药风险。</p>
      </section>
    </div>
    <div class="result-bottom">
      <mu-raised-button @click="BackResult" label="返回" fullWidth/>
    </div>
  </div>
</template>

<script>
    export default {
        name: '',
        data () {
            return {
                msg: '',
              items:{

              }
            }
        },
      methods:{
        BackResult(){
          $("#isShowResultPage").hide()
        }
      }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.result-page{
  background: #eee;
  position: fixed;
  width: 100%;
  bottom: 0;
  top:0;
  overflow: auto;
  z-index: 9;
}
  .result-header{
    background: #fff;
    padding: 10px 15px ;
  }
  .result-header-p1{
    font-size: 10px;
    color: #a6a9ad;
    margin: 0;
  }
.result-header-p1 span:last-child{
  float: right;
}
.result-header-p2{
  font-size: 10px;
  color: #a6a9ad;
  margin: 5px 0;
}
.result-header-p2 span{
  color: #000;
  font-size: 15px;
  margin-right: 10%;
}
  .result-header-p3{
    font-size: 10px;
    color: #a6a9ad;
    margin: 0;
  }
.result-header-p3 span{
  color: #000;
  font-size: 15px;
}
  .result-header-bottom{
    width: 100%;
    display: inline-flex;
  }
  .level-icon{
    position: absolute;
    padding: 0 15px;
    border: 2px solid red;
    border-radius: 50%;
    transform: rotate(7deg);
    right: 15px;
    margin-top: -32px;
    color: red;
  }
.level-icon span{
  font-size: 22px;
  font-weight: b;
}
  .result-item{
    background: #fff;
    margin-top: 10px;
    padding: 15px 15px 100px 15px;
  }
.result-msg{
  margin-top: 10px;
}
.result-msg:first-child{
  margin-top: 0;
}
  .result-msg h4{
    margin: 0;
    font-size: 15px;
    font-weight: normal;
    border-bottom: 1px solid #eee;
    padding-bottom: 5px;
  }
.result-msg h4 span{
  background: #0066ff;
  margin-right: 10px;
}
.result-drug-use-det{
  padding: 10px 0;
}
  .result-drug-use-det h5{
    margin: 0;
    font-size: 14px;
    font-weight: normal;
  }
  .result-drug-use-det p{
    margin: 0;
    font-size: 12px;
    padding-top: 5px;
  }
.result-drug-use-det p span{
  border: 1px solid #eee;
  border-radius: 50px;
  padding: 2px 8px;
  color: #ccc;
  background: #fff;
  z-index: 2;
  position: relative;
}
.result-drug-use-det p small{
  font-size: 100%;
}
.line-after{
  border-top: .2px solid #eee;
  width: 90%;
  position: absolute;
  z-index: 1;
  margin-top: -10px;
  margin-left: 3px;
}
  .icon-question{
    color: red;
    position: absolute;
    right: 3%;
    margin-top: -16px;
    z-index: 3;
  }
  .icon-success{
    color: #8fc31f;
    position: absolute;
    right: 3%;
    margin-top: -16px;
    z-index: 3;
  }
  .result-left span{
    color: red;
  }
  .result-right{
    margin-left: 0;
  }
.result-right{
  padding-top: 0;
}
.result-content .result-right{
  padding-top: 10px;
}
.result-right p{
  margin: 0;
}
  .result-tip{
    background: #f2f2f2;
    margin: 0;
    padding: 5px;
    font-weight: normal;
    color: #666;
  }
  .bottom-tip{
    padding-left: 10px;
    margin-top: 10px;
  }
  .result-bottom{
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
  }
.result-bottom .mu-raised-button{
  height: 45px!important;
  background: #0066ff!important;
  color: #fff!important;
}
</style>
