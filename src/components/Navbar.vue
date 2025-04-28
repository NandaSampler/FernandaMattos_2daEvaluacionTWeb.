<template>
    <nav class="navbar">
        <div class="nav-logo">
            <router-link to="/">Swapi naves</router-link>
        </div>
        <ul class="nav-links">
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/naves">Naves</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #222;
    color: white;
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
</style>