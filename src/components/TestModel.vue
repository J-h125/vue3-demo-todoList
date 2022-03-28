<template>
    <div>当前子组件：{{title}}</div>
    <input type="text" :value="title" @change="addTitle">
    <div>reactive,toRefs 练习---------</div>
     <div>书籍</div>
    <div>作者：{{author}}</div>
    <div>价格：{{price}}</div>
    <div>出版年：{{year}}</div>
    <div>描述：{{description}}</div>
    <div>props toRef 练习---------</div>
    <div>name:{{propsName}}</div>
    <div>ref 模板引用--------</div>
    <div ref="root1">ref 引用内容</div>
</template>
<script>
import { defineComponent, onMounted, ref, reactive, toRefs, toRef } from "vue"
export default defineComponent({
    props:{
        title:{
            type:String,
            default:'t'
        },
        name:{
            type:String,
            default:'defaultName'
        }
    },
    emits:['update:title'],
    setup(props,context) {  
        // let propsName = ref(props.name)
        let propsName = toRef(props, 'name')
        const title = ref('')
        const addTitle = (event)=>{
            title.value = event.target.value
            context.emit('update:title',title.value)
            title.value = ''
            // propsName.value = 'wang111'
        }
        const book = reactive({
            author:'wang',
            price: 20,
            year:2020,
            description:'a good book'
        })
        // let {author} = book   //没有响应式
        // author = 'bookname'
        let { author, price, year, description } = toRefs(book) 
       
        const root1 = ref(null) 
        onMounted(function(){
            console.log('onMounted-----')
            console.log('ref root:',root1.value)
        })
         console.log('context:',context)
        return {
            root1,
            propsName,
            author,
             price, 
             year,
            title,
            addTitle,
            description
        }
    },
})
</script>