<template>
   <div class="article-detail__domains" v-if="Domains.length!=0">
      <h2>Domains</h2>
      <div class="article-detail_domains__Tags" >
        <div v-for="(tag, index) in Domains" v-bind:key="tag.id">
          <div v-scrollanimation v-bind:style="{'transition-delay': 0.1*index+'s', 'background-color': articleColor}" class="article-detail_domains__Tags__Tag" >
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

<style scoped>

.before-enter{
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease-in-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>