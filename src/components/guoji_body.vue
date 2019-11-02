<template>
    <div class="app">
        <div class="d1">
            <img src="../assets/zhuye.png" alt="">
            <router-link to="/"><a>首页</a></router-link>  
            <img src="../assets/arr-right1.png" alt="">         
           <router-link to="women"><a>国际视野</a></router-link>
        </div>
        <div class="d2">
            <img src="../assets/jiaoxue.png" alt="">
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
    background:url("../assets/guoji.jpg");
    background-size:100%;
    height:640px;
    position: relative;
}
.d2 img{
    position:absolute;
    top:30%;
    left:30%
}
</style>
