<template>
    <div>

       <div class="article-detail__domains">
      <h2>Outlines</h2>
      <li class="Outlines__List">
          <ul><h5 class="linespacing--small" v-bind:style="{ color:articleColor}">Project Info</h5><p>{{ProjectInfo}}</p></ul>
          <ul><h5 class="linespacing--small" v-bind:style="{ color:articleColor}">Project Outlines</h5><p>{{ProjectRole}}</p></ul>
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