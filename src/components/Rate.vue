<template>
  <div :style="fontStyle">
    <div class="rate" @mouseout="mouseOut">
      <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
      <span class="hollow" :style="fontWidth">
        <span @click="onRate(num)" @mouseover="mouseOver(num)" v-for="num in 5" :key="num">★</span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed, ref, defineEmits } from 'vue';

let props = defineProps(
    {
      value: Number,
      theme: {type: String, default: 'red'},
      modelValue:Number
    }
)
let width = ref(props.value)
function mouseOver(i){
  width.value = i
}
function mouseOut(){
  width.value = props.value
}
const fontWidth = computed(()=>`width:${width.value}em`)

let rate = computed(()=>"★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value))

const themeObj = {
  'black': '#00',
  'white': '#fff',
  'red': '#f5222d',
  'orange': '#fa541c',
  'yellow': '#fadb14',
  'green': '#73d13d',
  'blue': '#40a9ff',
}

const fontStyle = computed(function(){
  return `color:${themeObj[props.theme]}`
})

let emits = defineEmits(['update:modelValue'])
function onRate(num){
  emits('update:modelValue',num)
}
</script>

<style scoped>
.rate{
  position:relative;
  display: inline-block;
}
.rate > span.hollow {
  cursor: pointer;
  position:absolute;
  display: inline-block;
  top:0;
  left:0;
  width:0;
  overflow:hidden;
}
</style>
