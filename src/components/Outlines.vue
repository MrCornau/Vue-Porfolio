<template>
    <div>

       <div class="article-detail__domains">
      <h2>Outlines</h2>
      <li class="Outlines__List">
          <ul v-scrollanimation v-bind:style="{'transition-delay': '0s'}"><h5   class="linespacing--small" v-bind:style="{ color:articleColor}">Project Info</h5><p>{{ProjectInfo}}</p></ul>
          <ul v-scrollanimation v-bind:style="{'transition-delay': '0.2s'}" ><h5  class="linespacing--small" v-bind:style="{ color:articleColor}">Project Outlines</h5><p>{{ProjectRole}}</p></ul>
      </li>
    </div>
    </div>
</template>
<script>
export default {
    props:{
        ProjectInfo:String,
        ProjectRole:String,
        articleColor:String
    }
}
</script>

<style scoped>

.before-enter{
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.7s ease-in-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>