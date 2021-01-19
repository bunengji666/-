<template>
  <div id="app">
    <Xia v-if="$route.meta.Xia"></Xia>
    <Tongzhi v-if="$route.meta.tongzhi" ></Tongzhi>
		<Tousu v-if="$route.meta.tousu" ></Tousu>
			<router-view/>
		<Tabbar v-if="$route.meta.keepAlive" />

  </div>
</template>

<script>
	// 调用Tabbar
	import Tabbar from '@/pages/Tabbar'
	// 调用投诉
	import Tousu from '@/components/Tousu'
  // 通知
  import Tongzhi from '@/components/Tongzhi'
  // 引入下落
  import Xia from '@/components/Xia'

export default {
  name: 'App',
	components:{//将导航组件放置在全局根组件当中
		Tabbar:Tabbar,
		Tousu,
    Tongzhi,
    Xia
	},
}
</script>

<style>

</style>
