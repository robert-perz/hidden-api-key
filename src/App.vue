<template>
  <CitySearch />
</template>

<script>
import CitySearch from "./components/CitySearch.vue";

export default {
  name: "App",
  components: {
    CitySearch,
  },
};
</script>

<style lang='scss'>
@import "@/Sass/_variables.scss";

@font-face {
  font-family: "Roboto";
  src: local("Roboto"), url("../src/fonts/Roboto-Bold.ttf") format("truetype");
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  min-height: 100vh;
  background: $vp-bcg;
  display: flex;
  flex-direction: column;
}
#app {
  font-family: $font, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
