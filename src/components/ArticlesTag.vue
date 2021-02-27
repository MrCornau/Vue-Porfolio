<template>
  <div class="tag flex">
    <div  v-for="(tag, index) in tags" :key="tag.id">
      <div v-if="mobileView && index < 2" class="tag__box primary-font-color caption">
        <!-- <box-icon v-bind:name="tag.icon" class="icon" animation='tada-hover' color="#374cff"></box-icon> -->
        <i v-bind:class="['bx-' + tag.icon]" class='bx ' style="color:#374cff"></i>
      <p>{{ tag.content }}</p>
      </div>
      
    <div v-else-if="!mobileView" class="tag__box primary-font-color caption">
        <!-- <box-icon v-bind:name="tag.icon" class="icon" animation='tada-hover' color="#374cff"></box-icon> -->
         <i v-bind:class="['bx-' + tag.icon]" class='bx bx-xs icon' style="color:#374cff"></i>
      <p>{{ tag.content }}</p>
      </div>

    </div>
  </div>
</template>
<script>

export default {
  data: () => {
    return {
      mobileView: true,
    };
  },
  props: {
    tags: Array,
   
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 1040;
    },
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>

<style scoped>
</style>
