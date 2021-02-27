<template>

 <router-link :to="{ path: path }" class="">
              <button  v-scrollanimation class="primary-button">
                <span>{{name}}</span>
              </button>
</router-link>
    
</template>
<script>
export default {
    props:{
        name:String,
        path:String
    }
}
</script>

<style scoped>
.before-enter{
  opacity: 0;
  transform: translateY(50px);
  transition: all 1.2s ease-out;
  transition-delay: 0.5s;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>