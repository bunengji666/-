<template>
  <div>
    <!--音乐  -->
    <audio  ref="music" autoplay >
    	<source src="../../static/rizi.mp3" type="audio/mp3"/>
    	<!-- <source src="../../../static/smil.ogg" type="audio/ogg" /> -->
    </audio>
    <span :class="{musicc:musicOn,musiccc:musicOut}" @click="play()"><van-icon name="music-o" size="40"  /></span>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        musicOn:"true" ,//音乐
        musicOut:this.$store.state.musicOut,
      }
    },
    methods:{
      // 音乐
      play(){
      	// var musicOn=this.$store.state.musicOn
      	// console.log(musicOn)
      	this.musicOn=!this.musicOn
      	console.log(this.musicOn)
      	if(this.musicOn){
      		this.$refs.music.load()
      		this.$refs.music.play();
      		this.musicOn=this.musicOn
      	}else{
      		this.$refs.music.load()
      		this.$refs.music.pause();
      		this.musicOn=this.musicOn
      	}
      },
    },

  }
</script>

<style>
  /* 音乐旋转 */
  @keyframes musicc{
  from{transform:rotateZ(0);}
  to{transform: rotateZ(360deg);}
  }
  .musiccc{
  	position: fixed;
  	z-index: 2;
  	right: 2rem;
  	top: 3rem;
  }
  .musicc{
  	animation: musicc 2s linear infinite ;
  }
</style>
