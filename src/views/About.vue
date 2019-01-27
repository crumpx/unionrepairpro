<template>
  <div class="about">
    <v-responsive>
      <img style="width: 100%;" v-lazy="banner" alt="">
      </v-responsive>  
    
    <v-container fluid >
      
      <h1 class="text-xs-center display-3">About Union Repair Pro</h1>
      <v-layout xs12 row wrap align-center>
        
        <v-flex sx12 md6 pa-4>
      <div class="body-1">
        <p>We are located in Kissimmee, Florida to provide a wide range of service such as phone repair and computer repair for home and business around the area.</p>   
        <p>In our store, our well-trained&nbsp;technicians can fix nearly any&nbsp;problem you might have with your phones, computer, and other electronics. Take our iPhone repair for example, normally in as fast as 20 minutes. Not only that, our friendly and reliable service comes at a price of about half of what our big box competitors charge will charge you.</p>
        <p>We do not believe saving a few dollars on cheap, unreliable replacement parts will make our business grow bigger and faster. Our replacement parts are shipped directly from the manufactory and are the highest quality.</p>
        <p>With the confidence&nbsp;with our service and product, we offer a lifetime warranty on our replacement parts (labor not included), which will protect you from the manufactory defects.</p>
        
          </div>
</v-flex>
        
        <v-flex xs12 md6 pa-4>
          <v-card class="text-xs-center" >
            <v-card-title>              
              <v-flex xs12 >
                <div class="display-2 text-uppercase  grey--text" >
                <span class="font-weight-light">Union Repair </span>
                <span class="font-weight-medium black--text">Pro</span>
                </div>
                <h3 class="subheading grey--text">Phone, Computer Electronics Repair</h3>
                <v-divider class="my-3"></v-divider> 
                <h3  class="my-3 subheading">3147 W Vine Street, Kissimmee, FL 24741.</h3>
                <h3>We can be reached through:</h3>     
              </v-flex>     
            </v-card-title>
            <v-card-actions >                            
                <v-btn flat color='grey darken-4' href="tel:4072014886">
                  <v-icon left >fa-phone</v-icon>
                  <span>407-201-4886</span>
                </v-btn>
                <v-btn flat color='grey darken-4' href="mailto:info@unionrepairpro.com">
                  <v-icon left >fa-envelope</v-icon>
                  <span>Email</span>
                </v-btn>
            </v-card-actions>

     
          </v-card>
          
        </v-flex>
      </v-layout>

<v-layout row wrap align-center >
        <v-flex xs12>
         <Map></Map>
        </v-flex>

        
        
      </v-layout>



    </v-container>
  </div>
</template>

<script>
import Map from "@/components/Map.vue"
export default {
  components: {
    Map,
  },
      metaInfo: {
      title: 'About Union Repair Pro Kissimmee, Florida',
      meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'We provide a wide range of repair service in Kissimmee. our technicians can fix nearly any problem you might have in as fast as 20 minutes.' },
      { name: 'author', content: 'Gang Zhao, Union Repair Pro'},
    ]
    },
    data(){
      return {
            markers: [
            {
              position: {lat:28.30612, lng:-81.43424 }
            }
          ],
          banner: require("@/assets/microsoldering.jpg")
      }
    }
}
</script>
