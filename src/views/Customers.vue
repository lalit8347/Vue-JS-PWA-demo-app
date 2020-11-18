<template>
   <div class="home">
      <div class="vue-logo-back"> <img src="../assets/bi-logo.png" class="p-4"> </div>
      <div class="col-md-6 centeralign mt-5">
         <div>
            <form novalidate class="md-layout" @submit.prevent="validateUser">
               <md-card class="md-layout-item ">
                  <md-card-header>
                     <div class="md-title">Users</div>
                  </md-card-header>
                  <md-card-content class="col-md-12 row m-0">
                     <div class="col-md-6">
                        <div class="md-layout-item md-small-size-100">
                           <md-field>
                              <label for="first-name">First Name</label>
                              <md-input name="first-name" id="first-name" autocomplete="given-name" />
                           </md-field>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="md-layout-item md-small-size-100">
                           <md-field>
                              <label for="first-name">Last Name</label>
                              <md-input name="first-name" id="first-name" autocomplete="given-name" />
                           </md-field>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="md-layout-item">
                           <md-field>
                              <label for="first-name">Email</label>
                              <md-input name="first-name" id="first-name" autocomplete="given-name" />
                           </md-field>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="md-layout-item">
                           <md-field>
                              <label for="first-name">Phone</label>
                              <md-input name="first-name" id="first-name" autocomplete="given-name" />
                           </md-field>
                        </div>
                     </div>
                  </md-card-content>
                  <div class="col-md-12 row justify-center mb-3 m-0"> <a class="btn btn-primary" v-on:click="goToDetailsPage()"><span style="color:white">Submit</span></a> </div>
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
   	name: 'customers',
   	methods: {
   		goToDetailsPage: function(id) {
   			this.$router.push("/thankyou/" + "1");
   		}
   	}
   }
</script>