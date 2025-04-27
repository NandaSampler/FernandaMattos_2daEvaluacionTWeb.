<template>
    <div class="home-container">
      <h1>Bienvenido al Universo de Star Wars</h1>
      <p>Explora las naves espaciales más icónicas de la galaxia.</p>
      <router-link to="/naves">
        <button class="explore-button">Explorar Naves</button>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  }
  </script>
  
  <style scoped>
  .home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    text-align: center;
    padding: 1rem;
  }
  
  .explore-button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 18px;
    background-color: #0077ff;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .explore-button:hover {
    background-color: #0055aa;
  }
  </style>
  