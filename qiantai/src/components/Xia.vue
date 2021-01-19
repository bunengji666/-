<template >
  <div></div>
</template>

<script>
  new Effect({
      //特效图片，多张图片时传入数组，单个图片时传入字符串
      effectUrl : ["../../../static/images/a1.png"],
      //特效旋转，1/true为旋转，0/false为不旋转
      rotate : 1,
      //特效方向，left/right/up/down
      direction : "up"
  });
   import "../../static/xialuojs/Effect.js"
   import "../../static/xialuojs/EffectItem.js"
  export default{
  }
</script>

<style>
</style>
