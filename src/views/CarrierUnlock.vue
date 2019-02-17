<template>
  <div class="">
               <v-responsive>
      <img style="width: 100%;" v-lazy="banner" alt="Phone Unlock Service, Att,T-mobile, Sprint and more">
      </v-responsive> 
           <v-container>
          <h1 class="text-xs-center display-3">Phone Unlocking Service</h1>
          <v-layout xs12  row wrap >
            <v-flex pa-2 xs12 md8 offset-md2>
              <v-card v-for="(item,index) in questions" :key='index'>
                <v-card-title class="title grey--text">{{item.q}}</v-card-title>
                <v-card-text v-html="item.a">

                </v-card-text>
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
      title: ' Samsung S8 unlock, Samsung S9 unlock, iPhone unlock, phone unlock',
        meta: [
              { charset: 'utf-8' },
              { name: 'description', content: 'Union Repair Pro fast, reliable to phone unlock service, Samsung S8 unlock, Samsung S9 unlock, Apple iPhone unlock' },
              { name: 'author', content: 'Gang Zhao, Union Repair Pro'},
            ]
          },

    data(){
      return {
        questions: [
          {
            q: 'What is carrier lock?',
            a: "In the United States, most mobile phones are locked unless specifically stated. For example, AT&amp;T's mobile phone cannot be used directly on T-Mobile, and vice versa. We can provide mobile phone unlocking services through<br><br><h3>Obtaining Network Unlock Code</h3><h3>Unlocking Chip</h3><h3>Special Equipment</h3><br> so that customers can enjoy an <h3 style='display: inline;'>unlocked mobile phones</h3>.  Under normal circumstances, unless a mobile phone lacks working conditions (different bands) on the hardware, the unlocked mobile phone is no longer limited by the software, so that the customer can switch the operator at will."
          },
          {
            q: 'Some of our most popular unlocking service',
            a: "<h3>Samsung S8 Unlock</h3><h3>Samsung S9 Unlock</h3><h3>Apple iPhone Unlock</h3><h3>Any GSM Phone Unlock</h3><br>from AT&T, T-Mobile, Sprint, MetroPCS and more"
          },
          {
            q: 'Can every phone in the market be unlocked?',
            a: "Short answer: Yes and no.<br /><br />Some companies will not only lock their phone, but they will phsically remove, or block \"bands\" in hardware level. After unlocking, these phones might not work with some carriers because they are incompatible with the carrier's system. We will inspect the phone before unlocking it."
          },
          {
            q: 'What about forgotten password for my phones?',
            a: "We can help you with our <a href='/service/otherunlock'>Account Unlocking Service</a>." 
          },
          {
            q: "How long does it take?",
            a: "Depending on the model of the phone and the carrier network it is in, unlocking usually takes between 2 hours and 72 hours, and some phones may take longer. Phones require unlock with network unlock code will need approval and might take up 24 hours.",
          },
          {
            q: "Is it worth it?",
            a: "Absolutely YES!"
          },
          {
            q: "The limitations?",
            a: "Most mobile phones are unlocked without problems. But here are a few that probably won't be unlocked:<br />\
            <ol>\
            <li>The customer's mobile phone has not been paid in full. The original operator will block the mobile phone in the United States and all operators once it finds that the mobile phone without full payment has left its network.</li><br>\
            <li>lost or stolen phones, if the carrier receives the report, they will also blacklist the mobile phone.</li><br><li>Phones that claimed lost to the insurance company.</li></ol>"
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
