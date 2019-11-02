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
                <router-link to="/"><a>首页</a></router-link>
                <router-link to="women"><a>关于我们</a></router-link>
                <router-link to="fengcai"><a>校园风采</a></router-link>
                <router-link to="pinzhi"><a>品质服务</a></router-link>
                <router-link to="jiaoxue"><a>教学体系</a></router-link>
                <router-link to="guoji"><a>国际视野</a></router-link>
                <router-link to="huodong"><a>新闻与活动</a></router-link>
                <router-link to="women"><a>入学申请</a></router-link>
                <router-link to="women"><a>加入春天</a></router-link>
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
    height:90%
}
.d1 img{
    width:20%;
    height:100%; 
}
.d1 div p{
    font-size:15px;
    color:#fff;
    margin:0px 5px;
    font-family:'Comic Sans MS', cursive, sans-serif;
    font-weight:600;
}
.d2{
    margin-right:5%;
    
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

</style>

