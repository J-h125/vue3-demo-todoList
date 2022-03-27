import { watchEffect, ref } from "vue"

export function useStorage(name){
    const list = ref(JSON.parse(localStorage.getItem(name) || '[]'))
    watchEffect(() => {
        localStorage.setItem(name,JSON.stringify(list.value))
    })
    return {list}
}