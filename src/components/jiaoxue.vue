<template>
    <div>
        <heades></heades>
        <jiaoxue_body></jiaoxue_body>
        <foot></foot>
    </div>
</template>

<script>
import heades from "./head.vue" //引入子组件
import foot from "./foot"
import jiaoxue_body from "./jiaoxue_body"
export default {
    
    components:{ //注册子组件
        heades,
        foot,
        jiaoxue_body
    }
}
</script>
<style scoped>

</style>

