<template>
  <div class="planetas-container">
    <h1>Planetas del universo Star Wars</h1>

    <div v-if="loading" class="cargando-contenedor">
      <div class="loader"></div>
      <p class="texto-cargando">Cargando planetas...</p>
    </div>

    <div v-else>
      <CarruselPlaneta />
    </div>

    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>
  
<script>
import CarruselPlaneta from '../components/CarruselPlaneta.vue'

export default {
  name: 'Planeta',
  components: { CarruselPlaneta },
  data() {
    return {
      loading: true,
      error: null
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
</script>
  
  <style scoped>
  .planetas-container {
    text-align: center;
    padding: 2rem;
  }
   
  h1 {
    font-size: 3rem;
    color: #ffffff;
    text-shadow: 0 0 10px #00a6ffc8, 0 0 20px #00a6ffc8, 0 0 30px #00a6ffc8;
    animation: aparecer 1.5s ease forwards, glow 2s infinite alternate;
    margin-bottom: 2rem;
    font-family: 'StarJedi', sans-serif;
  }

  @keyframes aparecer {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}


@keyframes glow {
  from {
    text-shadow: 0 0 5px #2939b4, 0 0 10px #2939b4, 0 0 15px #2939b4;
  }
  to {
    text-shadow: 0 0 20px #2939b4, 0 0 30px #2939b4, 0 0 40px #2939b4;
  }
}


  </style>
  