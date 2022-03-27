import {ref, computed, watchEffect} from 'vue'
import { useStorage } from '../hooks/useStorage'

function useTodos(){
    const { list } = useStorage('todoList')
    const content = ref('')
    const addList = () => {
        list.value.push({
            content: content.value,
            done: false
        })
        content.value = ''
    }
    const clear = () => {
        list.value = list.value.filter(item => !item.done )
    }
    let active = computed(()=>{
        return list.value.filter(item => !item.done).length
    })
    let all = computed(function(){
        return list.value.length
    })
    let allDone = computed({
        get:function(){
            return active.value === 0
        },
        set:function(val){
            list.value.forEach((item)=>{
                item.done = val
            })
        }
    })
    return { content, list, addList, clear, active, all, allDone }
}
export default useTodos

