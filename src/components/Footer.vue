<template>
 
<v-footer dark height="auto" >
    <v-card style="width: 100%"
      flat
      tile
      class="indigo lighten-1 white--text text-xs-center"
    >
      <v-card-text>
        <v-btn
          v-for="(link,index) in socialLinks"
          :key="index"
          class="mx-3 white--text"
          icon
        >
          <v-icon size="24px">{{ link.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2018 — <strong>Union Repair Pro</strong>
      </v-card-text>
    </v-card>
  </v-footer>

  
</template>

<script>
  export default {
    data: () => ({
      socialLinks: [
          { icon: 'fab fa-facebook', url: 'https://www.facebook.com/unionrepairpro/'},
          { icon: 'fab fa-twitter', url: 'https://twitter.com/RepairUnion'},
          { icon: 'fab fa-instagram', url: 'https://www.instagram.com/unionrepairpro/'},         
      ]
    })
  }
</script>