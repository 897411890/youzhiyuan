<template>
    <div class="d" >
        <div class="t1">
            <div class="d1">
                <p class="p1">HELPFUL LINKS</p>
                <div class="d1_1">
                <div>
                    <p><router-link to="women">关于我们</router-link></p>
                    <p><router-link to="fengcai">校园风采</router-link></p>
                    <p><router-link to="pinzhi">品质服务</router-link></p>
                </div>
                <div>
                    <p><router-link to="jiaoxue">教学体系</router-link></p>
                    <p><router-link to="guoji">国际视野</router-link></p>
                    <p><router-link to="huodong">新闻与活动</router-link></p>
                </div>
                <div>
                    <p><router-link to="women">入学申请</router-link></p>
                    <p><router-link to="women">加入春天</router-link></p>
                </div>
                </div>
            </div>
            <div class="d2">
                <div class="d2_2">
                    <img src="../assets/chun.png">
                    <div style="text-align:center">
                        <p>GEMBRYO SCHOOL</p>
                        <p>春田花花幼儿园</p>
                    </div>
                </div>
                <p class="p2">关注儿童生活 使儿童成为自生活的主人</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.d2{
    margin:0 auto;
    /* text-align: right */
}
.d2_2{
    display:flex;
    margin-left:45%
}
.d2_2 img{
    width:20%;
    height:20%;
    margin-top:3%
}
.d2_2 p{
    font-weight: 500;
    font-family:'Comic Sans MS', cursive, sans-serif;
}
.d2 .p2{
    font-size:25px;
    font-family:'Comic Sans MS', cursive, sans-serif;
    margin-left:20%;
    margin-top:2%
}
.d{
    background:#0d3f40;
    padding:5%
}
.t1{
    display:flex;
    justify-content: space-between;
    color:#fff;
}
.d1{
    width:50%
}
.d2{
    width:50%
}
.d1 .p1{
    font-size:25px;
    font-weight: 600;
    margin:1% 1%;
}
.d1_1{
    display:flex;
}
.d1_1 div{
    width:15%
}
 .d1_1 a{
    text-decoration:none;
    color:#fff;
    margin:0% 5%
}
.d1_1 a:hover{
    color:#fdc
}

</style>
