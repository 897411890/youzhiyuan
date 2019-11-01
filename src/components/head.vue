<template>
    <div>
        <div class="d">
            <div class="d1">
                <img src="../assets/chun.png">
                <div style="text-align:center">
                    <p>GEMBRYO SCHOOL</p>
                    <p>春田花花幼儿园</p>
                </div>
            </div>
            <div class="d2">
                <ul>
                    <li><a href="">首页</a></li>
                    <li><a href="">关于我们</a></li>
                    <li><a href="">校园风采</a></li>
                    <li><a href="">品质服务</a></li>
                    <li><a href="">教学体系</a></li>
                    <li><a href="">国际视野</a></li>
                    <li><a href="">新闻活动</a></li>
                    <li><a href="">入学申请</a></li>
                    <li><a href="">加入春田</a></li>
                </ul> 
            </div>
        </div>
    </div>
</template>
<style scoped>
.d{
    display:flex;
    justify-content: space-between;
}
.d1{
    font-size:10px;
    margin-top:2%;
    margin-left:5%;
    display:flex;
}
.d1 img{
    width:20%;
    height:100%; 
}
.d1 div p{
    font-size:15px;
    margin:0px 5px;
    font-family:'Comic Sans MS', cursive, sans-serif;
    font-weight:600;
}
.d2{
    margin-right:5%
}
.d2 a{
    font-size:17px;
    color:#fff;
    text-decoration:none;
    font-family: 'Comic Sans MS', cursive, sans-serif;
    font-weight:600;
}
.d2  a:hover{
    font-size:18px;
}
.d2 ul{
    display:flex;
    list-style: none;
    margin:0;
}
 ul li{
    margin-right: 10px;
} 
</style>

