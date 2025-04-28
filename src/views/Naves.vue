<template>
  <div class="naves-container">
    <h1>Naves Espaciales</h1>

    <div v-if="loading" class="cargando-contenedor">
      <div class="loader"></div>
      <p class="texto-cargando">Cargando naves...</p>
    </div>

    <div v-else>
      <div class="cards-container">
        <CardNave v-for="nave in naves" :key="nave.name" :nave="nave" />
      </div>

      <div class="pagination-info">
        <p>Página {{ page }}</p>
      </div>

      <div class="paginacion">
        <button v-if="previousPage" @click="prevPage" class="boton-secundario">
          Anterior
        </button>
        <button v-if="nextPage" @click="nextPageFunc" class="boton-secundario">
          Siguiente
        </button>
      </div>
    </div>

    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
import CardNave from '../components/CardNave.vue'
import { getNaves } from '../services/swapi'

export default {
  name: 'Naves',
  components: {
    CardNave
  },
  data() {
    return {
      naves: [],
      loading: true,
      error: null,
      page: 1,
      nextPage: null,
      previousPage: null
    }
  },
  mounted() {
    this.fetchNaves()
  },
  methods: {
    async fetchNaves() {
      this.loading = true;
      try {
        const data = await getNaves(this.page);
        this.naves = data.naves;
        this.nextPage = data.nextPage;
        this.previousPage = data.previousPage;

        if (this.page >= 3) {
          this.nextPage = null;
        }
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
    nextPageFunc() {
      if (this.nextPage && this.page < 3) { 
        this.page = this.nextPage;
        this.fetchNaves();
      }
    },
    prevPage() {
      if (this.previousPage) {
        this.page = this.previousPage;
        this.fetchNaves();
      }
    }
  }
}
</script>


<style scoped>
.naves-container {
  text-align: center;
  padding: 2rem;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
  color: #ffffff;
  text-shadow: 0 0 10px #00a6ffc8, 0 0 20px #00a6ffc8, 0 0 30px #00a6ffc8;
  animation: aparecer 1.5s ease forwards, glow 2s infinite alternate;
  margin-bottom: 2rem;
  opacity: 0;
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

.cargando-contenedor {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.loader {
  border: 6px solid rgba(255, 255, 0, 0.2);
  border-top: 6px solid #ffd700;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: girar 1s linear infinite;
}

@keyframes girar {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.texto-cargando {
  margin-top: 1rem;
  font-size: 1.2rem;
  color: yellow;
  text-align: center;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.pagination-info {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #fff;
}

.paginacion {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.error {
  margin-top: 2rem;
  font-size: 1.2rem;
  color: yellow;
}
</style>
