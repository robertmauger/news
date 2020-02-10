<template>
  <section class="wrapper">
    <header>
      <h1>Members</h1>
    </header>

    <div class="container">
      <!-- {{memberships}} -->
      
        
          <div class="radio-block" v-for="memberships1 in memberships" :key="memberships1.id">
            <header>{{memberships1.name}} </header> 
            <div>{{memberships1.address.street}}</div>
            <div>{{memberships1.address.suite}}</div>
            <div>{{memberships1.address.city}}</div>
            <div>{{memberships1.address.zipcode}}</div>
           </div>
     
    </div>
  </section>
</template>

<script>


export default {
  name: "Memberships",
  components: {
   
   
  },
  props: ["memberships"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body {
  font-family: "Circular Book", sans-serif;
  box-sizing: border-box;
}

.wrapper {
  margin: 0 auto;
  width: 25%;
  padding-left: 48px;
  border-left: solid 1px lightgrey;
}


.radio-block{
  border: solid 1px gray;
  margin:21px;
  padding: 10px;
  border-radius: 15px;
}

.radio-block header{
    border-radius: 4px;
    background: cornflowerblue;
    color: #fff;
    padding: 3px;
}

.radio-block:hover {
    border-color: #1178ce;
    box-shadow: 0 0 15px -1px rgba(0, 0, 0, 0.5);
}



</style>
