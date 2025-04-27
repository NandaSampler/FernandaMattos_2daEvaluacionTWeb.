<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
/* Estilos generales */
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background-color: #000;
  color: white;
}
</style>
