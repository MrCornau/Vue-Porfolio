<template>
   <div class="article-detail__domains Contact" v-if="content.length!=0">
      <h2 class="Contact-Heading white">Feel Free to <br>contact me</h2>
      <div class="article-detail_domains__Tags" >
        <div v-for="item in content" v-bind:key="item.id">

          <a v-if="!item.Link.includes('mail')" class="article-detail_domains__Tags__Tag" v-bind:style="{ 'background-color': '#303030'}" :href="'https://'+item.Link" target="_blank">
          
              <!-- <box-icon v-bind:name="tag.icon" size="lg" animation='' color="#253031"></box-icon> -->
              <i v-bind:class="['bxl-' + item.Icon,'bx-' + item.Icon ]" class='bx bx-md' style="color:#FFFFFF"></i>
              
               <p class="white">{{ item.Kind }}</p>
            </a>
            <a v-if="item.Link.includes('mail')" class="article-detail_domains__Tags__Tag" v-bind:style="{ 'background-color': '#303030'}" :href="'mailto:'+item.Link" target="_blank">
          
              <!-- <box-icon v-bind:name="tag.icon" size="lg" animation='' color="#253031"></box-icon> -->
              <i v-bind:class="['bxl-' + item.Icon,'bx-' + item.Icon ]" class='bx bx-md' style="color:#FFFFFF"></i>
              
               <p class="white">{{ item.Kind }}</p>
            </a>
        </div>
      </div>
    </div>
</template>

<script>
export default {

  props: {
    content: {
      type: Array,
    },
  },
};
</script>
<style scoped>
.Contact{
    width: 100%;
    justify-content: space-between;
}

.article-detail_domains__Tags__Tag{
  transition-duration: 0.15s;
}

.article-detail_domains__Tags__Tag:hover { 
    transform: scale(1.05); 
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    transition-duration: 0.15s;
    }


</style>
