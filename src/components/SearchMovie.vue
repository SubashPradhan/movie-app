<template>
  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular indeterminate :size="150" :width="8" color="blue"></v-progress-circular>
    </div>
  </v-container>

  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-card-title primary-title class="justify-center">
        <h2>Hello World</h2>
      </v-card-title>
    </v-layout>
  </v-container>
</template>

<script>

import axios from "axios";

export default {
  props: ["title"],
  data() {
    return {
      searchMovie: "",
      loading: true
    };
  },
  mounted() {
    axios
      .get(
        `http://www.omdbapi.com/?s=${this.title}&apikey=d03e9c79&page=1&type=movie&Content-Type=application/json`
      )
      .then(response => {
        this.wholeResponse = response.data.Search;
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>