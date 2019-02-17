<template>
  <div class="">
        <v-responsive>
      <img style="width: 100%;" v-lazy="banner" alt="Microsoldering Service is highly precious operation done on electronics.">
      </v-responsive>  
      <v-container>
            <h1 class="text-xs-center display-3">Micro-soldering Service</h1>
          <v-layout xs12  row wrap align-center>
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
      title: 'Microsoldering Serivce',
        meta: [
              { charset: 'utf-8' },
              { name: 'description', content: 'Micro-soldering fixes sound, signal problems, no power, restart, crashes, and water damaged devices.' },
              { name: 'author', content: 'Gang Zhao, Union Repair Pro'},
            ]
          },
  

    data(){
      return {
        questions: [
          {
            q: 'What is micro soldering?',
            a: 'Micro soldering is a technique for repairing components on a motherboard. Performing micro-soldering has very high requirements for technicians. It is not just a simple replacement, but a technician who really understands how the motherboard circuit works so that he or she can operate and repair various intricacies under the microscope. More common issues include but not limited to sound problems, call problems, signal problems, no power on, automatic restart, crashes, and subsequent repairs to water damaged phones after water treatment.'
          },
          {
            q: "How long does it take?",
            a: "Because micro&nbsp;soldering is not a simple replacement of parts, most of the time the technician needs to specifically analyze the cause of the failure and find a suitable repair method. Micro soldering generally requires more time for the technician to complete. In general, repairs range from two hours to three days. The price is not fixed, but our technicians will give a rough quote after a preliminary analysis of the problem.",
          },
          {
            q: "Is it worth it?",
            a: "We will not start repairing without quoting and obtaining confirmation from the customer. Whether it is worth repairing will be decided by the customer."
          },
          {
            q: "Warranty for a micro soldering service?",
            a: "Because of the special nature of micro-soldering, repaired equipment has a chance that the same, \
            or other problems will occur for its own sake.<br />\
            In general, equipment that requires micro-welding is not 100% guaranteed to be restored to the level \
            before it was damaged. And some of the problems are caused by the manufacturer's design flaws.<br />\
            For example, the touch screen problem of Apple iPhone 6 Plus, the signal problem of iPhone 6 and the \
            audio problem of iPhone 7 Plus are caused by such design flaws. But we will do our best to deal with the problems that may arise in the future."

          },
        ],
         banner: require("@/assets/microsoldering.jpg")
      }
    }
  }
</script>
