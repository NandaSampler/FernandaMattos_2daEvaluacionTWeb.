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
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background-color: #000;
  color: white;
}


#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding-top: 90px;
}

img {
  max-width: 100%;
  height: auto;
}

body {
  font-size: 16px;
  line-height: 1.5;
}

* {
  box-sizing: border-box;
}

</style>
