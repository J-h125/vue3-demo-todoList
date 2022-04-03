<template>
    <div>
        count:{{count}}
    </div>
    <button @click="add">增加</button>
    <button @click="asyncAdd">异步增加</button>
</template>
<script setup>
    import { computed } from 'vue'
    import { useStore } from 'vuex';
    const store = useStore()
    const count = computed(()=>store.state.count)
    function add(){
        store.commit('add')
    }
    function asyncAdd(){
        store.dispatch('asyncAdd')
    }

</script>