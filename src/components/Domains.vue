<template>
   <div class="article-detail__domains" v-if="Domains.length!=0">
      <h2>Domains</h2>
      <div class="article-detail_domains__Tags" >
        <div v-for="tag in Domains" v-bind:key="tag.id">
          <div class="article-detail_domains__Tags__Tag" v-bind:style="{ 'background-color': articleColor}" >
              <box-icon v-bind:name="tag.icon" size="lg" animation='tada-hover' color="#253031"></box-icon>
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