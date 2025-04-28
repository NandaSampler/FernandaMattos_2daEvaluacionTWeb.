<template>
    <div class="home-container">
      <h1>Bienvenido al mundo de Star Wars</h1>
      <p>Explora las naves espaciales más icónicas de la galaxia.</p>
      <p class="frase-galaxia">Que la fuerza te acompañe en tu viaje 🚀</p>
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
  
  <style>
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

  h1 {
  opacity: 0;
  transform: translateY(20px);
  animation: aparecer 5.5s ease forwards;
}



@keyframes aparecer {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

p {
  opacity: 0;
  animation: aparecer 1.5s ease forwards;
  animation-delay: 1s;
}   
.frase-galaxia {
  margin-top: 1.5rem;
  color: #ffd700;
  font-style: italic;
  animation: aparecer 2s ease forwards;
  animation-delay: 2s;
}


  </style>
  