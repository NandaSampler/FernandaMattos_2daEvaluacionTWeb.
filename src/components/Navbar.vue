<template>
    <nav class="navbar">
      <div class="nav-logo">
        <router-link to="/">SWAPI Naves</router-link>
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
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
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
    text-decoration: underline;
  }
  </style>
  