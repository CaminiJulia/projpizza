<template>
  <nav id="nav">
    <router-link to="/" id="logo-url">
      <img :src="logo" :alt="alt" id="logo" />
      <span class="brand-name">Make Your Pizza</span>
    </router-link>

    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/pedidos">Pedidos</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['logo', 'alt'],
}
</script>

<style scoped>
#nav {
  background-color: #1a1a1a;
  border-bottom: 3px solid #fcba03;
  padding: 0 50px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
}

#logo-url {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

#logo {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
}

.brand-name {
  font-size: 18px;
  font-weight: 700;
  color: #fcba03;
  letter-spacing: 0.5px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  transition: 0.2s;
}

.nav-links a:hover {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.08);
}

.nav-links a.router-link-active {
  color: #fcba03;
  background-color: rgba(252, 186, 3, 0.1);
}
</style>