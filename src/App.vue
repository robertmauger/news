<template>
  <div id="app">
     <Memberships v-bind:memberships="restApiItems" />
  </div>
 
</template>


<script>
import Memberships from './components/Memberships'

import axios from "axios";
export default {
  name: "app",
  components: {
    Memberships
  },
  data(){
    return{
      restApiItems: []

    }
  },
  created(){
    axios.get('https://jsonplaceholder.typicode.com/users?_limit=10')
    .then( res => this.restApiItems = res.data)
    // .catch(err => console.log(err))

  },

};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
