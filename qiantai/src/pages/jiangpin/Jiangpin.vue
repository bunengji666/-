<template>
 <div>
   <van-dialog v-model="show" :show-confirm-button="false" width="300" >
     <img :src="posterImg" width="100%" height="450" />
   </van-dialog>

       <!-- 海报html元素 -->
      <div class="posterHtml" v-if="xian" ref="posterHtml">
         <p class="refuel">为我加油吧</p>
         <i class="tuPian"></i>
         <p></p>
         <p class="name">
           <span><b>17</b>号</span>
           <span>汪孝乾</span>
         </p>
         <!-- 二维码 -->
        <div class="qrcode" ref="qrcode">
          <div id="qrcodeImg" ref="qrcodeImg" >

          </div>
        </div>
      </div>
  <van-button type="primary" @click="createQrcode()" >主要按钮</van-button>
  <van-button type="info" @click="createPoster()">生成海报</van-button>
  <p style="height: 50px;background:  linear-gradient(to right,#BA76ED,#F15267);"></p>
  </div>

</template>

<script>
import QRCode from 'qrcodejs2'
 import html2canvas from 'html2canvas'
  export default {
    data() {
      return {
        show: false,
        posterImg: '', // 最终生成的海报图片
        xian:true,
      }
    },
    methods: {
        createQrcode() {
          console.log("二维码")
          // 生成二维码
          const qrcodeImgEl = this.$refs.qrcodeImg
          qrcodeImgEl.innerHTML = ''
          let qrcode = new QRCode(qrcodeImgEl, {
            // width: 256,
            // height: 256,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
          })
          qrcode.makeCode()
        },
        createPoster() {
          this.show=true
          this.haiBao=true
          this.xian=false
           const vm=this
           const obj=this.$refs.posterHtml

        html2canvas(obj, {
               backgroundColor: null,
               allowTaint:false,
               scale:2,logging:false,useCORS:true,
               scrollX:0,
               scrollY:0,
               // width:320,
               // height:400,
             }).then(canvas => {
               let dataURL = canvas.toDataURL("../../../static/img/png");
               vm.posterImg = dataURL;
             });
        }
    }
  }
</script>
<style scoped="scoped" >
 .posterHtml{
    text-align: center;
    height: 29rem;
    background: no-repeat;
    background-image: url(../../../static/img/haibao2.jpg) ;
    background-size: 100% 100% ;
  }
  .refuel{
    color:#6A29FC;
    font-size: 2.5rem;
    font-weight: bold;
    padding-top: 1rem;
  }
  .tuPian{
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 1px solid red;
    display: inline-block;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
  }
  .name{
    display: inline-block;
    border-radius: 1rem;
    width: 12rem;
    background: #031BF7;
    height:2rem;
    line-height: 2rem;
    color: white;
  }
</style>
