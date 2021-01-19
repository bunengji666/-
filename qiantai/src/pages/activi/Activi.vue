<template>
	<div class="finish-wrap">
    <van-image width="100%" height=auto src="https://img.yzcdn.cn/vant/cat.jpeg" />
    <Daojishi></Daojishi>
    <Music></Music>
    <!-- 名单 -->
    <h2>你的<span>2185</span>w位好友已抢购</h2>
    <van-notice-bar  :scrollable="false" class="height">
      <van-swipe
        vertical
        class="notice-swipe"
        :autoplay="3000"
        :show-indicators="false"
      >
        <van-swipe-item>
          <p>内容 1</p>
          <p>内容 2</p>
          <p>内容 3</p>
         </van-swipe-item>
        <van-swipe-item>
          <p>内容 4</p>
          <p>内容 5</p>
          <p>内容 6</p>
         </van-swipe-item>
        <van-swipe-item>
          <p>内容 7</p>
          <p>内容 8</p>
          <p>内容 9</p>
         </van-swipe-item>
      </van-swipe>
    </van-notice-bar>
		<!-- 返回投票 -->
		<van-button type="warning" class="activity activityt" round to="shouye" ><span>最佳人气</span></van-button>

    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
	</div>
</template>
<script >

  import Music from '@/components/Music';
  // 引入倒计时

  import Daojishi from '@/components/Daojishi'
	export default{


    created() {
    },
    components:{
      Music,
      Daojishi
    },
		data(){
			return {
				item:"",
				active:0,

			}
		},

    mounted() {
    },
    methods:{
      onSubmit(){

      }
    }
	}
</script>

<style scoped="scoped">
  .finish-wrap{
    height: 100%;
  	text-align: center;
  	 background: linear-gradient(to right,#BA76ED,#F15267);
  }
	/* 最美人气 */
	@keyframes activityt{
	from{border: 0;}
	to{border: 3px solid #F74B4B;}
	}
	.activity{
		background: #03F56E;
		position: fixed;
		bottom: 10rem;
		right: 0.1rem;
		z-index: 3;
		font-size: 1rem;
		font-weight:bold;
		font-family: "book antiqua";
		letter-spacing: 0.3rem;
	}
	.activityt{
		animation: activityt 0.5s linear infinite ;
	}
  /* 滚动 */
  .height{
    height: 120px;
  }
   .notice-swipe {
      height: 120px;
      /* line-height: 80px; */
    }
</style>
