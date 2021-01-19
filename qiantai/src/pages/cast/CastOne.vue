<template>
	<div>
		<h2>投诉</h2>
		<p class="s1">详细描述<span><van-icon name="star" /></span></p>
		<van-field class="s2"
		  v-model="message"
		  rows="2"
		  autosize
		  type="textarea"
		  maxlength="200"
		  placeholder="请输入投诉描述"
		  show-word-limit
		/>
		<van-row type="flex" justify="space-around">
		  <van-col span="22"><van-button type="primary" size="large" @click="submit()" to="CastTwo">提交</van-button></van-col>
		</van-row>

	</div>
</template>

<script>
	export default{
		data(){
			return {
				message:""
			}
		},
		 beforeCreate () {
				document.querySelector('body').setAttribute('style', 'background-color:white')
		},
		beforeDestroy() {
		  document.querySelector('body').removeAttribute('style')
		},
		methods:{
			// 提交
			submit(){
				console.log(this.message)
				console.log(this.$store.state.dataTs)
			}
		}
}
</script>

<style scoped>
	/* body{
		background:#F8F8F8 ;
	} */
	h2{
		text-align: center;
		margin-top: 5rem;
	}
	.s1{
		margin:0.7rem 0 0.7rem 1rem;
		color: #999999;
		text-align: left;
	}
	.s2{
		background: #F6F6F6;
		text-align: left;
	}
  /* 提交 */
	.van-button--large{
		height: 40px;
		margin-top: 1.5rem;
	}
	span[data-v-4d87dabb]{
		color: white;
		font-size: 1rem;
		font-weight: bold;
		
	}
	span{
		color: red;
		font-size: 0.2rem;
	}
</style>
