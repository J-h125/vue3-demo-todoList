import { createStore } from "vuex"

const store = createStore({
    state(){
        return{
            count:0
        }
    },
    mutations:{
        add(state){
            state.count++
        }
    },
    actions: {
        asyncAdd({commit}){
            setTimeout(()=>{
                commit('add')
            },1000)
        }
    }
})
export default store