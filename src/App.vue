<template>
  <div id="app">
    <Top />
  </div>
</template>

<script>
import Top from "./components/Top/index.vue";

export default {
  name: "App",
  components: {
    Top,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
