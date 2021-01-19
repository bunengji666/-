<template>
  <div>
    <!-- 二维码弹框 -->
    <!-- 我的二维码是在弹框里,使用的话只需要给一个装二维码的元素就可以 -->
    <el-button type="primary" @click="payOrder">生成二维码</el-button>
    <el-dialog
    width="30%"
    @close="closeCode"
    :visible.sync="innerVisible"
    append-to-body>
    <div class="paycode">
    <!-- 放置二维码的容器,需要给一个ref -->
        <div id="qrcode" ref="qrcode"></div>
    </div>
    </el-dialog>
  </div>
</template>
<script>
import QRCode from 'qrcodejs2'; // 引入qrcode
export default {
  data(){
    return {
      innerVisible:false
    }
  },
  methods: {
    // 展示二维码
    payOrder () {
      this.innerVisible = true
      // 二维码内容,一般是由后台返回的跳转链接,这里是写死的一个链接
      this.qrcode = 'https://yuchengkai.cn/docs/frontend/#typeof'
      // 使用$nextTick确保数据渲染
      this.$nextTick(() => {
        this.crateQrcode()
      })
    },
    // 生成二维码
    crateQrcode () {
      this.qr = new QRCode('qrcode', {
        width: 150,
        height: 150, // 高度
        text: this.qrcode, // 二维码内容
        render: 'canvas', // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
        background: '#f0f',
        foreground: '#ff0,'
      })
      // console.log(this.qrcode)
    },
    // 关闭弹框,清除已经生成的二维码
    closeCode () {
      this.$refs.qrcode.innerHTML = ''
    }
  }
};
</script>

<style >
</style>
