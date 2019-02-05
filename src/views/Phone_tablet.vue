<template>
  <div class="">

             <v-responsive>
<img style="width: 100%;" v-lazy="banner" alt="Phone and Tablet Repair Service, fix nearly any problems.">
      </v-responsive> 
          <v-container>
        <v-layout>
          <MyAddress></MyAddress>
        </v-layout>
 </v-container>

  <v-container>
          <h1 class="text-xs-center display-3">Phone and Tablet Service</h1>
          <v-layout xs12  row wrap align-center>
            <v-flex pa-2 xs12 sm6 v-for="(item, index) in questions" :key='index'>
              <v-card>
                <v-card-title class="title grey--text">{{item.q}}</v-card-title>
                <v-card-text v-html='item.a'>

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
            title: 'Cellphone and Tablet Repair, iPhone Glass, iPhone Battery Repair',
            meta: [
              { charset: 'utf-8' },
              { name: 'description', content: 'At Union Repair Pro, Our services range from iPhone Glass Repair,iPhone Battery, Samsung Galaxy S8 LCD replacement to complex motherboard repairs.' },
              { name: 'author', content: 'Gang Zhao, Union Repair Pro'},
            ]
          },
    data(){
      return {
        questions: [
          {
            q: 'What we have to offer?',
            a: 'At Union Repair Pro, we strive to achieve the highest quality and comprehensive service for our customers. Here\' a list of Our services<br><br><h3>Apple iPhone Glass Repair</h3><h3>iPhone Back Glass Repair</h3><h3>Samsung Galaxy S8 LCD replacement</h3><h3><a href="/service/microsoldering">Microsoldering</a></h3><h3>Water Damage Rescure</h3><br>All of this is due to our careful selection of our suppliers and strict quality control. So we have unparalleled confidence in the quality of the services we can provide. We install and replace all parts on your phone with a one-year warranty (excluding labor costs).'
          },
          {
            q: "How long does it take?",
            a: "In general, repairs that require replacement parts can be completed in as little as 20 minutes, such as replacing the iPhone battery. Of course, there are some complicated models that may take more time, but we will deliver them to the customer's hands after repairing and testing them as much as possible while maintaining the quality of the repairs.",
          },
          {
            q: "How much does it cost, and is it worth it?",
            a: "Before we start repairing, we will thoroughly test whether the phone has other problems. Moreover, the check is completely free. For those mobile phones that have problems due to falling or water ingress, such inspections are necessary. All in all, we will not start repairing without quoting and obtaining confirmation from the customer. Whether it is worth repairing will be decided by the customer."
          },
          {
            q: "The phone won't turn on after I took it swimming, what happened?",
            a: "You may have heard, someone somewhere fixed his or her water damaged phone used only a hair dryer, or by placing the phone in a plastic \
                bag filled with uncooked rice. Don't do any of those, bring it to us, The longer you wait, the more damage you have to your phone. <br /><br />\
                Conductive minerals in the water are the main culprit in the damage of mobile phones, not the water itself.\
              Even if the customer thoroughly blows the water with a hairdryer, the remaining minerals can damage the phone's main board and burn \
              the components. Seawater is even more deadly. So we need special methods and detergents to thoroughly clean the residue that is \
              invisible to the naked eye.  Then we can determine if the phone needs further repairs.<br /><br /> \
              In general, if the incoming water damaged phone still fails to turn on after our treatment, we will further confirm the problem \
              and give feedback to the customer. Please call us now, or come to our store, we will \
              give priority to the mobile phone to avoid damage"
          },
        ],
         banner: require("@/assets/cracked-phone.jpg")
      }
    }

  }
</script>

