<template>
  <div class="">
             <v-responsive>
      <img style="width: 100%;" src="@/assets/data-recovery.jpg" alt="">
      </v-responsive> 
          <v-container>
        <v-layout>
          <MyAddress></MyAddress>
        </v-layout>
 </v-container>

  <v-container>
          <h1 class="text-xs-center display-3">Data Recovery Service</h1>
          <v-layout xs12  row wrap align-center>
            <v-flex pa-2 xs12 sm6 v-for="item in questions" :key='item'>
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
      title: 'Data Recovery Service',
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
            q: 'What is&nbsp;data recovery service?',
            a: 'Data recovery is a technical means to recover files deleted by human or computer failure. Data is precious photos, company reports, email jobs and more. If important files are accidentally deleted without backup, the only possible way is to recover the deleted data through our technical means.'
          },
          {
            q: "How long does it take?",
            a: "Often, the time required for data recovery can be very long, and some can take up to ten days or even months to analyze and recover. Especially those hard drives and other media that are physically damaged. Of course, you can contact us at any time to get the progress.",
          },
          {
            q: "Is it worth it?",
            a: "In general, the price of the data recovery operations we are able to perform is affordable for the customer. But if the customer has very important data, such as a unique copy of the photo of a deceased relative, or very important business data, but unfortunately the media has a physical village, and our existing equipment can not progress. So in this case, we will look for a more advanced lab environment for our customers to carry out more in-depth repairs. Of course, customers have absolute power to decide whether their data is more important than the money they pay."
          },
         
        ]
      }
    }
  }
</script>
