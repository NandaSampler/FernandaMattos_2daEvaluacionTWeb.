<template>
  <div class="card" @click="flipped = !flipped">
    <div class="card-inner" :class="{ flipped: flipped }">
      
      <div class="card-front">
        <img :src="imagenUrl" alt="Imagen de la Nave" class="card-img" />
        <h2 class="card-title">{{ nave.name }}</h2>
      </div>

      <div class="card-back">
        <h2>{{ nave.name }}</h2>
        <p><strong>Modelo:</strong> {{ nave.model }}</p>
        <p><strong>Fabricante:</strong> {{ nave.manufacturer }}</p>
        <p><strong>Costo:</strong> {{ nave.cost_in_credits }} créditos</p>
      </div>

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
  data() {
    return {
      flipped: false
    }
  },
  computed: {
  imagenUrl() {
    const imagenes = {
      "CR90 corvette": new URL('../assets/naves/cr90-corvette.png', import.meta.url).href,
      "Star Destroyer": new URL('../assets/naves/star-destroyer.png', import.meta.url).href,
      "Sentinel-class landing craft": new URL('../assets/naves/sentinel-class-landing-craft.png', import.meta.url).href,
      "Death Star": new URL('../assets/naves/death-star.png', import.meta.url).href,
      "Y-wing": new URL('../assets/naves/y-wing.png', import.meta.url).href,
      "Millennium Falcon": new URL('../assets/naves/millennium-falcon.png', import.meta.url).href,
      "TIE Advanced x1": new URL('../assets/naves/tie-advanced-x1.png', import.meta.url).href,
      "Executor": new URL('../assets/naves/executor.png', import.meta.url).href,
      "X-wing": new URL('../assets/naves/x-wing.png', import.meta.url).href,
      

      "Rebel transport": new URL('../assets/naves/rebel-transport.png', import.meta.url).href,
      "Slave 1": new URL('../assets/naves/slave-1.png', import.meta.url).href,
      "Imperial shuttle": new URL('../assets/naves/imperial-shuttle.png', import.meta.url).href,
      "EF76 Nebulon-B escort frigate": new URL('../assets/naves/EF76-nebulon-B-escort-frigate.png', import.meta.url).href,
      "A-wing": new URL('../assets/naves/a-wing.png', import.meta.url).href,
      "Calamari Cruiser": new URL('../assets/naves/calamari-cruiser.png', import.meta.url).href,
      "B-wing": new URL('../assets/naves/b-wing.png', import.meta.url).href,
      
      "Republic Cruiser": new URL('../assets/naves/republic-cruiser.png', import.meta.url).href,
      "Droid control ship": new URL('../assets/naves/droid-control-ship.png', import.meta.url).href,
      "Naboo fighter": new URL('../assets/naves/naboo-fighter.png', import.meta.url).href,
      "Naboo Royal Starship": new URL('../assets/naves/naboo-royal-starship.png', import.meta.url).href,
      "J-type diplomatic barge": new URL('../assets/naves/j-type-diplomatic-barge.png', import.meta.url).href,
      "Scimitar": new URL('../assets/naves/scimitar.png', import.meta.url).href,
      "AA-9 Coruscant freighter": new URL('../assets/naves/aa-9-coruscant-freighter.png', import.meta.url).href,
      "Jedi starfighter": new URL('../assets/naves/jedi-starfighter.png', import.meta.url).href,  
    };
    return imagenes[this.nave.name] || new URL('../assets/starships/default.jpg', import.meta.url).href;
  }
}

}
</script>

<style scoped>
.card {
  width: 600px;
  height: 400px;
  perspective: 1000px;
  cursor: pointer;
  animation: fadeIn 1s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s, box-shadow 0.4s;
  transform-style: preserve-3d;
}

.card:hover .card-inner,
.card-inner.flipped {
  transform: rotateY(180deg) scale(1.03);
  box-shadow: 0 0 20px #00f0ff;
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}


.card-front img {
  width: 100%;
  height: 70%;
  object-fit: cover;
}

.card-front h2 {
  margin-top: 1rem;
  font-size: 1.5rem;
}


.card-back {
  transform: rotateY(180deg);
  padding: 1rem;
  text-align: center;
}

.card-back h2 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.card-back p {
  font-size: 1rem;
  margin: 0.5rem 0;
}
</style>
