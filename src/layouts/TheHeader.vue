<template>
  <v-app-bar
        color="white"
        elevation="6"
      >
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>
          <router-link to="/">Vuetify-Router <span>App</span></router-link> 
        </v-app-bar-title>

        <v-list class="d-flex flex-grow-1">
          <v-list-item 
            v-for="(menu,idx) in menus"
            :key="idx"
            :to="menu.route"
            :title="menu.title">         
          </v-list-item>
        </v-list>


        <template v-slot:append>          
          <v-btn prepend-icon="mdi-login" color="pink-darken-1" size="small" rounded="xs" elevation="4">
            Login
          </v-btn>

          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-app-bar>

</template>

<script setup>

const menus = [
  { title:"Home", route:"/"}, 
  { title:"About us", route:"about"}, 
  { title:"Portfolio", route:"portfolio"}, 
  { title:"Gallery", route:"gallery"}, 
  { title:"Contact", route:"contact"},
]

</script>

<style lang="scss" scoped>



  .v-app-bar-title a { 
    font-size:25px;
    text-decoration: none;
    font-weight:600;
    color:gray;
    
    span {
      color:#D81B60
    }
  }
</style>