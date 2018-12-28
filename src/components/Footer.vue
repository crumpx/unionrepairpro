<template>
 
<v-footer dark height="auto" >
    <v-card style="width: 100%"
      flat
      tile
      class="indigo lighten-1 white--text text-xs-center"
    >
      <v-card-text>
        <v-btn
          v-for="link in socialLinks"
          :key="link"
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
          { icon: 'fab fa-facebook', url: ''},
          { icon: 'fab fa-twitter', url: ''},
          { icon: 'fab fa-google-plus', url: ''},
          { icon: 'fab fa-linkedin', url: ''},
          { icon: 'fab fa-instagram', url: ''},         
      ]
    })
  }
</script>