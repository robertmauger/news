import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'My Custom Title',
    membershipsType: [
      {
        id:1,
        heading: "Writer Writer & Publisher",
        icon:["music","briefcase"],
        description: "A Publisher is a person or company that handles the business side of music. Publishers may control the copyrights of a musical composition, licensing, etc.",
        app_fee: "50 APPLICATION FEE",
        refundable_policy: "non-refundable",
        requirement1: "Legal Name",
        requirement2: "Mailing Address",
        requirement3: "Valid Email Address",
        requirement4: "SSN/ITIN or EIN",
        requirement5: "Must be 18 or older"
      },
      {
        id:2,
        heading: "Writer Writer & Publisher",
       icon:["music"],
        description: "A Publisher is a person or company that handles the business side of music. Publishers may control the copyrights of a musical composition, licensing, etc.",
        app_fee: "50 APPLICATION FEE",
        refundable_policy: "non-refundable",
        requirement1: "Legal Name",
        requirement2: "Mailing Address",
        requirement3: "Valid Email Address",
        requirement4: "SSN/ITIN or EIN",
        requirement5: "Must be 18 or older"
      },
      {
        id:3,
        heading: "Writer Writer & Publisher",
        icon:["briefcase"],
        description: "A Publisher is a person or company that handles the business side of music. Publishers may control the copyrights of a musical composition, licensing, etc.",
        app_fee: "50 APPLICATION FEE",
        refundable_policy: "non-refundable",
        requirement1: "Legal Name",
        requirement2: "Mailing Address",
        requirement3: "Valid Email Address",
        requirement4: "SSN/ITIN or EIN",
        requirement5: "Must be 18 or older"
      }
    ],
    status: [
      {
        one:"unchecked",
        two:"unchecked",
        three:"unchecked",
        publisher_company_type:""
      }
    ]
   
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
