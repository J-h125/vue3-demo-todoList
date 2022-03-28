<template>
  <Rate v-model="score" :theme="theme" ></Rate>
  <Rate :value="4" :theme="'black'"></Rate>
<!--  <Rate :value="5" :theme="'green'"></Rate>-->
</template>

<script setup>
import Rate from '../components/Rate.vue'
import {ref} from 'vue'

let score = ref(3)
const theme = ref('orange')
// const update = (num) => {
//   score.value = num
//   console.log('update',num)
// }

</script>

<style lang="scss" scoped>

</style>
