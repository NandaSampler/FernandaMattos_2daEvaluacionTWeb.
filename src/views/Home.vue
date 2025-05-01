<template>
    <div class="home-container">
      <h1>Bienvenido al mundo de Star Wars</h1>
      <img src="/src/assets/homeHalcon.png" alt="Halcón Milenario" class="imagen-halcon" />
      <p>Explora las naves espaciales más icónicas de la galaxia.</p>
      <p class="frase-galaxia">Que la fuerza te acompañe en tu viaje </p>
      <router-link to="/naves">
        <button class="boton-galaxia">Explorar Naves</button>
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
    height: 90vh;
    text-align: center;
    padding: 1rem;
    gap: 0.8rem; 
  }
  
  h1 {
    opacity: 0;
    transform: translateY(20px);
    animation: aparecer 5.5s ease forwards;
  }
  
¿
  .imagen-halcon {
    width: 450px;
    height: auto;
    animation: flotar 3s ease-in-out infinite alternate;
  }
  
  @keyframes flotar {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-10px);
    }
  }
  
  p {
    max-width: 600px;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.6; 
    color: #e0e0e0;
    text-align: center;
    opacity: 0;
    animation: aparecer 1.5s ease forwards;
    animation-delay: 1s;
    margin: 0.5rem 0; 
  }
  
  .frase-galaxia {
    color: #ffd700;
    font-style: italic;
    font-size: 1.8rem;
    animation: aparecer 2s ease forwards;
    animation-delay: 2s;
  }
  

  @keyframes aparecer {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  

  .boton-galaxia {
    margin-top: 1rem; 
    padding: 10px 20px;
    font-size: 1.2rem;
    background: linear-gradient(90deg, #00f0ff, #0077ff);
    color: white;
    border: none;
    border-radius: 12px;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
    text-transform: uppercase;
  }
  
  .boton-galaxia:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px #00f0ff;
  }
  
  .boton-galaxia:active {
    transform: scale(0.98);
  }
  </style>
  