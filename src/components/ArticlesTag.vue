<template>
  <div class="tag flex">
    <div   v-for="(tag, index) in tags" :key="tag.id" >
      <div>
        
      </div>
      <div v-scrollanimation v-if="mobileView && index < 2" class="tag__box primary-font-color caption" v-bind:style="{'transition-delay': 0.1*index+'s'}" >
        <!-- <box-icon v-bind:name="tag.icon" class="icon" animation='tada-hover' color="#374cff"></box-icon> -->
        <i v-bind:class="['bx-' + tag.icon]" class='bx ' style="color:#374cff"></i>
      <p>{{ tag.content }}</p>
      </div>
      
    <div v-scrollanimation  v-else-if="!mobileView" class="tag__box primary-font-color caption" v-bind:style="{'transition-delay': 0.1*index+'s'}" >
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
