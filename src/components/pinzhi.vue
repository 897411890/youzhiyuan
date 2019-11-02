<template>
    <div>
        <heades></heades>
        <pinzhi_body></pinzhi_body>
        <foot></foot>
    </div>
</template>

<script>
import heades from "./head.vue" //引入子组件
import foot from "./foot"
import pinzhi_body from "./pinzhi_body"
export default {
    
    components:{ //注册子组件
        heades,
        foot,
        pinzhi_body
    }
}
</script>
<style scoped>

</style>

