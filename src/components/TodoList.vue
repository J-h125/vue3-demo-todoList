<template>
    <div>{{count}}</div>
    <button @click="addCount">+1</button><br>
    <input type="text" v-model="content" @keydown.enter="addList">
    <button v-if="active < all" @click="clear">清理</button>
    <ul>
        <li v-for="(item,index) in list" :key="index" >  
            <input type="checkbox" v-model="item.done">
            <span :class="{done: item.done}">{{item.content}}</span>
        </li>
    </ul>
    <div>
        <div>{{active}}/{{all}}</div>
        全选 <input type="checkbox" v-model="allDone">
        
    </div>
</template>
<script setup>
    import { computed, ref } from 'vue'
    import useTodos from '../hooks/useTodos'
    import { useMouse } from '../util/mouse';

    const count = ref(1)
    function addCount(){
        count.value++
    }
    let { content, list, addList, clear, active, all, allDone } = useTodos()
    let { x, y } = useMouse(  )
</script>
<style scoped>
li {
    list-style: none;
}
.done {
  color: grey;
  text-decoration: line-through;
}
</style>