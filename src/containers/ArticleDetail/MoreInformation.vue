<template>
<div v-bind:style="{ 'background-color': articleColor}">
    <div class="more-information article-detail__width article-detail__container" >
      <div class="more-information__Container"> 
          <h2>Additional Information</h2>
                <button v-if="Content.Dokumentation.length!=0" class="download-Button"  >
                <a :href="[api_url + Content.Dokumentation[0].url]"  target="_blank">Donwload Dokumentation   <i v-bind:class="['bx-file-blank']" class='bx bx-xs' style="color:#253031"></i></a>
              </button>
        </div>
      <div>
            <h5>Supervisors</h5>
            <br>
            <ul v-for="Supervisor in Content.Supervisors.Supervisors" :key="Supervisor.id">
            <li class="more-information__List"><a :href="'https://'+ Supervisor.Website"  target="_blank" > {{Supervisor.Name}}</a></li>
            </ul>
      </div>
      <div>
            <h5>Collaborators</h5> 
            <br>  
            <ul v-for="Collaborators in Content.TeamMates.Collaborators" :key="Collaborators.id">
            <li class="more-information__List"><a :href="'https://'+Collaborators.Website"  target="_blank" >{{Collaborators.Name}}</a></li>
            </ul>
      </div>
    </div>
    </div>
</template>
<script>
export default {
    data:function(){
            return{
                api_url: process.env.VUE_APP_STRAPI_API_URL,
            }
    },
    props:{
        Content:Object,
        articleColor:String
    }
}
</script>

<style scoped>

.more-information{
    box-sizing: border-box;
    padding: 2em 0em 2em 0em;
    display: grid;
    grid-template-columns: 7fr 4fr 3fr;
    grid-column-gap: 3em;
    border-radius: 3px;
}

.more-information__Container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.more-information__List{
      list-style-type: none;
}


.download-Button{
    max-width: 70%;
}



@media only screen and (max-width: 600px) {
.more-information{
 
    padding: 2em 1em 2em 1em;
    grid-template-columns: 1fr;
    grid-row-gap: 2em;
}

.download-Button{
    margin-top: 20px;
    max-width: 100%;
}

}
@media only screen and (min-width: 600px) and (max-width: 1000px) and (orientation: portrait) {
.more-information{
  padding: 2em 0em 2em 0em;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 30px 30px;
  grid-template-areas:
    "Container Container"
    ". .";
}
.more-information__Container{
    grid-area: Container;
}
.download-Button{
    max-width: 60%;
}

}
@media only screen and (min-width: 600px) and (max-width: 900px) and (orientation: landscape) {
   
}

@media only screen and (min-width: 1000px) and (orientation: portrait) {
 
 .download-Button{
    max-width: 100%;
}
}

@media only screen and (min-width: 900px) and (max-width: 1200px) and (orientation: landscape) {

    .more-information{

    grid-template-columns: 7fr 4fr 2fr;
}
     .download-Button{
    max-width: 100%;
}
}
@media only screen and (min-width: 1200px)and (max-width: 1900px)(orientation: landscape) {
    .download-Button{
    max-width: 100%;
}
}
@media only screen and (min-width: 1900px)(orientation: landscape) {
        .download-Button{
    max-width: 70%;
}
}

</style>