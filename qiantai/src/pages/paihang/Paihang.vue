<template>
	<div>
    <h1>排行榜</h1>
    <Daojishi></Daojishi>
    <div  v-for="v,k in dataList" :key="k" @click="getXq(v.did)" class="bj">
      <van-row type="flex" justify="space-between" class="ranking" align="center">
        <van-col span="2">{{k+1}}</van-col>
        <van-col span="4" ><van-image width="50" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" round=""/></van-col>
        <van-col span="2">{{v.did}}</van-col>
        <van-col span="4">王发正</van-col>
        <van-col span="8">人气：<span>55555</span></van-col>
        <van-col span="3">
          <svg class="icon" aria-hidden="true" v-bind:class="{'C1':v.did==1}" v-if="(v.did>=1)&&(v.did<=oneSum)" font-size="10px">
            <use xlink:href="#icon-jinjiangbei"></use>
          </svg>
          <svg class="icon" aria-hidden="true" v-bind:class="{'C1':v.did==2}" v-if="(v.did>=Two)&&(v.did<=TwoSum)" font-size="10px">
            <use xlink:href="#icon-yinjiangbei"></use>
          </svg>
          <svg class="icon" aria-hidden="true" v-bind:class="{'C1':v.did==3}" v-if="(v.did>=Three)&&(v.did<=ThreeSum)" font-size="10px">
            <use xlink:href="#icon-tongjiangbei"></use>
          </svg>
          <!-- <van-icon class-prefix="icon" name="jinjiangbei" size="40"  class="iconfont" aria-hidden="true" v-bind:class="{'C1':v.did==1}" v-if="v.did==1"/> -->
          <!-- <van-icon class-prefix="icon" name="yinjiangbei" size="40"  class="iconfont"  v-bind:class="{'C2':v.did==2}" v-if="v.did==2"/> -->
          <!-- <van-icon class-prefix="icon" name="tongjiangbei" size="40"  class="iconfont"  v-bind:class="{'C3':v.did==3}" v-if="v.did==3"/> -->
         </van-col>
      </van-row
      <h4></h4>
      <p class="distance" v-if="!(v.did==1)">距离第<span>3</span>还差<i>239</i>人气</p>
    </div>
		<van-button type="primary" block @click="getMore()" :loading="isLoading" loading-type="spinner">点击加载</van-button>
		<p style="margin-bottom: 70px;"></p>
	</div>
</template>

<script>
	import {mapState} from 'vuex';
  // 引入倒计时
  import Daojishi from '@/components/Daojishi'

	export default {
    components: {
      Daojishi
    },
		data(){
			return {
        // 显示奖杯
        one:1,
        two:2,
        three:10,


				isLoading:false,
				start:0,
				len:10,

			}
		},
		computed:{
			...mapState(["dataList"]),
      oneSum(){
        return this.one
      },
      Two(){
      return this.one+1
      },
      TwoSum(){
        return this.one+this.two
      },
      Three(){
        return this.one+this.two+1
      },
      ThreeSum(){
        return this.one+this.two+this.three
      },
		},
		created(){
			if(this.dataList==""){
				this.$axios({
					url:"http://mengtion.vip/kfl-api/api/getproduct.php",
					method:"post",
				}).then((res)=>{
					//this.dataList=res.data.subjects
					//数据存放在vuex中
					this.$store.state.dataList=res.data.subjects
					console.log(res.data.subjects)
				})
			}
		},
    mounted(){
    },
		methods:{
			getMore(){
				this.isLoading=true
				let start=this.start+this.len
				this.start=start
				this.$axios({
					url:"http://mengtion.vip/kfl-api/api/getproduct.php",
					method:"post",
					data:"start="+this.start+"&length="+this.len
				}).then((res)=>{
					if(res.data.subjects.length>0){
					let oldData = this.$store.state.dataList
					let newData = res.data.subjects
					// 拼接数组
					this.$store.state.dataList=[...oldData,...newData]
					this.isLoading=false
					console.log(res)
					}else {
						this.isLoading=false
						// vant 框架提示框
						this.$toast("没有更多数据了")
					}
				})
			},
			//获取详情页
			getXq(did){
				this.$router.push({path:"/Xiangqing",query:{did}})
			}
		}
	}
</script>

<style>
  /* div样式 */
  *{
    margin:0;
    padding: 0;
  }
  .bj{
  	 background: linear-gradient(to right,#BA76ED,#F07790);
     border-bottom: 1px solid white;
  }
  /* 排行榜 */
  h1{
    text-align: center;
    color: white;
    font-size: 5rem;
    height: 8rem;
    line-height: 8rem;
    background: linear-gradient(to right,#BA76ED,#F07790);
  }
  /* 单个的列表布局 */
  .ranking{
    text-align: center;
    height: 8rem;
    color: white;
  }
  /* 距离样式 */
  .distance{
    text-align: right;
    color:#FF0F34 ;
    height: 2rem;
    font-size: 1rem;

  }
  .C1{
    color: #F5DA12;
  }
  .C2{
    color:#D6D6D8 ;
  }
  .C3{
    color:#F3C8B6 ;
  }
  /* 奖杯svg */
  .icon {
    width: 3em;
    height: 3em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
