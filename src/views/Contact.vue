<template>
  <v-container class="my-15 pt-15" >
    <v-row>
      <v-col cols="12" class="text-center">
          <h2 class="text-h3">Contact</h2>
          <p>구글에서 원하는지역 검색후 지도메뉴> 지도퍼가기 / forms>Vuelidate -제일아래 clear버튼 삭제, 그위 send버튼 수정, checkbox삭제,select삭제 /footers</p>
      </v-col>
      <v-col cols="12" md="6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.037100914718!2d126.89021849999997!3d37.50704310000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9e5d42d7f29d%3A0xffe4fde23c3b0f9c!2z7Iug64-E66a8IO2FjO2BrOuFuOuniO2KuA!5e0!3m2!1sko!2skr!4v1702642683299!5m2!1sko!2skr" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </v-col>
      <v-col cols="12" md="6">
        <form @submit.prevent="reset">
          <v-text-field
            v-model="contactInfo.name"
            :counter="10"
            label="Name"
            required
          ></v-text-field>
<!-- {{ contactInfo.name }} -->
          <v-text-field
            v-model="contactInfo.email"
            label="E-mail"
            required
          ></v-text-field>

          <v-textarea label="Message" v-model="contactInfo.message">

          </v-textarea>

          <v-btn class="me-4" color="pink-darken-1" type="submit">
            send
          </v-btn>
        </form>
      </v-col>

    </v-row>
  </v-container>
  <Footer />
</template>

<script setup>
  import Footer from '@/components/Footers.vue'
  import { reactive,computed } from 'vue';

  const reset = computed(() => {
    contactInfo.name=""
    contactInfo.email=""
    contactInfo.message=""
  })

  const contactInfo = reactive({
    name:'',
    email: '',
    message:''
  })
</script>

<style lang="scss" scoped>

</style>