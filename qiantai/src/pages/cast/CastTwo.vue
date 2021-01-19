<template>
	<div>
		<p class="suss"><van-icon name="checked" size="100"  color="#09BB07"/></p>
		<p class="suss2">提交成功，工作人员会尽快处理您的投诉信息！</p>
		<van-row type="flex" justify="space-around">
		  <van-col span="22"><p><van-button color="#09BB07" to="Cast" size="large">确定</van-button></p></van-col>
		</van-row>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		beforeCreate () {
				document.querySelector('body').setAttribute('style', 'background-color:#F8F8F8')
		},
		beforeDestroy() {
		  document.querySelector('body').removeAttribute('style')
		},
	}
</script>

<style>
	body{
		background: #F8F8F8;
	}
	.suss{
		margin-top: 3.5rem;
		text-align: center;
	}
	.suss2{
		margin-top: 1.2rem;
		margin-bottom: 1.2rem;
		font-size: 1.3rem;
		text-align: center;
	}
	.van-button--default{
		font-size: 1.4rem;
		letter-spacing: 0.3rem;
	}
	.van-button--large {
		height: 40px;
	}
</style>
