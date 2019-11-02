<template>
    <div>
        <heades></heades>
        <huodong_body></huodong_body>
        <foot></foot>
    </div>
</template>

<script>
import heades from "./head.vue" //引入子组件
import foot from "./foot"
import huodong_body from "./huodong_body"
export default {
    
    components:{ //注册子组件
        heades,
        foot,
        huodong_body
    }
}
</script>
<style scoped>

</style>


