<template>
    <div>
        <heades></heades>
        <jiaru_body></jiaru_body>
        <foot></foot>
    </div>
</template>

<script>
import heades from "./head.vue" //引入子组件
import foot from "./foot"
import jiaru_body from "./jiaru_body"
export default {
    
    components:{ //注册子组件
        heades,
        foot,
        jiaru_body
    }
}
</script>
<style scoped>

</style>


