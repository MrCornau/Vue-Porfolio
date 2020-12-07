<template>
   <div class="howMightWe" v-bind:style="{ 'background-color': articleColor}">
        <div class="article-detail__container article-detail__width howMightWe-container">
         <box-icon class="howMightWe-container__icon" v-bind:name="'pin'"  size="cssSize" animation='tada-hover' color="#253031"></box-icon>
       <h1>{{HowMightWe.HowMightWe}}</h1>
       </div>
       </div>
</template>

<script>
export default {
    props:{
        articleColor: String,
        HowMightWe:Object
    }
}
</script>