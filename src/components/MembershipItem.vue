<template> 


<!-- dfgkldfl -->

    <!-- {{memberships.userId}}
   {{memberships.id}} -->
   <!-- {{memberships.title}}
   {{memberships.title}}
     -->


            <label>
                 <input v-on:change="changeBox" type="radio" required name="product" class="card-input-element" />
                   <div class="panel panel-default card-input">
                       <div>0000000</div>
                     <div class="panel-heading">                     
                         <span v-if="memberships.icon.length>1">-=-=-=
                             <i :class="['fa fa-' + memberships.icon[0]]"></i>
                             <i :class="['fa fa-' + memberships.icon[1]]" > </i>
                          </span>
                          <span v-if="memberships.icon.length<=1">
                             <i :class="['fa fa-' + memberships.icon[0]]"></i>
                          </span>                       
                         {{memberships.heading}}</div>
                     <div class="panel-body">
                       <p>{{memberships.description}}</p>
                             <h5>{{memberships.app_fee}}</h5>
                             <p>{{memberships.refundable_policy}}</p>
                             <p>Requirements</p>
                             <ul>
                                 <li><i class="fa fa-check"> </i>{{memberships.requirement1}} Legal Name</li>
                                 <li><i class="fa fa-check"> </i>{{memberships.requirement2}} Mailing Address</li>
                                 <li><i class="fa fa-check"> </i>{{memberships.requirement3}} Valid Email Address</li>
                                 <li><i class="fa fa-check"> </i>{{memberships.requirement4}} SSN/ITIN or EIN</li>
                                 <li><i class="fa fa-check"> </i>{{memberships.requirement5}} Must be 18 or older*</li>
                             </ul>
                     </div>
                   </div>
       
               </label> 
</template>

<script>
export default {
    name:"MembershipsItem",
    props:["memberships"],
    methods:{
        changeBox(){
           // var foo =1;

        }
    }
    
}
</script>
<style scoped lang="scss">



.radio-block {
    /*     max-width:344px; */
}

.panel-body {
    padding: 1em 2.7em;
    color: #6d6d6d;
    line-height: 1.5em;
}

/**
  Component
**/

i{
    padding-right:8px;
}

label {
    width: 100%;
}

.card-input-element {
    display: none;
}

ul {
    list-style: none;
    list-style-position: inside;
    padding-left: 0;
}
ul li {
    margin-bottom: 18px;
}

.card-input {
    margin: 10px;
    padding: 0px;
    background: #fff;
    border: 1px solid #85868c;
    border-radius: 2px;
    margin-bottom: 0;
    transition: 0.3s;
}

.panel-heading {
    background: #fafafa;
    border-bottom: 1px solid #85868c;
    padding: 1em 1em 1em;
    height: 42px;
    color: #004183;
    font-size: 19px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-input:hover {
    cursor: pointer;
}



.card-input-element:checked + .card-input {
    border-color: #1178ce;
    box-shadow: 0 0 15px -1px rgba(0, 0, 0, 0.5);
    transform: translateX(-100%);
    animation: slideToRight 300ms linear forwards;
}

.card-input-element:hover + .card-input {
    border-color: #1178ce;
    box-shadow: 0 0 15px -1px rgba(0, 0, 0, 0.5);
}

.card-input-element:checked ~ div .panel-heading {
    /*      box-shadow: 0 0 1px 1px red; */
    background: #1178ce;
    color: #fff;

    transform: translateX(-100%);
    animation: slideToRight 300ms linear forwards;
}
@keyframes slideToRight {
    0% {
        opacity: 0;
        transform: translateY(0);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

</style>