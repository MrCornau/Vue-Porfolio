<template>
  <div>
    <h1>Heading h1</h1>
    <h2>Heading h2</h2>
    <h3>Heading h1</h3>
    <p class="test-paragraph paragraph">
      There are tons of screens and devices with different heights and widths,
      so it is hard to create an exact breakpoint for each device. To keep
      things simple you could target five common groups:
    </p>

    <div class="padding-Top">

      this will be an image test
      <div class="image-container">
        <div class="image-box">
        <img class="image" src="../assets/Landingpage.jpg" v-bind:style="{ 'top':scrollevelPercent}" alt="nothing" />
      </div>

        <button @click="scrollevel('0%')">start</button>
        <button @click="scrollevel('-100%')">laden</button>
        <button @click="scrollevel('-220%')">parken</button>
        <button @click="scrollevel('-320%')">reichweite</button>
         <button @click="scrollevel('-430%')">reichweite</button>
         <button @click="scrollevel('-530%')">reichweite</button>

      </div>
      
    </div>
  </div>
</template>
<script>
export default {
    data: () => {
    return {
      scrollevelPercent:'0%',
    };
  },
    methods:{
        scrollevel(percentage){
            this.scrollevelPercent = percentage;
        }
    }
}
</script>

<style scoped>

.image-box{
    position: relative;
    width: 100%;
    padding-top: 65%;
    overflow: hidden;
}

.image-container{
    width: 60vw;
}
.image{
      max-width: 100%;
       transition: 1s;
      position:  absolute;
 
}

.padding-Top {
  margin-top: 100px;
}
</style>
