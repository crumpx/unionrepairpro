<template>

    <v-flex xs12 lg6 offset-lg3 pa-4>
      <div itemscope itemtype="http://schema.org/PostalAddress"> 
          <v-card class="text-xs-center" >
            <v-card-title>              
              <v-flex xs12 >
                <div class="display-2 text-uppercase  grey--text" itemprop="name" >
                <span class="font-weight-light" >Union Repair </span>
                <span class="font-weight-medium black--text">Pro</span>
                </div>
                <h3 class="subheading grey--text" temprop="contactType">Phone, Computer Electronics Repair</h3>
                <v-divider class="my-3"></v-divider> 
                <h3  class="my-3 subheading" itemprop="streetAddress">3147 W Vine Street, <span itemprop="addressLocality">Kissimmee, FL </span>,<span itemprop="postalCode"> 24741. </span></h3>
                <h3>We can be reached through:</h3>     
              </v-flex>     
            </v-card-title>
            <v-card-actions >                            
                <v-btn flat color='grey darken-4' itemprop="telephone" href="tel:4072014886">
                  <v-icon left >fa-phone</v-icon>
                  <span >407-201-4886</span>
                </v-btn>
                <v-btn flat color='grey darken-4' itemprop="email" href="mailto:info@unionrepairpro.com">
                  <v-icon left >fa-envelope</v-icon>
                  <!-- <span>info@unionrepairpro.com</span> -->
                </v-btn>
            </v-card-actions>
          </v-card>
          </div>
        </v-flex> 
        
</template>

<script>
export default {
  name: 'myaddress',
    
}
</script>
