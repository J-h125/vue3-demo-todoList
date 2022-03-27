import {ref,computed} from 'vue'

function useTodos(){
    const content = ref('')
    const list = ref([{content:'123', done: false}])
    const addList = () => {
        list.value.push({
            content: content.value,
            done: false
        })
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

