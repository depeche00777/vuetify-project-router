<template>
  <v-container class="py-15">
    <v-row class="py-15">
      <v-col cols="12" md="5" class="pt-5 pt-lg-16 px-16 px-md-0">
        <img class="aboutImg" src="./../assets/about.png" alt="">
      </v-col>

      <v-col class="pt-16 px-md-10">
        <h2 class="about-text">          
          <strong>about us</strong>
        </h2>
        <p class="mt-10 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis augue nec quam facilisis pharetra. Ut at aliquam tortor. Donec in enim volutpat, ultrices enim vel, euismod diam. Cras vel diam feugiat</p>
        
        <v-list>
          <v-list-item>
            <v-icon icon="mdi-check-all" color="pink-darken-1" class="mr-3"></v-icon>
            <v-list-item-subtitle class="d-inline"> Lorem ipsum dolor sit amet consectetur adipisicing elit"</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-icon icon="mdi-check-all" color="pink-darken-1" class="mr-3"></v-icon>
            <v-list-item-subtitle class="d-inline"> Lorem ipsum dolor sit amet consectetur adipisicing elit"</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-icon icon="mdi-check-all" color="pink-darken-1" class="mr-3"></v-icon>
            <v-list-item-subtitle class="d-inline"> Lorem ipsum dolor sit amet consectetur adipisicing elit"</v-list-item-subtitle>
          </v-list-item>
        </v-list>

        <p class="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis augue nec quam facilisis pharetra. Ut at aliquam tortor. Donec in enim volutpat.t</p>
        
      </v-col>      
    </v-row>
  </v-container>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .aboutImg { width:100%}

  .about-text { 
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

  .v-list-item { line-height:0; }


  }
</style>