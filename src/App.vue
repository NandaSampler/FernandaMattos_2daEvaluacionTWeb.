<template>
  <div id="app">
    <Navbar />
    <main>
      <router-view />
    </main>
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

/* ✅ Ajustamos bien el contenido principal */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* 🎯 El main ahora sí respeta el espacio del navbar */
main {
  flex: 1;
  padding-top: 90px; /* Ajustado para tu navbar fijo */
}
</style>
