<template>
    <div class="carrusel-container">
        <button @click="anterior" class="flecha">⭠</button>
        <div class="carrusel">
            <div v-for="(planeta, index) in planetasVisibles" :key="planeta.name" class="card"
                :class="{ flipped: flippedIndex === index }" @click="toggleFlip(index)">
                <div class="card-inner">
                    <div class="card-front">
                        <img :src="getImagen(planeta.name)" alt="" />
                        <h3>{{ planeta.name }}</h3>
                    </div>
                    <div class="card-back">
                        <p><strong>Clima:</strong> {{ planeta.climate }}</p>
                        <p><strong>Población:</strong> {{ planeta.population }}</p>
                        <p><strong>Terreno:</strong> {{ planeta.terrain }}</p>
                    </div>
                </div>
            </div>
        </div>
        <button @click="siguiente" class="flecha">⭢</button>
    </div>
</template>

<script>
import { getPlanetas } from '../services/swapi'

export default {
    name: 'CarruselPlaneta',
    data() {
        return {
            planetas: [],
            startIndex: 0,
            visibleCount: 3,
            flippedIndex: null,
        }
    },
    computed: {
        planetasVisibles() {
            return this.planetas.slice(this.startIndex, this.startIndex + this.visibleCount);
        }
    },
    async mounted() {
        try {
            const { planetas } = await getPlanetas(1); // puedes agregar más páginas si lo deseas
            this.planetas = planetas;
        } catch (error) {
            console.error('Error cargando planetas:', error);
        }
    },
    methods: {
        anterior() {
            if (this.startIndex > 0) this.startIndex--;
        },
        siguiente() {
            if (this.startIndex + this.visibleCount < this.planetas.length) this.startIndex++;
        },
        toggleFlip(index) {
            this.flippedIndex = this.flippedIndex === index ? null : index;
        },
        getImagen(nombre) {
            const images = {
                Tatooine: new URL('../assets/planetas/tatooine.png', import.meta.url).href,
                Alderaan: new URL('../assets/planetas/alderaan.png', import.meta.url).href,
                Naboo: new URL('../assets/planetas/naboo.png', import.meta.url).href,
                Hoth: new URL('../assets/planetas/hoth.png', import.meta.url).href,
                Coruscant: new URL('../assets/planetas/coruscant.png', import.meta.url).href,
                Kamino: new URL('../assets/planetas/kamino.png', import.meta.url).href,
                Endor: new URL('../assets/planetas/endor.png', import.meta.url).href,
                Bespin: new URL('../assets/planetas/bespin.png', import.meta.url).href,
                'Yavin IV': new URL('../assets/planetas/yavin-IV.png', import.meta.url).href,
                Dagobah: new URL('../assets/planetas/dagobah.png', import.meta.url).href, 
            };
            return images[nombre] || new URL('../assets/planets/default.png', import.meta.url).href;
        }

    }
}
</script>


<style scoped>
.carrusel-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 2rem auto;
    overflow-x: auto;
}

.flecha {
    background: #111;
    color: yellow;
    border: none;
    font-size: 2rem;
    cursor: pointer;
}

.carrusel {
    display: flex;
    gap: 1rem;
}

.card {
    width: 200px;
    height: 260px;
    perspective: 1000px;
    cursor: pointer;
}

.card-inner {
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    position: relative;
}

.card.flipped .card-inner {
    transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-front img {
  width: 100%;
  height: 200px; 
  object-fit: cover;
  border-radius: 8px;
}

.card-front h3 {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #ffd700;
  text-shadow: 0 0 3px black;
  font-weight: normal;
}

.card-back {
    transform: rotateY(180deg);
}
</style>
