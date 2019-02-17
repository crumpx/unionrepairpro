<template>
    <nav>
        <v-toolbar flat app height='80'>
            <v-toolbar-side-icon class="hidden-md-and-up grey--text" @click="drawer = !drawer" ><v-icon>fa-bars
</v-icon></v-toolbar-side-icon>
<v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title class="text-uppercase grey--text hidden-xs-and-down" >
                <!-- <span class="font-weight-light">Union Repair </span>
                <span>Pro</span> -->
                <img src="@/assets/logo.png" alt="Union Repair Logo">

            </v-toolbar-title>
            <v-spacer class="hidden-xm-and-down"></v-spacer>
        <v-btn
          v-for="(link,index) in socialLinks"
           :key="index"
           :href= 'link.url'
           target="blank"
           
          class="mx-1 red--text"
          icon>
          <v-icon size="18px" >{{ link.icon }}</v-icon>
        </v-btn>
            <v-btn class="hidden-sm-and-down" flat color='grey' to='/'>Home</v-btn>
            <v-btn class="hidden-sm-and-down" @click="drawer = !drawer" flat color='black'>Service</v-btn>
            <v-btn class="hidden-sm-and-down" flat color='grey' to='/about'>About Us</v-btn>
            <!-- <v-btn class="hidden-sm-and-down" flat color='grey' to='/buyandsell'>Buy & Sell</v-btn> -->
        </v-toolbar>

        <v-navigation-drawer app v-model="drawer">
            <v-list>                
                <v-list-tile  v-for="link in serviceLinks" :key='link.text' router :to="link.route">                   
                    <v-list-tile-action >
                        <v-icon class="white-text"> {{link.icon}}</v-icon>
                    </v-list-tile-action>                       
                    <v-list-tile-content>
                        {{link.text}}
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider class="my-3"></v-divider> 

                <v-list-tile class="hidden-md-and-up" to="/about">                   
                    <v-list-tile-action >
                        <v-icon class="white-text"> fa-id-card </v-icon>
                    </v-list-tile-action>                       
                    <v-list-tile-content>
                        About Us
                    </v-list-tile-content>
                </v-list-tile>

                <!-- <v-list-tile class="hidden-md-and-up" to="/buyandsell">                   
                    <v-list-tile-action >
                        <v-icon class="white-text"> fa-shopping-cart </v-icon>
                    </v-list-tile-action>                       
                    <v-list-tile-content>
                        Buy & Sell
                    </v-list-tile-content>
                </v-list-tile> -->


            </v-list>
        </v-navigation-drawer>
    </nav>

</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            serviceLinks: [
                {icon: 'fa-mobile-alt', text: 'Phone & Tablet Repair', route: '/service/phone-tablet'},
                {icon: 'fa-microscope', text: 'Microsoldering', route: '/service/microsoldering'},
                {icon: 'fa-unlock', text: 'Phone Unlocking', route: '/service/carrierunlock'},
                {icon: 'fa-unlock', text: 'Account Unlocking', route: '/service/accountunlock'},
                {icon: 'fa-desktop', text: 'Computer Service', route: '/service/computer'},
                {icon: 'fa-file-medical', text: 'Data Recovery', route: '/service/datarecovery'},
            ],
                  socialLinks: [
          { icon: 'fab fa-google', url: 'https://goo.gl/Aw5Mh2'},   
          { icon: 'fab fa-facebook', url: 'https://www.facebook.com/unionrepairpro'},
          { icon: 'fab fa-twitter', url: 'https://twitter.com/RepairUnion'},
          { icon: 'fab fa-instagram', url: 'https://www.instagram.com/unionrepairpro'},                
          { icon: 'fab fa-yelp', url: 'https://www.yelp.com/biz/union-repair-pro-kissimmee'}, 
      ]

        }
    }
    
}
</script>
