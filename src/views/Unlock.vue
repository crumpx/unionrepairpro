<template>
  <div class="">
               <v-responsive>
      <img style="width: 100%;" v-lazy="banner" alt="">
      </v-responsive> 
      <v-container>
        <v-layout>
          <MyAddress></MyAddress>
        </v-layout>      

       </v-container> 

           <v-container>
          <h1 class="text-xs-center display-3">Phone Unlocking Service</h1>
          <v-layout xs12  row wrap >
            <v-flex pa-2 xs12 sm6 v-for="(item,index) in questions" :key='index'>
              <v-card>
                <v-card-title class="title grey--text">{{item.q}}</v-card-title>
                <v-card-text v-html="item.a">

                </v-card-text>
              </v-card>
            </v-flex>
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
      title: 'Data Recovery Serivice',
        meta: [
              { charset: 'utf-8' },
              { name: 'description', content: 'Data recovery is a technical means to recover files deleted by human or computer failure. Data is precious photos, company reports, email jobs and more.' },
              { name: 'author', content: 'Gang Zhao, Union Repair Pro'},
            ]
          },

    data(){
      return {
        questions: [
          {
            q: 'What is carrier lock?',
            a: "In the United States, most mobile phones are locked unless specifically stated. For example, AT&amp;T's mobile phone cannot be used directly on T-Mobile, and vice versa. We can provide mobile phone unlocking services so that customers can enjoy the freedom they deserve. Under normal circumstances, unless a mobile phone lacks working conditions (different bands) on the hardware, the unlocked mobile phone is no longer limited by the software, so that the customer can switch the operator at will."
          },
          {
            q: 'What about forgotten password for my phones?',
            a: "Sometimes you just don't remember your on-screen password. Or there's google account logged in to your phone but you forgot your google password. We can help you."
          },
          {
            q: "How long does it take?",
            a: "Depending on the model of the phone and the carrier network it is in, unlocking usually takes between 2 hours and 72 hours, and some phones may take longer.",
          },
          {
            q: "Is it worth it?",
            a: "Absolutely YES!"
          },
          {
            q: "The limitations?",
            a: "Most mobile phones are unlocked without problems. But here are a few that probably won't be unlocked:<br />\
            <ol>\
            <li>The customer's mobile phone has not been paid in full. The original operator will block the mobile phone in the United States and all operators once it finds that the mobile phone without full payment has left its network.</li>\
            <li>lost or stolen phones, if the carrier receives the report, they will also blacklist the mobile phone.</li><li>Phones that claimed lost to the insurance company.</li></ol>"
          },
          {
              q: "Price?",
              a: "Price for unlocking a phone varies. We can unlock Apple's iPhone, Samsung's Galaxy&nbsp;series, Note series, economic J, A series, LG...&nbsp;Basically, all the smartphone can be unlocked. Call or bring it to get a quote."

          },
        ],
         banner: require("@/assets/phone-unlock.jpg")
      }
    }
  }
</script>
