<template>
  <div class="footer" v-bind:class="{'dark-background':'/about' == route}">
    <ul class="Footer--List">
      <li v-bind:class="{'white':'/about' == route,'black':'/about' != route }" class="Imprint"><a href="/imprint">Imprint</a></li>
      <li>
        <ul class="Contact-list" >
        <li v-for="contact in footer.AAContacts.Contact" :key="contact.id" >

          <a v-if="!contact.Link.includes('mail')"  :href="'https://'+contact.Link" target="_blank" class="contact-item">
          
              <!-- <box-icon v-bind:name="tag.icon" size="lg" animation='' color="#253031"></box-icon> -->
              <i v-bind:class="['bxl-' + contact.Icon,'bx-' + contact.Icon, {'white':'/about' == route,'black':'/about' != route } ]" class='bx bx-sm' ></i>
              
               <p v-bind:class="{'white':'/about' == route,'black':'/about' != route }">{{ contact.Kind }}</p>
            </a>
            <a v-if="contact.Link.includes('mail')" class="black contact-item"  :href="'mailto:'+contact.Link" target="_blank">
          
              <!-- <box-icon v-bind:name="tag.icon" size="lg" animation='' color="#253031"></box-icon> -->
              <i v-bind:class="['bxl-' + contact.Icon,'bx-' + contact.Icon, {'white':'/about' == route,'black':'/about' != route } ]" class='bx bx-sm' ></i>
              
               <p v-bind:class="{'white':'/about' == route,'black':'/about' != route }">{{ contact.Kind }}</p>
            </a>
        </li>
        </ul>
      </li>
      <li class="Copyright" v-bind:class="{'white':'/about' == route,'black':'/about' != route }"><a>made with ❤️ by Josh Cornau</a></li>
    </ul>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  data: function() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
    };
  },

  props: {
    route: {
      type: String,
    }
  },
  components: {},

  apollo: {
    footer: gql`
      query footer {
        footer {
          AAContacts
          Imprint
        }
      }
    `,
  },
};
</script>

<style scoped>

.dark-background{
    background-color: #272727;
}



.footer {

  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #f5f5f5;
}

.Footer--List {
    margin: auto ;
    width: 90%;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
grid-column-gap: 1em;
    grid-row-gap: 1em;
    align-items: center;
}

.Contact-list{
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.Copyright{
    display: flex;
    justify-content: flex-end;
}

.contact-item{
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media only screen and (max-width: 600px) {
.Footer--List {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
.Copyright{
    display: flex;
    justify-content: flex-start;
    order: -1;
}
.Contact-list{
    order:2;
}

.Imprint{
    order: -2;
}



}
@media only screen and (min-width: 600px) and (max-width: 1200px) and (orientation: portrait) {
.Footer--List {
display: flex;
justify-content: space-between;
}
.Copyright{
    display: flex;
    justify-content: flex-start;
    order: -1;
}
.Contact-list{
    order:2;
}

.Imprint{
    order: -2;
}


}

</style>
