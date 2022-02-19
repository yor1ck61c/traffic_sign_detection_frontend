<template>
  <el-container class="container-style">
    <el-main>
      <p style="color: #ffffff; font-size: 90px; font-family:等线 Light; text-align:center; margin-top: 80px">欢迎使用交通路标检测系统</p>
      <el-button type='primary' @click="testRequest()">测试按钮</el-button>
    </el-main>
    <el-footer class="footer-style">
      <!-- <Footer/> -->
    </el-footer>
  </el-container>
</template>

<script>
// import Footer from './components/Footer.vue'
import { handle_traffic_sign } from '@/api'
import { ElMessage } from 'element-plus'

export default {
  name: 'App',
  components: {
    // Footer
  },
  data() {
    return {
    }
  },
  methods: {
    testRequest: function() {
      handle_traffic_sign().then((res) => {
        ElMessage({
          message: res.data
        })
      })
    },
    // testRequest: function(){
    //   handle_traffic_sign().then((res) => {
    //     alert(res)
    //   })
    // }
  }
}
</script>

<style scoped>
.container-style{
  background: url("../src/img/sunset.jpg");
  width: 100%;
  height: 120%;
  position:absolute;
  margin-top: -20px;
  margin-left: -9px;
  background-size:100% 100%;
}
.footer-style{
  width: 100%;
}
</style>

