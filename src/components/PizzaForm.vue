<template>
  <div id="pizza-form">
    <Message :msg="msg" v-if="msg" type="success" />
    <Message :msg="erro" v-if="erro" type="error" />

    <form @submit="criarPizza">
      <div class="form-grid">

        <div class="input-container full-width">
          <label for="nome">Nome do cliente</label>
          <input
            type="text"
            id="nome"
            v-model="nome"
            placeholder="Digite o seu nome"
          />
        </div>

        <div class="input-container">
          <label for="massa">Massa</label>
          <select id="massa" v-model="massa">
            <option value="">Selecione a massa</option>
            <option v-for="m in massas" :key="m.id" :value="m.tipo">
              {{ m.tipo }}
            </option>
          </select>
        </div>

        <div class="input-container">
          <label for="sabor">Sabor</label>
          <select id="sabor" v-model="sabor">
            <option value="">Selecione o sabor</option>
            <option v-for="s in sabores" :key="s.id" :value="s.tipo">
              {{ s.tipo }}
            </option>
          </select>
        </div>

        <div class="input-container full-width">
          <label>Opcionais</label>
          <div class="checkbox-grid">
            <label
              class="checkbox-card"
              v-for="opcional in opcionaisdata"
              :key="opcional.id"
              :class="{ selected: opcionais.includes(opcional.tipo) }"
            >
              <input
                type="checkbox"
                v-model="opcionais"
                :value="opcional.tipo"
              />
              <span>{{ opcional.tipo }}</span>
            </label>
          </div>
        </div>

      </div>

      <button class="submit-btn" type="submit" :disabled="loading">
        <span v-if="loading" class="spinner"></span>
        {{ loading ? 'Enviando...' : '🍕 Criar minha pizza!' }}
      </button>
    </form>
  </div>
</template>

<script>
import { usePizzaForm } from '../composables/usePizzaForm'
import Message from './Message.vue'

export default {
  name: 'PizzaForm',
  components: { Message },
  setup() {
    return usePizzaForm()
  },
}
</script>

<style scoped>
#pizza-form {
  max-width: 680px;
  margin: 0 auto;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 28px;
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.full-width {
  grid-column: 1 / -1;
}

label {
  font-size: 13px;
  font-weight: 600;
  color: #555;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

input[type='text'],
select {
  padding: 12px 14px;
  border: 1.5px solid #e0e0e0;
  border-radius: 6px;
  font-size: 15px;
  color: #333;
  background-color: #fafafa;
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
}

input[type='text']:focus,
select:focus {
  border-color: #fcba03;
  box-shadow: 0 0 0 3px rgba(252, 186, 3, 0.15);
  background-color: #fff;
}

/* Opcionais como cards clicáveis */
.checkbox-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}

.checkbox-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border: 1.5px solid #e0e0e0;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #444;
  background-color: #fafafa;
  transition: 0.2s;
  text-transform: none;
  letter-spacing: 0;
}

.checkbox-card:hover {
  border-color: #fcba03;
  background-color: #fffbee;
}

.checkbox-card.selected {
  border-color: #fcba03;
  background-color: #fffbee;
  color: #222;
}

.checkbox-card input[type='checkbox'] {
  accent-color: #fcba03;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* Botão */
.submit-btn {
  width: 100%;
  background-color: #1a1a1a;
  color: #fcba03;
  font-weight: 700;
  font-size: 16px;
  border: none;
  padding: 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.submit-btn:hover:not(:disabled) {
  background-color: #fcba03;
  color: #1a1a1a;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(252, 186, 3, 0.3);
  border-top-color: #fcba03;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>