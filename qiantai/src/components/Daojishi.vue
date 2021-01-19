<template>
  <!-- 倒计时 -->
  <van-row type="flex" justify="space-between" class="daojishi">
    <van-col span="24">
  	  <h3 class="h">活动结束倒计时</h3>
  	  <van-count-down :time="time"   @finish="finish">
  	    <template v-slot="timeData">
  	  	  <span class="block">{{ timeData.days }}</span>
  	  	  <span class="colon">天</span>
  	  	<span class="block">{{ timeData.hours }}</span>
  	  	<span class="colon">时</span>
  	  	<span class="block">{{ timeData.minutes }}</span>
  	  	<span class="colon">分</span>
  	  	<span class="block">{{ timeData.seconds }}</span>
  	  	<span class="colon">秒</span>
  	    </template>
  	  </van-count-down>
    </van-col>
  </van-row>
</template>

<script>
  export default{
    data(){
      return{
        time: 30 * 60 * 60 * 1000,
      }
    },
    methods:{
      finish() {
      Toast('倒计时结束');
      },
    }
  }
</script>

<style>
  /* 倒计时 */
  .daojishi{
    text-align: center;
    background: linear-gradient(to right,#BA76ED,#F07790);
    height: 6rem;
    line-height: 4rem;
  }
  .h{
    color: white;
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
  }
  .colon {
    display: inline-block;
    margin: 0 4px;
    color: white;
  }
  .block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #ee0a24;
  }
</style>
