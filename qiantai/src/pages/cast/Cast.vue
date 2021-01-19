<template>
	<div>
		<p class="s1">请选择投诉该网页的原因:</p>
		<van-cell v-for="v,k in dataListt" :key="k" :title="v" is-link @click="describe(v,k)" to="castone" />
	</div>
</template>

<script>
export default{
	
		data() {
			return {
				message:"",
				dataListt:["网页包含欺诈信息 (如:假红包)",
				"网页包含违法信息",
				"网页可能包含谣言信息",
				"网页包含诱导分享/关注性质的内容",
				"网页包含虚假活动/票数不真实的内容",
				"网页包含虚拟支付信息",
				"网页包含不适当的内容对我造成骚扰",
				"网页包含有偿投票信息",
				"网页包含隐私泄露风险" ,
				
				]
			}
		},
		 beforeCreate () {
				document.querySelector('body').setAttribute('style', 'background-color:#F8F8F8')
		},
		beforeDestroy() {
		  document.querySelector('body').removeAttribute('style')
		},
		methods:{
			describe(v,k){
				this.$store.state.dataTs=v;
				console.log(k)
				console.log(this.$store.state.dataTs)
			},
			
		}
}
</script>

<style scoped>
	body{
		height: 100%;
		text-align: left;
	}
	.s1{
		margin:0.7rem 0 0.7rem 1rem;
		color: #999999;
	}
</style>
