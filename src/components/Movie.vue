<template>
  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular indeterminate :size="150" :width="8" color="blue"></v-progress-circular>
    </div>
  </v-container>

  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-card class="container justify-center">
        <v-card-actions class="justify-center">
          <v-btn color="red" @click="back">Movie Magic</v-btn>
        </v-card-actions>
        <v-card-title primary-title>
          <div class="description col">
            <v-img :src="singleMovie.Poster" aspect-ratio="2.5 " contain class="moviePoster col"></v-img>
            <h3>{{singleMovie.Title}}</h3>
            <div>Year: {{singleMovie.Year}}</div>
            <div>Rated: {{singleMovie.Rated}}</div>
            <div>IMDB-Rating: {{singleMovie.imdbRating}}</div>
            <div>Actors: {{singleMovie.Actors}}</div>
            <!-- <div>Description: {{singleMovie.Plot}}</div> -->
          </div>
        </v-card-title>
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
        `https://www.omdbapi.com/?apikey=d03e9c79&i=${this.id}&Content-Type=application/json`
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
  font-family: 'Courgette', cursive;
  text-align: right;
  float: right;
  color: yellow;
}

.moviePoster {
  margin-left: 450px;
  height: auto;
}

.container {
  padding 20px
  background: url('../image/movie.jpg');
  background-position: center;
  background-size: cover;
}
</style>