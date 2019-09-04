<template>
  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular indeterminate :size="150" :width="8" color="blue"></v-progress-circular>
    </div>
  </v-container>

  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-card>
        <v-img :src="searchMovie.Poster" aspect-ratio="2.5" contain></v-img>
        <v-card-title primary-title class="justify-center">
          <div class="description">
            <h3>{{searchMovie.Title}}</h3>
            <div>Year: {{searchMovie.Year}}</div>
            <div>Rated: {{searchMovie.Rated}}</div>
            <div>IMDB-Rating: {{searchMovie.imdbRating}}</div>
            <div>Actors: {{searchMovie.Actors}}</div>
            <div>Description: {{searchMovie.Plot}}</div>
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
import LatestMovie from './LatestMovie'
export default {
  // name: 'LatestMovie',
  // components :{LatestMovie},
  props : ['searchText'],
  data() {
    return {
      text:'',
      searchMovie: '',
      loading: true
    };
  },
  mounted() {
    axios
      .get(
        `http://www.omdbapi.com/?apikey=d03e9c79&t=${this.searchText}`
      )
      .then(response => {
        this.searchMovie = response.data;
        this.loading = false;
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

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
.description {
  text-align: center;
  font-family: 'Anton', sans-serif;
}
</style>