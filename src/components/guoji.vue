<template>
    <div>
        <heades></heades>
        <guoji_body></guoji_body>
        <foot></foot>
    </div>
</template>

<script>
import heades from "./head.vue" //引入子组件
import foot from "./foot"
import guoji_body from "./guoji_body"
export default {
    
    components:{ //注册子组件
        heades,
        foot,
        guoji_body
    }
}
</script>
<style scoped>

</style>


