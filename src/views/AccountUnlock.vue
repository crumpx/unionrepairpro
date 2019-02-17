<template>
  <div class="">
               <v-responsive>
      <img style="width: 100%;" v-lazy="banner" alt="Google Lock, icloud lock, password removal">
      </v-responsive> 


           <v-container>
          <h1 class="text-xs-center display-3">Account Unlocking Service</h1>
          <v-layout xs12 row wrap >
            <v-flex pa-2 xs12 md8 offset-md2>
              <v-card  v-for="(item,index) in questions" :key='index'>
                <v-card-title class="title grey--text">{{item.q}}</v-card-title>
                <v-card-text v-html="item.a"></v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
      </v-container>
          <v-container>
        <v-layout>
          <MyAddress></MyAddress>
        </v-layout>      

       </v-container> 
  </div>
</template>

<script>
import MyAddress from '@/components/Address.vue'

  export default {

  components: {
    MyAddress
  },
    metaInfo: {
      title: 'Remove Google FRP lock, Android Password, Pattern Lock, Apple iCloud unlock, iCloud Bypass',
        meta: [
              { charset: 'utf-8' },
              { name: 'description', content: 'Union Repair Pro fast, reliable to remove google frp lock, restore lock, lost password, pattern lock, icloud unlock, icloud bypass and more'},
              { name: 'author', content: 'Gang Zhao, Union Repair Pro'},
            ]
          },

    data(){
      return {
        questions: [
          {
            q: 'Forgot your password?',
            a: "With cellphone makers became more aware of data security, there are many options for users to use to protect their data. However, people forgot their password, happens all the time. We \
            can help you when this happened to you."
          },
          {
            q: 'Forgot your computer password?',
            a: "We can also unlock or remove a locked computer, PC, Laptop or Apple Macbook. See <a href='/service/computer'>Computer Service</a>"
          },
          {
            q: 'What can we unlock?',
            a: "Here we are in Union Repair Pro, we are able to remove<h3>On-screen Android Password</h3><h3>On-screen Pattern Lock</h3><h3>Google FRP lock</h3>that requires the owner to unlock with logging into their google's account after a factory restore.<br /> Basically, all phones running android."
          },
          {
            q: 'How about Apple iCloud Unlock?',
            a: "<h3>iCloud Unlock</h3><h3>iCloud Bypass</h3><br> services is for someone who lost their password and original receipt. iCloud related service are very unstable and require more time and effort."
          },
          {
            q: "How long does it take?",
            a: "Usually within one hour.",
          },
          {
            q: "Is it worth it?",
            a: "Without correct password, user can not use their phone, or access important data in their phone, so absolutely yes"
          },

        ],
         banner: require("@/assets/otherunlock.jpg")
      }
    }
  }
</script>
