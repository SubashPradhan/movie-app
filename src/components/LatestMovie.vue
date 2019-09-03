
<template>
  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular indeterminate :size="150" :width="8" color="blue"></v-progress-circular>
    </div>
  </v-container>

  <v-container v-else grid-list-lg>
    <v-toolbar>
      <v-app-bar-nav-icon />
      <v-toolbar-title>
        <v-text-field
          text
          label="Search"
           />
      </v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
    <v-layout wrap>
      <v-flex xs4 v-for="(item, index) in wholeResponse" :key="index" mb-4>
        <v-card>
          <v-img :src="item.Poster" alt="item.Title" aspect-ratio="2" />
          <v-card-title primary-title hover>
            <div class="movie-text">
              <h4> {{item.Title}}</h4>
              <div>Year: {{item.Year}}</div>
              <div>Type: {{item.Type}}</div>
            </div>
          </v-card-title>
          <v-card-actions class="justify-center">
            <v-btn color="blue" @click="singleMovie(item.imdbID)">Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "LatestMovie",
  data() {
    return {
      wholeResponse: [],
      loading: true
    };
  },
  mounted() {
    axios
      .get(
        "http://www.omdbapi.com/?s=animation&apikey=d03e9c79&page=1&type=movie&Content-Type=application/json"
      )
      .then(response => {
        this.wholeResponse = response.data.Search;
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    singleMovie(id) {
      this.$router.push("/movie/" + id);
    }
  }
};
</script>
<style lang='stylus' scoped>
.v-progress-circular {
  margin: 1rem;
}

.movie-text {
  text-align: center;
  height: align-self auto;
  font-family: 'Anton', sans-serif;
}
</style>
