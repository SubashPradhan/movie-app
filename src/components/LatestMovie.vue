
<script>
import axios from 'axios'

export default {
  name: 'LatestMovie',
  data () {
    return {
      wholeResponse: [],
      loading: true
    }
  },
  mounted () {
  axios
    .get('http://www.omdbapi.com/?s=horror&apikey=d03e9c79&page=1&type=movie&Content-Type=application/json')
    .then(response => {
      this.wholeResponse = response.data.Search
      this.loading = false
      console.log("DATA", this.wholeResponse)
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>

