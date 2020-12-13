<template>
   <div class="article-detail__domains" v-if="Domains.length!=0">
      <h2>Domains</h2>
      <div class="article-detail_domains__Tags" >
        <div v-for="tag in Domains" v-bind:key="tag.id">
          <div class="article-detail_domains__Tags__Tag" v-bind:style="{ 'background-color': articleColor}" >
              <!-- <box-icon v-bind:name="tag.icon" size="lg" animation='' color="#253031"></box-icon> -->
              <i v-bind:class="['bx-' + tag.icon]" class='bx bx-md' style="color:#253031"></i>
              
               <p>{{ tag.content }}</p>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    props:{
        Domains:Array,
        articleColor:String
    }
}
</script>