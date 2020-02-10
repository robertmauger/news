<template>
  <div id="app">{{title}}
     <Memberships v-bind:memberships="restApiItems" />
  </div>
 
</template>


<script>
import Memberships from './components/Memberships'
import {mapState} from 'vuex'
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
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then( res => this.restApiItems = res.data)
    // .catch(err => console.log(err))

  },
 computed: {
    ...mapState([
      'title',
      'membershipsType',
      'status'
    ]),
    // Other properties
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
