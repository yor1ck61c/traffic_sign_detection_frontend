<template>
  <el-container class="container-style">
    <el-main>
      <el-row>
        <p class="headline-style">欢迎使用交通路标检测系统</p>
      </el-row>
      <el-row>
        <!-- 上传识别区 -->
        <!-- 整理代码：shift + alt + F -->
        <el-col :span="10" :offset="3">
          <p class="main-style">
            上传图片
            <input style="margin-left: 140px;" name="file" type="file" @change="uploadData"/>
          </p>
          <img :src="'data:image/png;base64,' + origin_img_url" alt="" style="width: 230px; height: 300px"/>
        </el-col>
        <!-- 结果区 -->
        <el-col  :span="10" :offset="1">
          <p class="main-style">识别结果: {{ img_res }}</p>
          <img :src="'data:image/png;base64,' + predict_img_url" alt="" style="width: 230px; height: 300px"/>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { handle_traffic_sign, upload_img } from "@/api";
import { ElMessage } from "element-plus";

export default {
  name: "App",
  components: {},
  data() {
    return {
      img_res: "",
      origin_img_url: "",
      predict_img_url: ""
    };
  },
  methods: {
    testRequest: function () {
      handle_traffic_sign().then((res) => {
        ElMessage({
          message: res.data,
        });
      });
    },
    uploadData(event) {
      var that = this
      event.preventDefault()
      var img = event.target.files[0]
      var formData = new FormData()
      formData.append("img", img)
      upload_img(formData).then((res) => {
        that.origin_img_url = res.data.origin_img_path
        that.predict_img_url = res.data.predict_img_path
        that.img_res = res.data.category
        alert(res.data.category)
      })
    },
  },
};
</script>

<style scoped>
.container-style {
  background: url("../src/img/sunset.jpg");
  width: 100%;
  height: 100%;
  position: absolute;
  margin-top: -20px;
  margin-left: -9px;
  background-size: 100% 100%;
}
.footer-style {
  width: 100%;
}
.headline-style {
  color: #ffffff;
  font-size: 90px;
  font-family: 等线 Light;
  margin-left: 13%;
  margin-top: 80px;
}

.main-style {
  color: #ffffff;
  font-size: 50px;
  font-family: 等线 Light;
  margin-top: 5px;
}
</style>

