
<template>
  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular indeterminate :size="150" :width="8" color="blue"></v-progress-circular>
    </div>
  </v-container>

  <v-container v-else grid-list-xl class="container">
    <v-toolbar dark>
      <v-toolbar-title class="width" app>
        <v-text-field
          text
          label="Search"
          placeholder="Search Your Favourite Movie"
          v-model="searchText"
          :rules="searchRules"
          required
        />
      </v-toolbar-title>
      <!-- <div class="flex-grow-1"></div> -->
      <v-btn icon @click="searchMovie">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <div id="reel">
        <img src="../image/reel.svg" />
      </div>
    </v-toolbar>
    
    <transition 
    appear
    name="bounce"
    >
    <h2>Movie Magic</h2>
    </transition>
    
    <v-layout wrap>
      <v-flex xs3 v-for="(item, index) in wholeResponse" :key="index" mt-10 ml-12>
        <v-card>
          <v-img :src="item.Poster" alt="item.Title" aspect-ratio="1" />
          <v-card-title primary-title hover>
            <h4>{{item.Title}}</h4>
          </v-card-title>
          <div class="movie-text">
            <div>Year: {{item.Year}}</div>
            <div>Type: {{item.Type}}</div>
          </div>
          <v-card-actions class="justify-center">
            <v-btn color="blue" @click="singleMovie(item.imdbID)">Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-footer class="text-center footer" app dark>
      <strong>
        Subash Pradhan
        {{ new Date().getFullYear() }}
        @Codaisseur
      </strong>
    </v-footer>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "LatestMovie",
  data() {
    return {
      wholeResponse: [],
      valid: true,
      loading: true,
      searchText: "",
      searchRules: [v => !!v || "Please Enter a Valid Movie Name"]
    };
  },
  mounted() {
    axios
      .get(
        "https://www.omdbapi.com/?s=animation&apikey=d03e9c79&page=1&type=movie&Content-Type=application/json"
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
    },

    searchMovie() {
      if (!this.searchText) {
        this.snackbar = true;
      } else {
        this.$router.push("/movie-search/" + this.searchText);
        this.searchText = "";
      }
    }
  }
};
</script>
<style lang='stylus' scoped>
.v-progress-circular {
  margin: 1rem;
}

.movie-text, h4 {
  text-align: center;
  font-family: 'Anton', sans-serif;
}

.width {
  width: 800px;
  min-width: auto;
}

#reel {
  height: 50px;
  width: 50px;
  -webkit-animation: rotation 2s infinite linear;
  margin-left: 100px;
}

@keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(359deg);
    transition: 0.9s;
  }
}

.container {
  background-image: url('../image/giphy.gif');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}

h2 {
  color: red;
  text-align: center;
  font-family: 'Kaushan Script', cursive;
  font-size: 40px;
}

.footer {
  justify-content: center;
}

.bounce-enter-active {
  animation: bounce-in .9s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
