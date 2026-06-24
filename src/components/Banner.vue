<template>
  <div id="main-banner" :style="{ backgroundImage: 'url(/img/pizza.jpg)' }">
    <div class="banner-overlay">
      <div class="banner-content">
        <span class="banner-tag">Artesanal & Exclusivo</span>
        <h1 class="banner-title">A pizza perfeita,<br>do seu jeito</h1>
        <p class="banner-subtitle">Monte sua pizza com ingredientes selecionados e receba quentinha.</p>
        <a href="#pizza-form" class="banner-btn">Montar minha pizza</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style scoped>
#main-banner {
  background-position: center;
  background-size: cover;
  height: 560px;
  position: relative;
}

.banner-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.82) 45%, rgba(0, 0, 0, 0.2));
  display: flex;
  align-items: center;
  padding: 0 80px;
}

.banner-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 520px;
}

.banner-tag {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 12px;
  color: #fcba03;
  font-weight: 600;
}

.banner-title {
  font-size: 52px;
  font-weight: 800;
  color: #fff;
  line-height: 1.15;
  margin: 0;
}

.banner-subtitle {
  font-size: 17px;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
  margin: 0;
}

.banner-btn {
  display: inline-block;
  margin-top: 8px;
  padding: 14px 32px;
  background-color: #fcba03;
  color: #111;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  border-radius: 4px;
  width: fit-content;
  transition: background-color 0.3s, transform 0.2s;
}

.banner-btn:hover {
  background-color: #e0a800;
  transform: translateY(-2px);
}
</style>