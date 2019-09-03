<template>
  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular indeterminate :size="150" :width="8" color="blue"></v-progress-circular>
    </div>
  </v-container>

  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-card>
        <v-img :src="singleMovie.Poster" aspect-ratio="2.5" contain></v-img>
        <v-card-title primary-title class="justify-center">
          <div class="description">
            <h3>{{singleMovie.Title}}</h3>
            <div>Year: {{singleMovie.Year}}</div>
            <div>Rated: {{singleMovie.Rated}}</div>
            <div>IMDB-Rating: {{singleMovie.imdbRating}}</div>
            <div>Actors: {{singleMovie.Actors}}</div>
            <div>Description: {{singleMovie.Plot}}</div>
          </div>
        </v-card-title>
        <v-card-actions class="justify-center">
          <v-btn color="blue" @click="back">Back to Homepage</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      singleMovie: "",
      loading: true
    };
  },
  mounted() {
    axios
      .get(
        `http://www.omdbapi.com/?apikey=d03e9c79&i=${this.id}&Content-Type=application/json`
      )
      .then(response => {
        this.singleMovie = response.data;
        this.loading = false;
        console.log("SingleMovie", this.singleMovie);
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    back() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang='stylus' scoped>
.v-progress-circular {
  margin: 1rem;
}

.description {
  text-align: center;
  font-family: 'Anton', sans-serif;
}
</style>