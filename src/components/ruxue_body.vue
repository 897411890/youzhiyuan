<template>
    <div class="app">
        <div>
            <img style="width:100%;" src="../assets/ruxue.jpg" alt="">
        </div>
        <div class="d1">
            <img src="../assets/zhuye.png" alt="">
            <router-link to="/"><a>首页</a></router-link>  
            <img src="../assets/arr-right1.png" alt="">         
           <router-link to="ruxue"><a>入学申请</a></router-link>
        </div>
        <div class="d2"><!--背景图片 -->
            <div class="d2_2"> <!--白色文档-->
                <el-row>
                    <el-col :span="24">
                        <div class="d2_3">
                            <p class="p1">入学申请</p>
                            <p class="p2">APPLICATION FOR ADMISSION</p>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <div>
                            <div class="d2_4">
                                <img src="../assets/chun1.png" alt="">
                                <p>GEMBRYO SCHOOL</p>
                                <p>春田花花幼稚园</p>
                            </div>
                            <div class="d2_5">
                                <p class="p1">THANKS</p>
                                <p class="p2">我们的老师会第一时间联系您</p>
                            </div>
                            <div class="d2_6">
                                <img src="../assets/ruxue2.jpg" alt="">
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="d2_7">
                            <div>
                                <p>你所在的城市<img src="../assets/zhongyao.png" alt=""></p>
                                <el-radio-group v-model="radio1">
                                <el-radio-button label="上海"></el-radio-button>
                                <el-radio-button label="北京"></el-radio-button>
                                <el-radio-button label="广州"></el-radio-button>
                                <el-radio-button label="武汉"></el-radio-button>
                                <el-radio-button label="西安"></el-radio-button>
                                <el-radio-button label="重庆"></el-radio-button>
                                <el-radio-button label="青岛"></el-radio-button>
                                <el-radio-button label="贵阳"></el-radio-button>
                                </el-radio-group>
                            </div>
                            <div>
                                <p>你的姓名<img src="../assets/zhongyao.png" alt=""></p>
                                <input type="text">
                            </div>
                            <div>
                                <p>你是(爸爸/妈妈)<img src="../assets/zhongyao.png" alt=""></p>
                                <el-radio style="margin:0" v-model="radio2" label="1" border>爸爸</el-radio>
                                <el-radio v-model="radio2" label="2" border>妈妈</el-radio>
                            </div>
                            <div>
                                <p>联系电话<img src="../assets/zhongyao.png" alt=""></p>
                                <input type="text">
                            </div>
                            <div>
                                <p>孩子姓名<img src="../assets/zhongyao.png" alt=""></p>
                                <input type="text">
                            </div>
                            <div>
                                <p>孩子(性别)<img src="../assets/zhongyao.png" alt=""></p>
                                <el-radio style="margin:0" v-model="radio3" label="1" border>男孩</el-radio>
                                <el-radio v-model="radio3" label="2" border>女孩</el-radio>
                            </div>
                            <div>
                                <p>孩子年龄<img src="../assets/zhongyao.png" alt=""></p>
                                <input type="text">
                            </div>
                            <div>
                                <p>详细住址<img src="../assets/zhongyao.png" alt=""></p>
                                <!-- <input type="text"> -->
                                <el-input style="width:80%" type="textarea" autosize v-model="textarea1"></el-input>
                            </div>
                            <div>
                                <p>验证码<img src="../assets/zhongyao.png" alt=""></p>
                                <input type="text">
                            </div>
                            <div>
                                <button class="btn">提交</button>
                            </div>
                        </div>
                    </el-col>
                </el-row>

            </div>
        </div>
    </div>
</template>
<style scoped>
.app{
    background:#d9d9d9
}
.d1{
    padding:0.5% 6% 
}
.d1 a{
    color:#000;
    font-size:17px;
    text-decoration:none;
    font-family: 'Comic Sans MS', cursive, sans-serif;
}
.d2{
    background:url("../assets/ruxue1.jpg");
    background-size:100% 100%;
    display:flex;
    justify-content: center;
}
.d2_2{
    background:#fff;
    width:90%;
}
.d2_3{
    text-align:center;
}
.d2_3 .p1{
    font-size:30px;
    font-weight:600
}
.d2_3 .p2{
    font-size:20px;
    color:#6d6363
}
.d2_4,.d2_5,.d2_6{
    text-align:center;
    margin-top:10%;
}
.d2_4 p{
    font-family: 'Comic Sans MS', cursive, sans-serif;
    margin:0.5%;
    color:#6d6363;
    font-weight: 600;
}
.d2_5 p{
    margin:0;
}
.d2_5 .p1{
    font-size:50px;
    color:#d9d9d9
}
.d2_5 .p2{
    font-size:30px;
}
.d2_6 img{
    width:80%;
}
.d2_7{
    margin:10% 0%;
}
.d2_7 input{
    width:80%;
    height:30px;
    border-radius:5%;
    border:1px solid #d9d9d9;
}
.btn{
    width:80%;
    background-color:#0d3f40;
    border:none;
    border-radius:2%;
    color:#fff;
    padding:2%;
    margin-top:2%
}
.d2_7 button:hover{
    background-color:#ff5722;
    cursor:pointer
}
</style>
<script>
export default {
    data(){
        return{
            radio1: '',
            radio2: '',
            radio3:'',
            textarea1:'',
        }
    }
}
</script>
