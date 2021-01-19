<template>
	<div class="finish-wrap">
    <!-- 音乐 -->
    <Music></Music>
		<!-- 活动按钮 -->
		<van-button type="warning" class="activity activityt" round to="activi" ><span>29.9元抢购</span></van-button>
		<!-- 轮播图 -->
		<van-row type="flex" justify="space-betw
		een">
		  <van-col span="24">
			  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			    <van-swipe-item>1</van-swipe-item>
			    <van-swipe-item>2</van-swipe-item>
			    <van-swipe-item>3</van-swipe-item>
			    <van-swipe-item>4</van-swipe-item>
			  </van-swipe>
		  </van-col>
		</van-row>
		<!-- 票数 -->
		<van-row type="flex" justify="space-around" class="praise">
		  <van-col span="7">
			  <p>参与人数</p>
			  <h5>37</h5>
		  </van-col>
		  <van-col span="7">
			  <p>累计人气</p>
			   <h5>50000</h5>
		  </van-col>
		  <van-col span="7">
			  <p>浏览总量</p>
			  <h5>500000</h5>
		  </van-col>
		</van-row>
    <!-- 倒计时 -->
     <Daojishi></Daojishi>
		<!-- 搜索框 -->
		<van-row type="flex" justify="space-between">
		  <van-col span="24">
			  <van-search class="search"
			    v-model="value"
			    show-action
			    shape="round"
			  background="#4fc08d"
			    placeholder="请输入姓名或编号"
			    @search="onSearch"
			  >
			    <template #action>
			  	<div @click="onSearch">搜索</div>
			    </template>
			  </van-search>
		  </van-col>
		</van-row>
		<!-- 参与选手 -->
		<van-row type="flex" justify="space-between"  flex-wrap="wrap" class="flex">
		  <van-col span="12" class="player" v-for="v,k in dataList" :key="k" @click="getXq(v.did)"  >
			 <p class="players"><van-tag  type="primary">{{v.did}}号</van-tag><van-tag  type="primary">{{v.price}}人气</van-tag></p>
			  <van-image
			  width="9rem"
			  height="12rem"
			  fit="cover"
			  :src="'../../../static/img/'+v.img_sm"
			/>
			<p><van-tag round type="primary">{{v.name}}</van-tag><van-button type="primary" round size="small">加人气</van-button></p>
		  </van-col>

		</van-row>
		<van-button @click="getMore" :loading='isLoading' type="primary" loading-type="spinner" block>点击加载</van-button>



		<p><van-image width="100" height="15" src="../../../static/img/finish.gif" /></p>
		<!-- p -->
		<p style="height: 50px;background:  linear-gradient(to right,#BA76ED,#F15267);"></p>
	</div>
</template>

<script>
	import {mapState} from 'vuex';
  import Daojishi from '@/components/Daojishi'
  import Music from '@/components/Music';
	export default {
  components:{
    Daojishi,
    Music
  },
	data() {
		return {
		  value:"",
		  isLoading:false,
		  start:0,
		  len:10,
		};
	 },
	 computed:{
		 ...mapState(["dataList"])
	 },
	 created(){
		 if(this.dataList == ""){
            this.$axios({
            url:"http://mengtion.vip/kfl-api/api/getproduct.php",
            method:"post",


            }).then((res)=>{
                //this.dataList = res.data.subjects;
                // 数据存放在 vuex 中
                this.$store.state.dataList = res.data.subjects
				 console.log(res.data.subjects)
         console.log(this.$store.state.dataList)
            })
        }
	 },
	methods:{
    // 搜索
    onSearch(){

    },
		// 加载更多
		 getMore(){

           this.isLoading = true

           let start = this.start+this.len
            this.start = start;
            this.$axios({
               url:"http://mengtion.vip/kfl-api/api/getproduct.php",
                method:"post",
                data:"start="+this.start+"&length="+this.len
            }).then(res=>{
                  // console.log(res)

                if(res.data.subjects.length >0){
                       let oldData = this.$store.state.dataList
                       let newData = res.data.subjects
                 // 拼接数组
                     this.$store.state.dataList = [...oldData,...newData]
                  this.isLoading = false
                } else{
                     this.isLoading = false
                     // vant 框架 提供 提示框
                     this.$toast("没有更多数据了!")
                }

            })
        },
		// 获取详情
			getXq(did){
        console.log(did)
				this.$router.push({path:"/Xiangqing",query:{did}})
			}
	},
	mounted(){
		if(this.musicOn){
			console.log(this.$refs.music)
			// this.$refs.music.play()
		}
		// console.log(33)
	}

}
</script>

<style >
	*{
		margin: 0;
		padding: 0;
	}
	.finish-wrap{
    height: 100%;
		text-align: center;
		 background: linear-gradient(to right,#BA76ED,#F15267);
	}
	/* 活动按钮 */
	@keyframes activityt{
	from{border: 0;}
	to{border: 3px solid #F74B4B;}
	}
	.activity{
		background: #F88000;
		position: fixed;
		bottom: 10rem;
		right: 0;
		z-index: 3;
		font-size: 1rem;
		font-weight:bold;
		letter-spacing: 0.3rem;
	}
	.activityt{
		animation: activityt 0.5s linear infinite ;
	}
	/* 轮播图 */
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  /* 人气 */
  .praise{
	  margin-top: 1rem;
  }
  .praise h5{
	  text-align: center;
	  color: white;
  }
  .praise p{
	  color: white;
	  text-align: center;
	  margin-bottom: 0.3rem;
  }
  /* 搜索框 */
  .search{
	  margin: 1rem;
  }
  /* 选手 */
  .flex{
	  flex-wrap: wrap;
  }
 /* .player{
	  position:relative ;
  } */
  .players{
	  position: relative;
	  top: 1rem;
	  z-index: 1;

  }
</style>
