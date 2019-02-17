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
           :href= 'link.url'
           target="blank"
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
        &copy;2018 — <strong>Union Repair Pro | 407-201-4886</strong>
      </v-card-text>
    </v-card>
  </v-footer>

  
</template>

<script>
  export default {
    data: () => ({
      socialLinks: [
          { icon: 'fab fa-google', url: 'https://goo.gl/Aw5Mh2'},   
          { icon: 'fab fa-facebook', url: 'https://www.facebook.com/unionrepairpro'},
          { icon: 'fab fa-twitter', url: 'https://twitter.com/RepairUnion'},
          { icon: 'fab fa-instagram', url: 'https://www.instagram.com/unionrepairpro'},                
          { icon: 'fab fa-yelp', url: 'https://www.yelp.com/biz/union-repair-pro-kissimmee'}, 
      ]
    })
  }
</script>