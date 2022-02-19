<template>
    <div class="footer">
        <el-row>
            <el-col>
                <div style="text-align:center; margin-top: 20px">
                    <h2>Contact with {{ developer }}</h2>
                    <p>Email: {{ email }}</p>
                    <p>Github: <el-link type="default" v-bind:href="github">{{ github }}</el-link></p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data: function () {
            return {
                "developer": "yorick61c",
                "email": "1240371570@qq.com",
                "github": "https://github.com/yor1ck61c/",
            }
        }
    }
</script>

<style scoped>
    .footer{
        height: 200px;
        background: rgb(247, 251, 253);
    }
</style>