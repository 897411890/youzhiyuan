<template>
    <div class="app">
        <div class="d1">
            <img src="../assets/zhuye.png" alt="">
            <router-link to="/"><a>首页</a></router-link>  
            <img src="../assets/arr-right1.png" alt="">         
           <router-link to="women"><a>校园风采</a></router-link>
        </div>
        <div class="d2">
            <img src="../assets/fengcai1.jpg" alt="">
            <img src="../assets/fengcai2.jpg" alt="">
        </div>
        <div class="d3">
            <img src="../assets/fengcai3.jpg" alt="">
            <img src="../assets/fengcai4.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

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
.d2,.d3{
    display:flex;
    justify-content: space-between
}
.d2 img{
    width:49.9%
}
.d3 img{
    width:49.9%;
    margin-top:0.5%
}

</style>
