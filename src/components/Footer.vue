<template>
  <footer id="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <span class="footer-logo">🍕</span>
        <span class="footer-name">Make Your Pizza</span>
      </div>

      <p class="footer-tagline">Feito com amor, do seu jeito.</p>

      <div class="footer-divider"></div>

      <p class="footer-copy">&copy; 2026 Make Your Pizza. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
#footer {
  background-color: #1a1a1a;
  border-top: 3px solid #fcba03;
  color: #fff;
  padding: 48px 50px 32px;
  display: flex;
  justify-content: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  max-width: 400px;
  text-align: center;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-logo {
  font-size: 28px;
}

.footer-name {
  font-size: 20px;
  font-weight: 700;
  color: #fcba03;
  letter-spacing: 1px;
}

.footer-tagline {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  margin: 0;
}

.footer-divider {
  width: 40px;
  height: 2px;
  background-color: #fcba03;
  opacity: 0.4;
  margin: 4px 0;
}

.footer-copy {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.3);
  margin: 0;
}
</style>