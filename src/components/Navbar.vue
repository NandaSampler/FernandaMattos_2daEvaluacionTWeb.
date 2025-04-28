<template>
    <nav class="navbar">
      <div class="nav-content"> <!-- 🚀 Nuevo contenedor -->
        <div class="nav-logo">
          <router-link to="/">Swapi Naves</router-link>
        </div>
        <ul class="nav-links">
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/naves">Naves</router-link></li>
        </ul>
      </div>
    </nav>
  </template>
  

<script>
export default {
    name: 'Navbar'
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

/* 🚀 Nuevo: centramos el contenido */
.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo a {
  font-family: 'StarJedi', sans-serif;
  font-size: 2rem;
  letter-spacing: 2px;
  color: #ffd700;
  text-decoration: none;
}

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
  .nav-content {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-links {
    flex-direction: column;
    align-items: center;
  }
}


</style>