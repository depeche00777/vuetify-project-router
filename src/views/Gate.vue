<template>
  <v-container class="py-15">
    <v-row class="py-15">
      <v-col cols="12" md="6" class="pt-5 pt-lg-16">
        <h2 class="intro-text">
          Welcome<br>
          <span>Vuetify-Router</span><br>
          <strong>Agency</strong>
        </h2>
        <p class="mt-10 mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis augue nec quam facilisis pharetra. Ut at aliquam tortor. Donec in enim volutpat, ultrices enim vel, euismod diam. Cras vel diam feugiat</p>

        <v-btn 
          color="pink-darken-1 mr-4"  
          rounded="xs" elevation="4"
          @click="$router.push('about')"
          >
          <!--    $router.push('about') 히스토리 스택에 추가
                  $router.replace('about') 히스토리 스택에 추가❌, 단순한 페이지전환
                  $router.go(-1)  한단계 이전으로 가기          -->
            
          About us
        </v-btn>
        <v-btn color="teal-darken-1" rounded="xs" elevation="4" @click="$router.push('portfolio')">
          Portfolio
        </v-btn>
      </v-col>

      <v-col class="pt-16 text-center px-16 px-lg-0">
        <img class="gateImg w-100" src="./../assets/gate.png" alt="">
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  

  .intro-text { 
    font-weight: 300;
    font-size: 3rem;
    line-height: 1.1;
    
    span { 
      font-size: 4rem;
      font-weight: bold; color: #D81B60;}
    strong {
      font-size: 3.5rem;
      text-transform: uppercase;
      font-weight: bold;
    }
    
    &:after {
      display:block; content: "";
      width:100px; height:6px;
      background: #000;
      margin-top:20px;
    } 


    }
</style>