<template>
    <div>
        <heades></heades>
        <women_body></women_body>
        <foot></foot>
    </div>
</template>

<script>
import heades from "./head.vue" //引入子组件
import women_body from "./women_body"
import foot from "./foot"
export default {
    
    components:{ //注册子组件
        heades,
        women_body,
        foot
    }
}
</script>
<style scoped>

</style>

