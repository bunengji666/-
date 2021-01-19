<template>
	<van-row type="flex" justify="space-between">
	  <van-col span="22">
		  <van-tabbar v-model="active">
		  	<van-tabbar-item icon="home-o" to="/shouye">首页</van-tabbar-item>
		  	<van-tabbar-item icon="friends-o" to="/baoming">报名</van-tabbar-item>
		  	<van-tabbar-item icon="bar-chart-o" to="paihang">榜单</van-tabbar-item>
		  	<van-tabbar-item icon="award-o" to="jiangpin">奖品</van-tabbar-item>
		  </van-tabbar>
	  </van-col>
	</van-row>
</template>

<script>
	export default {
	  data() {
		return {
		  active: 0,
		};
	  },
	};
</script>

<style>
</style>
