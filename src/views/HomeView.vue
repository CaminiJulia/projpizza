<template>
  <div>
    <Banner />

    <section class="form-section">
      <div class="section-header">
        <span class="section-tag">Personalize</span>
        <h1>Monte a sua pizza</h1>
        <p class="section-subtitle">Escolha a massa, o sabor e os opcionais do seu jeito.</p>
      </div>

      <PizzaForm />
    </section>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import PizzaForm from '../components/PizzaForm.vue'

export default {
  name: 'HomeView',
  components: {
    Banner,
    PizzaForm,
  },
}
</script>

<style scoped>
.form-section {
  max-width: 780px;
  margin: 0 auto;
  padding: 60px 24px 80px;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-tag {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 12px;
  color: #fcba03;
  font-weight: 600;
}

h1 {
  font-size: 36px;
  font-weight: 800;
  color: #1a1a1a;
  margin: 8px 0 12px;
}

.section-subtitle {
  font-size: 15px;
  color: #888;
  margin: 0;
}
</style>