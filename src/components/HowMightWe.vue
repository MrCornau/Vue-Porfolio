<template>
   <div class="howMightWe" v-bind:style="{ 'background-color': articleColor}">
        <div class="article-detail__container article-detail__width howMightWe-container">
         <!-- <box-icon class="howMightWe-container__icon" v-bind:name="'pin'"  size="cssSize" animation='tada-hover' color="#253031"></box-icon> -->
              <i class='bx bx-pin howMightWe-container__icon' style="color:#253031"></i>
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

<style scoped>



.howMightWe-container__icon{
    font-size: 430%;
}

@media only screen and (max-width: 600px) {

  .howMightWe{
    margin-top: 50px;
  }

  .howMightWe-container__icon{
    display: none;
  }
}

@media only screen and (min-width: 600px) and (max-width: 1200px) and (orientation: portrait) {

  .howMightWe-container__icon{
    display: none;
  }
}

@media only screen and (min-width: 1900px) {
  .howMightWe-container__icon{
 
  }
}



</style>