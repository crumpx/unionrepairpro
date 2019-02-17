<template>
  <div class="">
      <v-responsive>
      <img style="width: 100%;" v-lazy="banner" alt="Computer Repair Services, virus removal, data recovery, networking and more...">
      </v-responsive> 

 
      <v-container>
          <h1 class="text-xs-center display-3">Computer Service</h1>
          <v-layout xs12  row wrap align-center>
            <v-flex pa-2 xs12 md8 offset-md2>
              <v-card  v-for="(item, index) in questions" :key='index'>
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
      title: 'Computer Service, PC Repair, Virus Removal',
        meta: [
              { charset: 'utf-8' },
              { name: 'description', content: 'Our pc repair, or computer repair services cover software, hardware, systems and more. From desktop computers to laptops, we offer a full range of services. For example, adware and virus removal.' },
              { name: 'author', content: 'Gang Zhao, Union Repair Pro'},
            ]
          },

    data(){
      return {
        questions: [
          {
            q: 'What are we offering?',
            a: "Our pc repair, or computer repair services cover software, hardware, systems, virus removal and more. From desktop computers to laptops, we offer a full range of services. For example<h3>General PC Repair</h3><h3>Virus Removal</h3><h3>Speed Up System Operation</h3><h3><a href='/service/datarecovery'>Data Recovery</a></h3><h3>Replace Damage Parts</h3><h3>unlock passwords that customers forget</h3> and more..."
          },
          {
            q: "How long does it take?",
            a: "There is no certain time. But generally, it is more than two hours. Prices are also plausible due to the nature of the problem. However, checking and reporting problems is provided free of charge, and customers can consider whether they want to perform repairs.",
          },
          {
            q: "I forgot my login password for my computer/My Mac asks for a code that I didn't set up...",
            a: "We can remove these passwords. Windows passowrd, Macbook's EFI lock, Macbook's iCloud lock, and more.<br />For your forgotten phone password, see <a href='/service/accountunlock'>Account Unlocking</a>",
          },
          {
            q: "Is it worth it?",
            a: "We will not start repairing without quoting and obtaining confirmation from the customer. Whether it is worth repairing will be decided by the customer."
          },
          {
            q: "Warranty for Computer service?",
            a: "We are unable to warranty the software issue. Because software failures are usually due to customer misuse. \
            For example, visits the website that caused the computer virus on the computer again, or receives an unsolicited \
            email and opens the attachment. But our technicians will analyze the causes of software problems and report them \
            to customers, reducing the chances of the same software problems.<br />As for the hardware, we will guarantee the computer we repair according to the warranty time provided by the manufacturer (excluding labor costs)." 
          },

        ],
         banner: require("@/assets/computer-service.jpg")
      }
    }
  }
</script>

<style>
a:link {
  text-decoration: none;
}
</style>
