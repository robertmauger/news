<template>
  <section class="wrapper">
    <header>
      <h1>Members</h1>
    </header>

    <div class="container">
      <!-- {{memberships}} -->
      <div class="row">
        
          <div class="radio-block" v-for="memberships1 in memberships" :key="memberships1.id">
            {{memberships1.name}}         
          </div>
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
  width: 70%;
  padding-left: 48px;
  border-left: solid 1px lightgrey;
}

header .enumeration {
 
  background: #1178ce;
  
}

header {
  position: relative;
}

</style>
