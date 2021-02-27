<template>
  <div v-if="this.microProjects" class="margin-top--M">
      <div class="article-detail__container article-detail__width">
          <h2>Articles you may also like</h2>
      </div>
      <div class="projectslider margin-top--M">
    <div class="projectslider__container">
      <div v-for="article in CombinedArray" :key="article.id">
        <div class="projectslider__project">
          <router-link
            :to="{ path: routeto + article.id }"
            class="projectslider__image"
          >
            <img
              class="more-articles__container__image--size"
              :src="api_url + article.image.url"
              alt="nothing"
            />
          </router-link>
          <div>
            <p class="black">{{ article.publishedAt }}</p>
            <h5 class="black">{{ article.title }}</h5>
          </div>
        </div>
      </div>
      <div class="end"></div>
    </div>
      </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  data: function() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      header: [],
      microProjects: [],
    };
  },
  
  props: {
    title: String,
    routeto:String
  },

  components: {},
  
  methods: {
    console(foo) {
      console.log(foo);
    },
    arrayRemove(arr, value) { 
        return arr.filter(function(ele){ 
            return ele.title != value; 
        });
    }
  },
  computed: {
    CombinedArray: function() {
      function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
      }
      let Array1 = [...this.microProjects];
      let NewArray = shuffle(Array1);
      this.console('New:'+Array1);
      let FinalArray = this.arrayRemove(NewArray, this.title)
      this.console('Final:'+this.title);
      this.console(FinalArray);
      return FinalArray;
      
    }
  },
  apollo: {
    microProjects: {
      query: gql`
         query MicroProjects {
          microProjects {
            isSelected
            title
           
            image{url}
            publishedAt
            description
            Tags
            publishedAt
            id
            
          }
        }
      `,
    },
  }
};
</script>

<style scoped>
.projectslider__container {
  padding-left: 20%;
  display: flex;
  overflow-x: auto;

  --gap: 40px;
  --column-gap: var(--gap);
  --row-gap: var(--gap);
  margin: calc(var(--row-gap) / -2) calc(var(--column-gap) / -2);
}

.projectslider__container > * {
  margin: calc(var(--row-gap) / 2) calc(var(--column-gap) / 2);
}
.projectslider__project {
  width: 300px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  --gap: 10px;
  --column-gap: var(--gap);
  --row-gap: var(--gap);
  margin: calc(var(--row-gap) / -2) calc(var(--column-gap) / -2);
}

.projectslider__project > * {
  margin: calc(var(--row-gap) / 2) calc(var(--column-gap) / 2);
}

.projectslider__image {
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25vh;
  overflow: hidden;
}

.end {
  min-width: 200px;
  min-height: 100%;
}

.more-articles__container__image--size {
  object-fit: cover;
  max-width: 120%;
  max-height: 120%;
}


@media only screen and (max-width: 600px) {
.projectslider__container {
  padding-left: 5%;
}
.projectslider__image {
  height: 15vh;
}
.projectslider__project {
  width: 200px;
  }
}

@media only screen and (min-width: 600px) and (max-width: 900px) and (orientation: landscape) {
.projectslider__container {
  padding-left: 10%;
}
.projectslider__image {
  height: 30vh;
}
.projectslider__project {
  width: 200px;
  }
}

@media only screen and (min-width: 600px) and (max-width: 1200px) and (orientation: portrait) {
.projectslider__container {
  padding-left: 10%;
}
.projectslider__image {
  height: 20vh;
}
.projectslider__project {
  width: 400px;
  }

}

@media only screen and (min-width: 900px) and (max-width: 1200px) and (orientation: landscape) {
.projectslider__container {
  padding-left: 10%;
}
.projectslider__image {
  height: 20vh;
}
.projectslider__project {
  width: 300px;
  }

}

@media only screen and (min-width: 1200px)and (max-width: 1900px) {
.projectslider__image {
  height: 30vh;
}
.projectslider__project {
  width: 400px;
  }
    
}

@media only screen and (min-width: 1900px) {
    .projectslider__container {
  padding-left: 25%;
}
.projectslider__image {
  height: 30vh;
}
.projectslider__project {
  width: 500px;
  }
    
}





</style>
