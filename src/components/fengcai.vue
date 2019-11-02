<template>
    <div>
        <heades></heades>
        <fengcai_body></fengcai_body>
        <foot></foot>
    </div>
</template>

<script>
import heades from "./head.vue" //引入子组件
import foot from "./foot"
import fengcai_body from "./fengcai_body"
export default {
    
    components:{ //注册子组件
        heades,
        foot,
        fengcai_body
    }
}
</script>
<style scoped>

</style>

