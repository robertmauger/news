<template>
  <section class="wrapper">
    <header>
      <h1>Membership</h1>
      <p>Select your membership type below:</p>
      <div class="enumeration">
        <span class="section-number">1</span>
      </div>
    </header>

    <div class="container">
      <!-- {{memberships}} -->
      <div class="row">
        
          <div class="radio-block" v-for="memberships1 in memberships" :key="memberships1.id">
            
            {{memberships1.name}}<br>


            
          </div>

           <!-- <span v-if="memberships.icon.length<=1"> -->
         
       

        <!-- v-if="Math.random() > 0.5" -->
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
  text-align: center;
  position: absolute;
  top: 1px;
  left: -58px;
  background: #1178ce;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #1178ce;
  height: 20px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  width: 20px;
}

header {
  position: relative;
}

.container {
  display: flex;
  /*     display:inline-block; */
  justify-content: center;
}
.row {
  display: flex;
  justify-content: center;
}
</style>
