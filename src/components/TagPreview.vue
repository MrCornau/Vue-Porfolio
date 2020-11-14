<template>
<div class="tag-container">
                  <div class="tag" v-for="tag in tags" :key="tag.id">
                    <i class="fas fa-clock" style="font-size:24px;"></i>
                    <p>{{tag.content}}</p>
                  </div>
</div>
</template>
<script>
export default {
    props:{
        tags: Array
    }
}
</script>