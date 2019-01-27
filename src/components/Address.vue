<template>
    <v-flex xs12 lg6 offset-lg3 pa-4>
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
                  <span>info@unionrepairpro.com</span>
                </v-btn>
            </v-card-actions>

     
          </v-card>
          
        </v-flex> 
</template>

<script>
export default {
  name: 'myaddress',
    
}
</script>
