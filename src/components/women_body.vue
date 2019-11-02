<template>
    <div class="d1">
        <div class="d2">
            <img src="../assets/zhuye.png" alt="">
            <router-link to="/"><a>首页</a></router-link>  
            <img src="../assets/arr-right1.png" alt="">         
           <router-link to="women"><a>关于我们</a></router-link>
        </div>
        <div class="d3">
            <img  src="../assets/women1.png" alt="">
        </div>
    </div>
</template>
<style scoped>
.d1{
    background:#d9d9d9
}
.d2{
    padding:0.5% 6%;
}
.d2 a{
    color:#000;
    font-size:17px;
    text-decoration:none;
    font-family: 'Comic Sans MS', cursive, sans-serif;
}
.d3{
     background:url("../assets/women.png");
    background-size:100%;
    height:640px;
    position:relative;
}
.d3 img{
    position:absolute;
    top:10%;
    left:10%;
}

</style>
