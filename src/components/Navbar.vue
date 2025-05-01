<template>
  <nav class="navbar">
    <div class="nav-content">
      <!-- Logo y botón en un mismo contenedor -->
      <div class="nav-left">
        <router-link to="/" class="nav-logo">Swapi Naves</router-link>
        <button class="menu-toggle" @click="toggleMenu">☰</button>
      </div>

      <!-- Enlaces -->
      <ul class="nav-links" :class="{ open: menuAbierto }">
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/naves">Naves</router-link></li>
        <li><router-link to="/planetas">Planetas</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      menuAbierto: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuAbierto = !this.menuAbierto;
    }
  }
}
</script>

<style scoped>
.navbar {
  width: 100%;
  background-color: #222;
  color: white;
  position: fixed;
  top: 0;
  z-index: 1000;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

/* Contenedor del logo y botón */
.nav-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-logo {
  font-family: 'StarJedi', sans-serif;
  font-size: 2rem;
  letter-spacing: 2px;
  color: #ffd700;
  text-decoration: none;
}

.menu-toggle {
  display: none;
  font-size: 2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

/* Enlaces normales */
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
}

.nav-links a:hover {
  color: #ffd700;
  transform: scale(1.1);
  transition: all 0.3s ease;
}

.nav-links .router-link-active {
  color: #ffd700;
  font-weight: bold;
  border-bottom: 2px solid #ffd700;
}

/* Responsive */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #111;
    padding: 1rem;
    display: none;
  }

  .nav-links.open {
    display: flex;
  }
}
</style>
