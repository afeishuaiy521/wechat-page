<template>
  <div class="success-page">
    <section class="success-icon">
      <img src="./../assets/img/success_icon.png">
      <section class="success-center">
        <p>老板回家过年了</p>
        <p>支付页面暂未开放</p>
        <p>点赞不收费哦~</p>
      </section>
    </section>
    <section class="success-bottom-btn">
      <p><span class="fa fa-check-circle"></span>评价提交成功</p>
      <mu-raised-button label="完成" @click="closeSuccess" class="model-no-btn"/>
    </section>
  </div>
</template>

<script>
    export default {
        name: '',
        data () {
            return {
                msg: ''
            }
        },
      methods:{
        closeSuccess () {
          $("#isShowSuccess").hide()

        },
      }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.success-page{
  background: #f4f4f4;
  position: fixed;
  width: 100%;
  bottom: 0;
  top:0;
  z-index: 99999;
}
  .success-icon{
    width: 120px;
    margin: 30% auto;
  }
.success-icon img{
  width: 100%;
}
.success-center{
  margin-top: 25%;
}
  .success-center p{
    margin: 0;
    color: #aaa;
    text-align: center;
  }
  .success-bottom-btn{
    text-align: center;
    position: relative;
  }
.success-bottom-btn p{
  margin: 0;
  color: #a6a9ad;
}
.success-bottom-btn p span{
  margin-right: 5px;
}
  .success-bottom-btn .mu-raised-button{
    height: 32px;
    color: #fff;
    background: #0066ff;
    width: 108px;
    margin-top: 5px;
  }
</style>
