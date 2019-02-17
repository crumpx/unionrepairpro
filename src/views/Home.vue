<template>
  <div class="home">
    <v-responsive>
      <img style="width: 100%;" v-lazy="banner" alt="Welcome To Union Repair Pro">
      </v-responsive> 
    <v-container>
          <h1 class="text-xs-center display-3">Welcome to Union Repair Pro</h1>
          <h2 class="text-xs-center">Repair experts in Kissimmee, FL</h2>
      <v-layout row >
        <v-flex xs12 md8 offset-md2>

          <v-card>
            <v-card-text>
          <p style="display: inline;">We are located in Kissimmee, Florida to provide a wide range of service for home and business around the area. Some of our services: 
            <h3>iPhone battery replace</h3>
            <h3>iPhone carrier unlock</h3>
            <h3>Samsung, LG, Motorola carrier unlock</h3>
            <h3>Samsung, LG, Motorola account unlock</h3>
            <h3>phone repair</h3>
            <h3>laptop repair</h3>
            <h3>computer service</h3>
            <h3>microsoldering service</h3> 
  
            
            <br>
           If you are in the neiborhood, just google "phone repair near me" and we will come up on the screen. <p> 
          <p>In our store, our well-trained technicians can fix nearly any problem you might have with your phones, computer, and other electronics. Take our iPhone repair for example, normally in as fast as 20 minutes. Not only that, our friendly and reliable service comes at a price of about half of what our big box competitors charge will charge you.</p> 
          <p>We do not believe saving a few dollars on cheap, unreliable replacement parts will make our business grow bigger and faster. Our replacement parts are shipped directly from the manufactory and are the highest quality.</p>
          <p>With the confidence with our service and product, we offer a lifetime warranty on our replacement parts (labor not included), which will protect you from the manufactory defects.</p>
            </v-card-text>
 
        </v-card>
        </v-flex>
      </v-layout>

      
      <h1 class="my-3 text-xs-center">Service We Offer</h1>
      <v-layout row wrap expend>
        <v-flex xs12 sm6 md4 lg3 grow v-for="item in services" :key="item.title">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="120" class="grey">

                <img v-lazy="item.src" alt="item.title"> 
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{item.title}}</div>
              <div class="grey--text">{{item.text}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color='blue'  router :to='item.actionUrl'>
                <v-icon small left>fa-check</v-icon>
                Find out More
              </v-btn>
            </v-card-actions>
          </v-card>
          
        </v-flex>
      </v-layout>


      <h1 class="my-3 text-xs-center">How to Find Us</h1>
      <v-layout row wrap align-center >

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
                  
                </v-btn>
            </v-card-actions>
          </v-card>
          </div>
        </v-flex> 




        <v-flex xs12 lg12 pa-4>

          <Map></Map>
        </v-flex>

        
        
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Map from '@/components/Map'

  export default {
          components: {
            Map
          },
    metaInfo: {
      title: 'Computer|Laptop Repair|iPhone Battery|Phone repair near me',
      meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Phone repair and computer repair, laptop repair in Kissimmee, phone repair near me, fix broken phone screen, iphone battery in 20 minutes. Micro soldering service and more' },
      { name: 'author', content: 'Gang Zhao, Union Repair Pro'},
       { name: 'msvalidate.01', content: '1DF766012DA50373A5C327F8ABDEEE40'},

    ]

    },

    data() {
      return {
          services: [
                {
                    src: require('@/assets/cracked-phone-sm.jpg'),
                    title: 'Phone Repair',
                    text: 'Apple, Samsung, LG, or any other brands, with any problems.',
                    actionUrl: '/service/phone-tablet'
                },
                {
                    src: require('@/assets/computer-repair-sm.jpg'),
                    title: 'Computer Service',
                    text: 'Desktop, Laptop, Windows or Mac. We fixed them all.',
                    actionUrl: '/service/computer'
                },
                {
                    src: require('@/assets/microsoldering-sm.jpg'),
                    title: 'Microsoldering',
                    text: 'Fix phones with internal issues that can\'t be fixed by anyone else.',
                    actionUrl: '/service/microsoldering'
                },
                {
                    src: require('@/assets/phone-unlock-chain-sm.jpg'),
                    title: 'Phone Unlock',
                    text: 'Password lock, Google lock, Carrier lock, no problem.',
                    actionUrl: '/service/carrierunlock'
                },

                {
                    src: require('@/assets/data-recovery-sm.jpg'),
                    title: 'Data Recovery',
                    text: 'Recover data from dead computers and phones',
                    actionUrl: '/service/unlock'
                },

                // {
                //     src: require('@/assets/buyandsell-sm.jpg'),
                //     title: 'Buy & Sell',
                //     text: 'You have phone you want to get rid off for cash? We can help.',
                //     actionUrl: '/buyandsell'
                // },                
            ],
            banner: require("@/assets/home.jpg")
            
      }
    }

  
  }
</script>

<style>
.my-5 h3 {
  /* display: inline; */
}
</style>
