<template>
    <div>父级组件:{{title}}</div>
    <!-- <TestModel :title="title" @update:title="title = $event"></TestModel> -->
    <TestModel v-model:title="title" :name="name"></TestModel>
    <TestProvideInject></TestProvideInject>
</template>
<script>
import { defineComponent, ref, provide } from "vue"
import TestModel from "../components/TestModel.vue"
import TestProvideInject from '../components/TestProvideInject.vue'
export default defineComponent({
    components:{
        TestModel,
        TestProvideInject
    },
    setup() {
        provide('location','here111')
        const title = ref('title')
        const name = ref('Bruce Li111')
        return {
            title,
            name
        }
    },
})
</script>
<style scoped>

</style>