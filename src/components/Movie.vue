<template>
  <v-container v-if="loading">
    <v-layout row-wrap>
      <v-flex xs-12>
        <h2>Your movie: {{singleMovie}}</h2>
      </v-flex>
    </v-layout>
  </v-container>

  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-card>
        <v-img :src="singleMovie.Poster" aspect-ratio="1"></v-img>
        <v-card-title primary-title class="justify-center">
          <div>
            <h2>{{this.singleMovie.Title}}</h2>
            <div>Year: {{this.singleMovie.Year}}</div>
            <div>Type: {{singleMovie.Type}}</div>
            <div>Rated: {{singleMovie.Rated}}</div>
            <div>IMDB-Rating: {{singleMovie.imdbRating}}</div>
            <div>Actors: {{singleMovie.Actors}}</div>
            <div>Description: {{singleMovie.Plot}}</div>
          </div>
        </v-card-title>
        <v-card-actions class="justify-center">
          <v-btn flat color="green" @click="ratings">Rating</v-btn>
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
      singleMovie: ""
    };
  },
  mounted() {
    axios
      .get(
        `http://www.omdbapi.com/?apikey=d03e9c79&i=${this.id}&Content-Type=application/json`
      )
      .then(response => {
        this.singleMovie = response.data;
        console.log("SingleMovie", this.movie);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>