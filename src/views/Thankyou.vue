<template>
   <div class="home">
      <div class="vue-logo-back"> <img src="../assets/bi-logo.png" class="p-4"> </div>
      <div class="col-md-6 centeralign mt-5">
         <div>
            <form novalidate class="md-layout">
               <md-card class="md-layout-item ">
                  <md-card-content>
                     <h2 class="mb-5 mt-5">Thank you for submitting form <br/>We will get back to you shortly!.</h2>
                     <a v-on:click="goToMainPage()" class="btn btn-primary"><span style="color:white">Go Back</span></a> 
                  </md-card-content>
               </md-card>
            </form>
         </div>
      </div>
   </div>
</template>
<script>
   // @ is an alias to /src
   import axios from 'axios'
   export default {
   	name: 'thankyou',
   	methods: {
   		goToMainPage: function() {
   			this.$router.push("/customers");
   		}
   	}
   }
</script>