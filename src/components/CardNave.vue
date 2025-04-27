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
.card {
  background-color: #333;
  border-radius: 10px;
  overflow: hidden;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
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
