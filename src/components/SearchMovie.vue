<template>
  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular indeterminate :size="150" :width="8" color="blue"></v-progress-circular>
    </div>
  </v-container>

  <v-container v-else grid-list-xl>
    <h2>Your Movies</h2>
    <v-layout wrap>
      <v-flex xs3 v-for="(selectedMovie, index) in searchMovie" :key="index" mt-10 ml-12>
        <v-card class="col">
          <v-img :src="selectedMovie.Poster" alt="item.Title" aspect-ratio="1" />
          <v-card-title primary-title hover>
            <h4>{{selectedMovie.Title}}</h4>
          </v-card-title>
          <div class="movie-text">
            <div>Year: {{selectedMovie.Year}}</div>
            <div>Type: {{selectedMovie.Type}}</div>
          </div>
          <v-card-actions class="justify-center">
            <v-btn color="blue" @click="singleMovie(selectedMovie.imdbID)">Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-card-actions class="justify-center">
      <v-btn color="red" @click="back">Movie magic</v-btn>
    </v-card-actions>

    <v-footer class="text-center footer" app dark>
      <strong>
        Subash Pradhan
        {{ new Date().getFullYear() }}
        @Codaisseur 🤙
      </strong>
    </v-footer>
  </v-container>
</template>

<script>
import axios from "axios";
import LatestMovie from "./LatestMovie";
export default {
  props: ["searchText"],
  data() {
    return {
      text: "",
      searchMovie: [],
      loading: true
    };
  },
  mounted() {
    axios
      .get(
        `https://www.omdbapi.com/?s=${this.searchText}&apikey=d03e9c79&page=1&type=movie&Content-Type=application/json`
      )
      .then(response => {
        this.searchMovie = response.data.Search;
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    singleMovie(id) {
      this.$router.push("/movie/" + id);
    },

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
  font-family: "Anton", sans-serif;
}

.container {
  background-image: url("../image/giphy.gif");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}

h2 {
  color: red;
  text-align: center;
  font-family: "Kaushan Script", cursive;
  font-size: 40px;
}

.movie-text,
h4 {
  text-align: center;
  font-family: 'Courgette', cursive;
}

.footer {
  justify-content: center;
}
</style>