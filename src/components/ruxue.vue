<template>
    <div>
        <heades></heades>
        <ruxue_body></ruxue_body>
        <foot></foot>
    </div>
</template>

<script>
import heades from "./head.vue" //引入子组件
import foot from "./foot"
import ruxue_body from "./ruxue_body"
export default {
    
    components:{ //注册子组件
        heades,
        foot,
        ruxue_body
    }
}
</script>
<style scoped>

</style>


