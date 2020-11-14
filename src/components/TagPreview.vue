<template>
  <div class="tag-container ">
    <div class="tag primary-font-color caption" v-for="tag in tags" :key="tag.id">
      <box-icon v-bind:name="tag.icon" class="icon" animation='tada-hover' color="#374cff"></box-icon>
      <p>{{ tag.content }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tags: Array,
  },
};
</script>

<style scoped>
</style>
