<template>
    <div>provideTest--------------</div>
    <div>{{locationInject}}</div>
</template>
<script>
    import {defineComponent, inject} from 'vue'
   export default defineComponent({
       inject:['location'],
       setup(props) {
           const locationInject = inject('location')
        return{
            locationInject
        }
       }
   })
</script>