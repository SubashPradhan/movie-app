<template>
  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular indeterminate :size="150" :width="8" color="blue"></v-progress-circular>
    </div>
  </v-container>

  <v-container v-else grid-list-xl>
    <v-layout wrap>
        <v-card class="container">
          <v-card-actions class="justify-center">
            <v-btn color="red" @click="back" class="back-button" dark>Movie Magic</v-btn>
          </v-card-actions>

          <div class="description col">
            <v-img :src="singleMovie.Poster" aspect-ratio="2.5" contain class="moviePoster col"></v-img>
            <h3>{{singleMovie.Title}}</h3>
            <div>Actors: {{singleMovie.Actors}}</div>
            <div>Released: {{singleMovie.Released}}</div>
            <div>Language: {{singleMovie.Language}}</div>
            <div>IMDB-Rating: {{singleMovie.imdbRating}}</div>
            <div>Runtime: {{singleMovie.Runtime}}</div>
            <div>Rated: {{singleMovie.Rated}}</div>
          </div>

        </v-card>
    </v-layout>

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

h3 {
  margin: 30px;
  text-decoration: underline;
  color: white;
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

.back-button:hover {
  color: green;
  transition: 0.9s ease-in-out;
  transform: scale(1.5);
  cursor: pointer;
}

.container {
  padding: 20px;
  background: url('../image/movie.jpg');
  background-position: center;
  background-size: cover;
}

.footer {
  justify-content: center;
}

@media only screen and (max-width: 1200px) {
  .container {
    background: none;
    background-color: #a88c3d;
  background-size: contain;
  background-attachment: none;
  }

  .moviePoster {
    margin-left: 0;
  }

  .description {
    text-align: center;
    color: black;
  }
}
</style>