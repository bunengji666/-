<template>
  <div class="finish-wrap">
    <van-row type="flex" justify="space-between" align="center" class="xq">
      <van-col span="4"><van-icon name="wap-home" size="30" color="white" @click="shouye()"/></van-col>
      <van-col span="12">
        <p><van-image width="100" height="100" :src="'../../../static/img/'+item[0].img_lg" round="" /></p>
        <p>{{item[0].name}}</p>
        <p>{{item[0].price}}</p>
        <p><span>给Ta送上一份礼物吧</span></p>
       </van-col>
      <van-col span="2" class="replay">
       <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <p>刷新次数: {{ count }}</p>
        </van-pull-refresh>
        <van-icon name="replay" />
        <p>刷新</p>
        <p>{{count}}</p> -->
       </van-col>
    </van-row>
    <!-- 礼物选区 -->
    <div class="beijing">
      <van-row type="flex" justify="space-around" align="center" class="lwOne">
        <van-col span="7" v-bind:class="{'xuanbj':tangBj}" @click="show(1)">
          <van-image width="4rem" height="4rem" round="" src="../../../static/img/tang.png" background="#C0A6F0"/>
          <p>棒棒糖</p>
          <p >￥{{two}}</p>
          <p v-if="tangBj" class="addRq">+<span>{{sumtenTicket}}人气</span></p>
        </van-col>
        <van-col span="7"  v-bind:class="{'xuanbj':qiqiuBj}" @click="show(2)">
          <van-image width="4rem" height="4rem" round="" src="../../../static/img/qiqiu.png" background="#C0A6F0"/>
          <p>气球</p>
          <p>￥{{five}}</p>
           <p v-if="qiqiuBj" class="addRq">+<span>{{sumtwentyTicket}}人气</span></p>
        </van-col>
        <van-col span="7" v-bind:class="{'xuanbj':xiongBj}" @click="show(3)">
          <van-image width="4rem" height="4rem" round="" src="../../../static/img/xiong.png" background="#C0A6F0"/>
          <p>泰迪熊</p>
          <p>￥{{ten}}</p>
           <p v-if="xiongBj" class="addRq">+<span>{{sumfiftyTicket}}人气</span></p>
        </van-col>
      </van-row>

      <van-row type="flex" justify="space-around" class="lwTwo">
        <van-col span="7" v-bind:class="{'xuanbj':paocheBj}" @click="show(4)">
          <van-image width="4rem" height="4rem" round="" src="../../../static/img/paoche.png" background="#C0A6F0"/>
            <p>超级跑车</p>
            <p>￥{{fifty}}</p>
          <p v-if="paocheBj" class="addRq">+<span>{{sumthreeTicket}}人气</span></p>
          </van-col>
        </van-col>
        <van-col span="7" v-bind:class="{'xuanbj':youlunBj}" @click="show(5)">
          <van-image width="4rem" height="4rem" round="" src="../../../static/img/youlun.png" background="#C0A6F0"/>
          <p>豪华邮轮</p>
          <p>￥{{OneHundred}}</p>
          <p v-if="youlunBj" class="addRq">+<span>{{sumfiveTicket}}人气</span></p>
        </van-col>
        <van-col span="7" v-bind:class="{'xuanbj':huojianBj}" @click="show(6)">
          <van-image width="4rem" height="4rem" round="" src="../../../static/img/huojian.png" background="#C0A6F0"/>
          <p>火箭升空</p>
          <p>￥{{TwoHundred}}</p>
          <p v-if="huojianBj" class="addRq">+<span>{{sumoneTs}}人气</span></p>
        </van-col>
      </van-row>
    </div>
    <!-- 数量区 -->
    <div class="nunBj">
      <van-row type="flex" justify="space-around">
      <van-col span="12">
       <p class="number">
         <span>数量</span>
         <svg class="iconOne minus" aria-hidden="true" @click="minus()"><use xlink:href="#icon-aijianfile"></use></svg>
         <i>{{count}}</i>
         <svg class="iconOne add" aria-hidden="true" @click="add()"><use xlink:href="#icon-jiajian11"></use></svg>
       </p>
       <p class="pay">支付：￥<i>{{totalPic(unitPrice)}}</i>元</p>
      </van-col>
        <van-col span="0"></van-col>
        <van-col span="10" class="ljsl"><van-button round color="linear-gradient(to right, #ff6034, #ee0a24)" size="large" to="shouye">立即送礼</van-button></van-col>
      </van-row>
    </div>



  </div>
</template>

<script>
  import { Toast } from 'vant';
  export default {
    data(){
        return{

          // // 刷新
          // count: 0,
          // isLoading: false,
          // 数据
          item:"",
          //人气
          tenTicket:10,
          twentyTicket :28,
          fiftyTicket:58,
          threeTicket:288,
          fiveTicket:588,
          oneTs:1288,
           // 数量
           count:1,
          //价格
          unitPrice:2,
          two:2,
          five:5,
          ten:10,
          fifty:50,
          OneHundred:100,
          TwoHundred:200,
          unitP:"",
          dataBj:[
            {BeiJ:true,unitPic:2,index:1},
            {BeiJ:false,unitPic:5,index:2},
            {BeiJ:false,unitPic:10,index:3},
            {BeiJ:false,unitPic:50,index:4},
            {BeiJ:false,unitPic:100,index:5},
            {BeiJ:false,unitPic:200,index:6}]
        };
      },
      computed: {
        tangBj(){
          return this.dataBj[0].BeiJ
        },
        qiqiuBj(){
          return this.dataBj[1].BeiJ
        },
        xiongBj(){
          return this.dataBj[2].BeiJ
        },
        paocheBj(){
          return this.dataBj[3].BeiJ
        },
        youlunBj(){
          return this.dataBj[4].BeiJ
        },
        huojianBj(){
          return this.dataBj[5].BeiJ
        },
        // 人气数量
        sumtenTicket(){
          return this.count*this.tenTicket
        },
        sumtwentyTicket(){
          return this.count*this.twentyTicket
        },
        sumfiftyTicket(){
          return this.count*this.fiftyTicket
        },
        sumthreeTicket(){
          return this.count*this.threeTicket
        },
        sumfiveTicket(){
          return this.count*this.fiveTicket
        },
        sumoneTs(){
          return this.count*this.oneTs
        },
        // 计算总价
        totalPic(){
          return function(value){
           return   this.count*value
          }
        }
      },
    created(){
      //接受id
      // console.log(this.$route.query)
      console.log(this.$store.state.dataList)
      console.log(this.$route.query.did)
      let did = this.$route.query.did
      let item = this.$store.state.dataList.filter(v=>{
        if(v.did==did){
          return v;
        }
      })
      this.item=item
      console.log(item)

      // var ByValue = this.dataBj.filter((y,k)=>{
      //     return y;
      // })
    },
    mounted(){
    },

    methods:{
      // 跳转到首页
      shouye(){
        this.$router.push({path:"/shouye"})
      },
      // 礼物选择
      show(Bj){
        // 背景加载
        this.count=1
        let item = this.dataBj.filter((y,k)=>{
            console.log(y)
            console.log(k)
            // console.log(y[g])
            y.BeiJ=false
            if(y.index==Bj){
              y.BeiJ=true
              this.unitPrice=y.unitPic
            // console.log(y.unitPic)

              // console.log(y[g])
            }

        })
      },
      // 加
      add(){
        this.count++
        if(this.count>=5){
          this.count=5
        }
      },
      // 减
      minus(){
        this.count--
        if(this.count<1){
          this.count=1
        }
      }


      // //刷新
      //  onRefresh() {
      //       setTimeout(() => {
      //         Toast('刷新成功');
      //         this.isLoading = false;
      //         this.count++;
      //       }, 1000);
      //       console.log(this.count)
      // },

    },
  }
</script>

<style>
  .finish-wrap{
    background: linear-gradient(to right,#BA76ED,#F15267);
  }
  .xq{
    padding-top: 1rem;
    color: white;
  }
  .xq span{
    color:#A8A6A7;
  }
  /* 刷新 */
  .replay{
    color: black;
  }
  .replay p{
    font-size: 0.2rem;
  }
  /* 礼物背景 */
  .beijing{
    background: linear-gradient(to right,#99B4ED,#E790BB);
    color: white;
  }
  /* 数量背景 */
  .numBj{
     background: linear-gradient(to right,#2EB3E9,#EF5469);
  }
  /* 钱的显示样式 */
  .addRq{
    color: red;
    background: white;
    margin-bottom: 0.1rem;
  }
  /* 选择背景 */
  .xuanbj{
    background: red;
  }
  .lwOne{
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
 /* background: linear-gradient(to right,#99B4ED,#E790BB); */

  }
  .lwTwo{
     /* background: linear-gradient(to right,#99B4ED,#E790BB); */
  }
  /* 数量加减 */
  .number{
    height: 3rem;
    line-height: 3rem;
    color: white;
    letter-spacing: 0.02rem;
  }
  .number>i{
    color: #1296DB;
    font-style: normal;
    display: inline-block;
    height: 1.5rem;
    line-height: 1.5rem;
    width: 1.5rem;
    background: white;
  }
  .minus{
  }
  .add{

  }
  /* 支付 */
  .pay{
    letter-spacing: 0.3rem;
    color: white;
    height: 3.1rem;
  }
  .pay>i{
    color: #1296DB;
    font-style: normal;
  }
  /* 立即送礼 */
  .ljsl{
    height: 6rem;
    line-height: 6rem;
  }
  /* svg加减 */
  .iconOne {
    width: 1em;
    height: 1em;
    vertical-align: -0.3em;
    font-size: 1.6rem;
    fill: currentColor;
    overflow: hidden;
  }
</style>
