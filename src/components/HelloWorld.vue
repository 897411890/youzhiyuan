<template>
    <div id="app">
        <el-carousel height="657px" direction="vertical" :autoplay="true" :interval="2000">
             <el-carousel-item >
                <div class="d1">
                    <heades class="t1"></heades>
                    <div class="d1_1">
                        <p class="p1">春田花花幼稚园</p>
                        <p class="p2">GEMBRYO SCHOOL</p>
                        <P class="p3">关注儿童生活 使儿童成为自生活的主人</P>
                    </div>
                </div>
            </el-carousel-item> 
            <!-- <el-carousel-item>
                <div class="d2">
                    <img src="../assets/1.png" alt="">
                </div>
            </el-carousel-item>
             <el-carousel-item>
                 <div class="d3">
                     <img src="../assets/2.png" alt="">
                 </div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="d4">
                    <img src="../assets/3.png" alt="">
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="d5">
                    <img src="../assets/4.png" alt="">
                </div>

            </el-carousel-item> -->
        </el-carousel>
    </div>
</template>

<script>
import heades from "./head1.vue"//引入子组件
  export default {
    data () {
      return {
        
      }
    },
    components:{ //注册子组件
        heades
    }
  }
</script>

<style scoped>
*{margin:0;padding:0}
img{position:absolute;}
#app{
     width:100%;
     height:100%;
     display:flex;
     flex-direction:column;/*容器，弹性盒元素布局以垂直显示，一列一列*/
}
.d1,.d2,.d3,.d4,.d5{
    width:100%;
    height:100%;
    position:relative;
}

.d1{
    background:url("../assets/0.jpg") no-repeat;
    background-size:100% 100%;
    color:#fff;
    font-size:60px;
}
.d1_1{
    position:absolute;
    top:45%;
    left:5%;
    font-family:'Comic Sans MS', cursive, sans-serif
}
.p1{
    font-weight:bolder;
    letter-spacing:20px;
    margin-left:10%;
}
.p2{
    margin-left:10%;
}
.p3{
    font-size:50px;
    margin-top:20px;
}
.d2{
    background:url("../assets/1.jpg");
    background-size:100%;
}
.d2 img{
    
    top:20%;
    left:30%;
}
.d3{
    background:url("../assets/2.jpg");
    background-size:100%;
}
.d3 img{
   
    top:20%;
    left:35%
}
.d4{
    background:url("../assets/3.jpg");
    background-size:100%;
}
.d4 img{
    top:20%;
    left:30%;
}
.d5{
    background:url("../assets/4.jpg");
    background-size:100%;
}
.d5 img{
    top:30%;
    left:10%;
}
</style>
