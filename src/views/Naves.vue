<template>
    <div class="naves-container">
        <h1>Naves Espaciales</h1>

        <div v-if="loading" class="loading">Cargando naves...</div>

        <div v-else class="cards-container">
            <CardNave v-for="nave in naves" :key="nave.name" :nave="nave" />
        </div>

        <div class="pagination-info">
            <p>Página {{ page }}</p>
        </div>

        <div class="pagination">
            <button @click="prevPage" :disabled="!previousPage">Anterior</button>
            <button @click="nextPageFunc" :disabled="!nextPage">Siguiente</button>
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
            } catch (err) {
                this.error = err.message;
            } finally {
                this.loading = false;
            }
        },
        nextPageFunc() {
            if (this.nextPage) {
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

.pagination-info {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #fff;
}

.naves-container {
    text-align: center;
    padding: 2rem;
}

.cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
}

.pagination {
    margin-top: 2rem;
}

.pagination button {
    margin: 0 1rem;
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #0077ff;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.pagination button:disabled {
    background-color: #555;
    cursor: not-allowed;
}

.loading,
.error {
    margin-top: 2rem;
    font-size: 1.2rem;
    color: yellow;
}
</style>