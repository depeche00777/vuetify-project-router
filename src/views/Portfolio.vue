<template>
  <v-container class="my-15 pt-15" >
    <v-row>
      <v-col cols="12" class="text-center">
          <h2 class="text-h3">Portfolio</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis augue</p>
      </v-col>
      
      <v-col cols="12" class="mt-10">
        <div class="text-center">
          <v-chip class="mx-5" 
            :color=" activePf === 'webApp'  ? 'pink-darken-1': ''  "  
            @click="activePf = 'webApp' ">Web App</v-chip>
          <v-chip class="mx-5"
          :color=" activePf === 'mobileApp'  ? 'pink-darken-1': ''  "  
          @click="activePf = 'mobileApp' "
            >Mobile App</v-chip>
          <v-chip class="mx-5"
          :color=" activePf === 'desktopApp'  ? 'pink-darken-1': ''  "  
          @click="activePf = 'desktopApp' "
          >Desktop App</v-chip>
        </div>
      </v-col>

      <slot v-if="activePf === 'webApp'"> 
        <!-- slot 대신 template써도 됨 -->
        <v-col cols="12" sm="6" lg="3" v-for="(web,webindex) in webApps" :key="webindex">
        <!-- cards 중간 grid 소스 복사해서 붙여넣기, 이미지만 남기고 지움 -->
          <v-card>
            <v-img
              :src="web.image"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            >
              <v-card-title class="text-white">{{ web.title }}</v-card-title>
            </v-img>            
          </v-card>
        </v-col>
      </slot> 
      <slot v-if="activePf === 'mobileApp'"> 
        <!-- slot 대신 template써도 됨 -->
        <v-col cols="12" sm="6" lg="3" v-for="(mobile,mobileindex) in mobileApps" :key="mobileindex">
        <!-- cards 중간 grid 소스 복사해서 붙여넣기, 이미지만 남기고 지움 -->
          <v-card>
            <v-img
              :src="mobile.image"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            >
              <v-card-title class="text-white">{{ mobile.title }}</v-card-title>
            </v-img>            
          </v-card>
        </v-col>
      </slot>  
      <slot v-if="activePf === 'desktopApp'"> 
        <v-col cols="12" sm="6" lg="3" v-for="(desktop,desktopindex) in desktopApps" :key="desktopindex">
          <v-card>
            <v-img
              :src="desktop.image"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            >
              <v-card-title class="text-white">{{ desktop.title }}</v-card-title>
            </v-img>            
          </v-card>
        </v-col>
      </slot> 


    </v-row>

  </v-container>
</template>

<script setup>

  import { ref } from 'vue';
  const activePf = ref('webApp');
  const webAppIMG = 'https://miro.medium.com/v2/resize:fit:1200/0*A2DRAEH8pV4ARcO6.jpg'
  const mobileAppIMG = 'https://www.baypmtech.com/wp-content/uploads/2021/04/istock-131404860final.gif'
  const desktopAppIMG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbF9dH9m7GqXYBQhqSvlbSs5M9MPVK2jXL0w&usqp=CAU'

  
  const webApps = [
    { title: 'Web App1', image: 'https://miro.medium.com/v2/resize:fit:1200/0*A2DRAEH8pV4ARcO6.jpg' },
    { title: 'Web App2', image: webAppIMG },
    { title: 'Web App3', image: webAppIMG },
    { title: 'Web App4', image: webAppIMG },
    { title: 'Web App5', image: webAppIMG }
  ]
  const mobileApps = [
    { title: 'mobile App1', image: mobileAppIMG },
    { title: 'mobile App2', image: mobileAppIMG },
    { title: 'mobile App3', image: mobileAppIMG },
  ]
  const desktopApps = [
    { title: 'desktop App1', image: desktopAppIMG },
    { title: 'desktop App2', image: desktopAppIMG },
    { title: 'desktop App3', image: desktopAppIMG },
    { title: 'desktop App4', image: desktopAppIMG },
    { title: 'desktop App5', image: desktopAppIMG }
    ]
</script>

<style lang="scss" scoped>

</style>