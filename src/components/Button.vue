<template>

 <router-link :to="{ path: path }" class="">
              <button class="primary-button">
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