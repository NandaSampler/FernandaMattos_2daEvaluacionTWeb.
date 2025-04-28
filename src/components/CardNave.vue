<template>
  <div class="card">
    <img :src="imageUrl" alt="Imagen de la Nave" class="card-img" />
    <div class="card-body">
      <h2 class="card-title">{{ nave.name }}</h2>
      <p class="card-text">Modelo: {{ nave.model }}</p>
      <p class="card-text">Fabricante: {{ nave.manufacturer }}</p>
      <p class="card-text">Costo: {{ nave.cost_in_credits }} créditos</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardNave',
  props: {
    nave: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageUrl() {
      // Aquí podrías armar la ruta de la imagen en assets.
      // Por ahora, devolvemos una imagen placeholder.
      return new URL(`../assets/starships/millennium-falcon.jpg`, import.meta.url).href
      // Más adelante podemos hacerlo dinámico si quieres.
    }
  }
}
</script>
<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  width: 300px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.6);
  transition: all 0.4s ease;
  animation: fadeIn 1s ease forwards; /* 🎯 Aquí aplicamos la animación */
}

.card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 12px 40px rgba(255, 255, 255, 0.3);
}

.card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 1rem;
  color: white;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 1rem;
  margin: 0.3rem 0;
}
</style>

