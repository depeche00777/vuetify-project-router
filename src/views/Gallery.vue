<template>
  <v-container class="my-15 pt-15" >
    <v-row>
      <v-col cols="12" class="text-center">
          <h2 class="text-h3">Gallery</h2>
          <p>Images > grid 복사(v-col부분만) </p>
      </v-col>

      <v-col
        v-for="n in 15"
        :key="n"
        class="d-flex child-flex"
        cols="6" sm="3" lg="2"
      >
        <v-img
          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          aspect-ratio="1"
          cover
          class="bg-grey-lighten-2"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0 text-center"              
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>