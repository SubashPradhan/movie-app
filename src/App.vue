<template>
<div id="app">
  <router-view></router-view>
  <!-- <LatestMovie /> -->
</div>
</template>

<script>
import LatestMovie from './components/LatestMovie'

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  }),
};
</script>
