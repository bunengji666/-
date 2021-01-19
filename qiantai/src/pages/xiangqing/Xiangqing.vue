<template>
<div class="finish-wrap">
    <van-nav-bar
          :title="item[0].name"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
    />
  <!-- 票数 -->
      <van-row type="flex" justify="space-around" class="praise">
        <van-col span="7">
          <p><van-icon name="friends" />编号</p>
          <h5>{{item[0].did}}</h5>
        </van-col>
        <van-col span="7">
          <p><van-icon name="good-job" />人气</p>
           <h5>{{item[0].price}}</h5>
        </van-col>
        <van-col span="7">
          <p><van-icon name="fire" />热度</p>
          <h5>500000</h5>
        </van-col>
      </van-row>
      <!-- <Daojishi></Daojishi> -->
      <Music></Music>
      <!-- 图片 -->
      <van-swipe class="my-swipe2" :autoplay="3000" indicator-color="white">
        <van-swipe-item><van-image width="100%" height=auto fit="cover" :src="'../../../static/img/'+item[0].img_lg"/></van-swipe-item>
        <van-swipe-item><van-image width="100%" height=auto fit="fill" :src="'../../../static/img/'+item[0].img_sm"/></van-swipe-item>
        <van-swipe-item><van-image width="100%" height=auto fit="contain" :src="'../../../static/img/'+item[0].img_lg"/></van-swipe-item>
      </van-swipe>
		<!-- <van-image
		  width="100%"
		  height="300px"
		  fit="contain"
		  :src="'../../../static/img/'+item[0].img_lg"
		/> -->
    <!-- 验证码 -->
    <van-dialog v-model="showOne" title="请输入验证码" :show-confirm-button="false">
      <el-form ref="from" :model="from" :rules="Rules" class="demo-ruleForm">
        <el-form-item prop="code">
          <el-input type="text" placeholder="请输入图形验证码" v-model="from.code" autocomplete="off"></el-input>
          <div @click="refreshCode">
            <!--验证码组件-->
            <Yanzm :identifyCode="identifyCode" :contentWidth="120" :contentHeight="40"></Yanzm>
            <!-- <s-identify :identifyCode="identifyCode" :contentWidth="120" :contentHeight="40"></s-identify> -->
          </div>
        </el-form-item>
      </el-form>
      <el-button type="primary">确 定</el-button>
    </van-dialog>
    <!-- 底部导航 -->
    <van-tabbar v-model="active" id="haibao">
      <van-tabbar-item icon="home-o" to="/shouye">首页</van-tabbar-item>
      <van-tabbar-item @click="submit()">
        <div class="trq">
         <van-icon name="like" size="30" :class="{'green':true,'red':red,'iconax':true}" />
         <p></p>
         人气
        </div>
      </van-tabbar-item>
      <van-tabbar-item icon="bar-chart-o" to="paihang">榜单</van-tabbar-item>
    </van-tabbar>
    <!-- 礼物海报按钮 -->
    <!-- <van-row type="flex" justify="space-around">
      <van-col span="22"><van-button type="primary" size="large" @click="submit()" round ><van-icon name="good-job" />加人气</van-button></van-col>
    </van-row> -->
    <van-row type="flex" justify="space-around">
      <van-col span="22"><van-button type="primary" size="large" @click="createPoster()" round ><van-icon name="share" />个人海报</van-button></van-col>
    </van-row>
    <van-row type="flex" justify="space-around">
      <van-col  span="22"><van-button type="primary" size="large" @click="submitOne(did)" round><van-icon name="gift" />礼物</van-button></van-col>
    </van-row>

    <van-dialog v-model="show" title="投票成功,您还可以给他投0票" confirmButtonText="我知道了" class="dialog">
      <van-image width=auto height="100%" fit="cover" src="../../../static/img/liwu.jpg" @click="liwu(did)" />
      <!-- <img src="https://img.yzcdn.cn/vant/apple-3.jpg" /> -->
    </van-dialog>


    <!-- 海报 -->
    <div>
      <van-dialog v-model="showTwo" :show-confirm-button="false" width="300" >
        <img :src="posterImg" width="100%" height="450" />
      </van-dialog>

          <!-- 海报html元素 -->
         <div class="posterHtml" v-if="xian" ref="posterHtml">
            <p class="refuel">为我加油吧</p>
            <i><img :src="'../../../static/img/'+item[0].img_lg" alt="" width="100%" class="tuPian"></i>
            <p></p>
            <p class="name">
              <span><b>{{item[0].did}}</b>号</span>
              <span>{{item[0].name}}</span>
            </p>
            <!-- 二维码 -->
            <div class="paycode">
            <!-- 放置二维码的容器,需要给一个ref -->
                <div id="qrcode" ref="qrcode">
                </div>
                <!-- <p>扫描二维码转发</p> -->
            </div>
         </div>
     <!-- <van-button type="primary" @click="createQrcode()" >主要按钮</van-button> -->
     </div>
    <!-- p -->
    <p style="height: 50px;background:  linear-gradient(to right,#BA76ED,#F15267);"></p>
</div>
</template>

<script>
  // 海报
  import QRCode from 'qrcodejs2'
  import html2canvas from 'html2canvas'
  // 引入倒计时
  import Daojishi from '@/components/Daojishi';
  // 引入模态框
  import Yanzm from "@/components/Yanzm";
  import { Dialog } from 'vant';
  // 引入音乐
  import Music from '@/components/Music';
 export default {
    // 海报


    components: {
      Daojishi,
      Music,
      Yanzm
    },
		created(){
			//接受id
      console.log(this.$store.state.dataList)
			let did = this.$route.query.did
			let item = this.$store.state.dataList.filter(v=>{
				if(v.did==did){
					return v;
				}
			})
			this.item=item
      this.did=item[0].did
			console.log(item)
      console.log(did)
		},
    mounted() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
      this.payOrder()
    },
		data(){
      // 验证码
      const validateCode = (rule, value, callback) => {
        if (this.identifyCode !== value) {
          this.from.code = "";
          this.refreshCode();
          callback(new Error("请输入正确的验证码"));
        } else {
         this.show=true
         this.showOne=false
         this.red=true
        }
      };
			return {
        did:"",
				item:"",
				active:0,
        red:false,//判断是否投票
        show:false,//显示图片礼物
        // 海报
        showTwo: false,
        posterImg: '', // 最终生成的海报图片
        xian:true,
        // 验证码
          showOne:false,
          Rules: {
            code: [
              { required: true, message: '请输入验证码', trigger: 'blur' },
              { validator: validateCode, trigger: 'blur' }
            ]
          },
          from: {},
          identifyCodes: '1234567890',  // 设置验证码为数字验证码，如果想要验证码为字母数字组合，可以加字母，如： identifyCodes: 'ABCD1234567890abcd'
          identifyCode: '',
        }
		},
	  methods: {
    onClickLeft(){
       this.$router.go(-1)
    },
      // 弹出图片
      submit(){
        this.showOne=true
      },
      // 礼物
      liwu(did){
        this.$router.push({path:"/Liwu",query:{did}})
      },
      // 礼物
      submitOne(did){
        	this.$router.push({path:"/Liwu",query:{did}})
      },
      // 生成海报
     // 展示二维码
     payOrder () {
       // 二维码内容,一般是由后台返回的跳转链接,这里是写死的一个链接
       this.qrcode = 'https://yuchengkai.cn/docs/frontend/#typeof'
       // 使用$nextTick确保数据渲染
       this.$nextTick(() => {
         this.crateQrcode()
       })
     },
     // 生成二维码
     crateQrcode () {
       this.qr = new QRCode('qrcode', {
         width: 150,
         height: 150, // 高度
         text: this.qrcode, // 二维码内容
         render: 'canvas', // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
         background: '#f0f',
         foreground: '#ff0,'
       })
       // console.log(this.qrcode)
     },
    createPoster() {
      setTimeout(()=>{
        this.showTwo=true
        this.xian=false
        const vm=this
        const obj=this.$refs.posterHtml
        html2canvas(obj, {
               backgroundColor: null,
               allowTaint:false,
               scale:2,logging:false,useCORS:true,
               width:obj.offsetWidth,
               height:obj.offsetHeight,
               x:0,
               y:0,
               scrollX:0,
               scrollY:0,
               // width:320,
               // height:400,
             }).then(canvas => {
               let dataURL = canvas.toDataURL("../../../static/img/png");
               vm.posterImg = dataURL;
             });
      },1000)
    },
    // 验证码

    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
    },
	}
};
</script>

<style>
  .finish-wrap{
    background: linear-gradient(to right,#BA76ED,#F15267);
  }
  /* 返回 */
  .van-nav-bar{
    background: linear-gradient(to right,#BA76ED,#F15267);
  }
  .van-nav-bar__title{
    color: white;
  }
	/* 音乐旋转 */
	@keyframes musicc{
	from{transform:rotateZ(0);}
	to{transform: rotateZ(360deg);}
	}
	.musiccc{
		position: fixed;
		z-index: 2;
		right: 2rem;
		top: 3rem;
	}
	.musicc{
		animation: musicc 2s linear infinite ;
	}
  /* 轮播图 */
  .my-swipe2 .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 10px;
      text-align: center;
      background-color: #39a9ed;
    }
  /* 人气按钮 */
 .trq{
   background:#F4D9FF ;
   border: 8px solid #8607BB;
   border-right-color:blue ;
   border-left-color:blue ;
   border-radius: 50%;
   width: 3rem;
   height: 3rem;
   text-align: center;
   margin-bottom: 2rem;
   animation: trq 0.5s linear infinite ;
 }
/* 爱心动画 */
  .green{
     color: #07C160;
  }
  .red{
    color: red;
  }
  .iconax{
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
  }
  @keyframes trq{
  from{transform:scale(1);}
  to{transform: scale(1.1);}
  }

  /* 按钮样式 */
  .van-button--large{
  	height: 40px;
  	margin-top: 0.6rem;
  }
  span[data-v-4d87dabb]{
  	color: white;
  	font-size: 1rem;
  	font-weight: bold;
  }

  /* 海报 */
.posterHtml{
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
    text-align: center;
    width: 100%;
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
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border: 2px solid #07C160;
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
  /* 海报二维码 */
  .paycode{
    margin-top: 0.5rem;
  }
  #qrcode{
    display: inline-block;
  }
</style>
