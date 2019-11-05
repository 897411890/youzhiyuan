<template>
    <div class="app">
        <div class="d1">
            <img src="../assets/zhuye.png" alt="">
            <router-link to="/"><a>首页</a></router-link>  
            <img src="../assets/arr-right1.png" alt="">         
           <router-link to="jiaru"><a>加入春田</a></router-link>
        </div>
        <div class="d2">
            <el-row>
                <el-col :span="24">
                    <div class="d2_2">
                        <p class="p1">联系我们</p>
                        <p class="p2">CONTACT US</p>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="10">
                    <div class="d2_3">
                        <img src="../assets/jiaru.jpeg" alt="">
                        <hr style="padding:0;margin:0;">
                        <div class="d2_4">
                            <p class="p1">重庆市渝北区春田花花幼稚园</p>
                            <div class="d2_5">
                                <img src="../assets/dianhua.png" alt="">
                                <span>总部电话：010-58448572</span>
                            </div>
                            <div class="d2_5">
                                <img src="../assets/dizhi.png" alt="">
                                <span>总部地址：重庆市渝北区新华北路绿地中央广场1期1803号</span>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="14">
                    <div class="d2_6">
                        <div>
                            <p>加入春田</p>
                            <p>JOINING US</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<style scoped>

    .amap-demo {
      height: 300px;
    }

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
    background:url("../assets/jiaru.jpg");
    background-size:100%;
    position: relative;
    padding:0 5% 5% 5%;
}
.d2_2{
    text-align:center;
}
.d2_2 .p1{
    font-size:30px;
    font-weight:600;
}
.d2_2 .p2{
    font-size:20px;
    color:#674f4f
}
.d2_3 img{
    width:100%;
}
.d2_3{
    background-color:#0d3f40;
    color:#fff;
    margin:0;
    padding:0;

}
.d2_4{
    padding:3% 0% 3% 9%;
}
.d2_4 .p1{
    font-size:30px;
    font-weight: 600;
    /* padding:2%; */
    margin:0% 15% 0% 0%;
    border-bottom:1px dashed #fff;
}
.d2_5{
    margin-top:3%;
}
.d2_5 img{
    width:5%;
}
.d2_6{
    text-align:center;
    background:#fff;
    margin:0;
    padding:0;
}
.d2_6 p{
    margin:0;
}
</style>


 
