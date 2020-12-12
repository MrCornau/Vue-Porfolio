<template>
  <div class="presenter">
    <div v-for="presenter in Content" :key="presenter.Description_Presentation">
      <div v-if="presenter.scroll">
        <div class="presenter-container">
          <div class="presenter-container__image-box">
              <div class="presenter-container__image-box--inside">
                  <img
              class="presenter-container__image-box__image"
              :src="api_url + presenter.content_video[0].url"
              v-bind:style="{ top: scrollevelPercent }"
              alt="nothing"
            />
              </div>
            
          </div>

          <div class="presenter-container__Info">
              <h2>{{presenter.Description_Presentation}}</h2>
              
              <div class="presenter-container__Info__Button-Container" >
                    <div v-for="(StateButton, index) in presenter.Content.states"  :key="StateButton.name">
                    <button class="presenter__Button" @click="scrollevel(StateButton.scroll, index)" v-bind:class="{'active-Button' : index == activeButton }">{{StateButton.name}}</button>
                 
              </div>
              </div>
            
              <div>
                  {{presenter.Content.states[activeButton].description}}
              </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      scrollevelPercent: "0%",
      activeButton:0,
      api_url: process.env.VUE_APP_STRAPI_API_URL,
    };
  },
  props: {
    Content: Array,
  },
  methods: {
    scrollevel(percentage, index) {
      this.scrollevelPercent = percentage;
      this.activeButton=index;
    },
  },
};
</script>

<style scoped>

.presenter{
    margin-top: 50px;
    padding-top:150px;
    background-color:#F5F5F5 ;
     padding-bottom:550px;
}

.presenter-container {
  display: flex;
  margin: auto;
  max-width: 90%;

  gap:2em;
}

.presenter-container__image-box{
      min-width: 60vw;
      overflow: hidden;
       border-radius: 3.5px;
  box-shadow: 0 2.5px 14px 4px rgba(0, 70, 255, 0.13), 0 3.5px 7px 0 rgba(0, 0, 0, 0.19);
  background-color: #d8d8d8;
}

.presenter-container__image-box--inside{
    position: relative;
    width: 100%;
    padding-top: 62%;
    overflow: hidden;
}

.presenter-container__image-box__image{
      max-width: 100%;
       transition: 1s;
      position:  absolute;
}


.presenter__Button{

  border-radius: 4px;
  border: solid 2px #0046ff;
  background-color: #ffffff;
  color:#0046ff;
  padding: 8px 24px;
  flex-grow: 3;
}

.active-Button{
box-shadow: 0 1.5px 4px 1.5px rgba(55, 65, 255, 0.13), 0 1px 5.5px 0 rgba(0, 0, 0, 0.27);
  
  background-color: #0046ff;
  color: white;
}

.presenter-container__Info{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.presenter-container__Info__Button-Container{
    margin-top:50px;
    margin-bottom:50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5em;
}

</style>
