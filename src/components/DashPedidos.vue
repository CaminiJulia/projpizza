<template>
  <div id="pizza-table">
    <Message :msg="erro" v-if="erro" type="error" />

    <div v-if="loading" class="loading-state">
      <span class="loading-spinner"></span>
      Carregando pedidos...
    </div>

    <template v-else>
      <div v-if="!pizzas.length" class="empty-state">
        <span class="empty-icon">🍕</span>
        <p>Nenhum pedido encontrado.</p>
      </div>

      <template v-else>
        <div id="pizza-table-heading">
          <div class="col-id">#</div>
          <div class="col">Cliente</div>
          <div class="col">Massa</div>
          <div class="col">Sabor</div>
          <div class="col">Opcionais</div>
          <div class="col">Ações</div>
        </div>

        <div
          class="pizza-table-row"
          v-for="pizza in pizzas"
          :key="pizza.id"
        >
          <div class="col-id order-number">{{ pizza.id }}</div>
          <div class="col">{{ pizza.nome }}</div>
          <div class="col">{{ pizza.massa }}</div>
          <div class="col">{{ pizza.sabor }}</div>
          <div class="col opcionais">
            <span
              v-for="(opcional, index) in pizza.opcionais"
              :key="index"
              class="tag"
            >
              {{ opcional }}
            </span>
            <span v-if="!pizza.opcionais.length" class="none">—</span>
          </div>
          <div class="col actions">
            <select
              class="status-select"
              :class="statusClass(pizza.status)"
              @change="updatePizza($event, pizza.id)"
            >
              <option
                v-for="s in status"
                :key="s.id"
                :value="s.tipo"
                :selected="pizza.status === s.tipo"
              >
                {{ s.tipo }}
              </option>
            </select>
            <button class="delete-btn" @click="deletePizza(pizza.id)" title="Cancelar pedido">
              ✕
            </button>
          </div>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
import { usePedidos } from '../composables/usePedidos'
import Message from './Message.vue'

export default {
  name: 'DashPedidos',
  components: { Message },
  setup() {
    return usePedidos()
  },
  methods: {
    statusClass(status) {
      const map = {
        'Solicitado': 'status-solicitado',
        'Em produção': 'status-producao',
        'Finalizado': 'status-finalizado',
      }
      return map[status] || ''
    }
  }
}
</script>

<style scoped>
#pizza-table {
  max-width: 1200px;
  margin: 0 auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  overflow: hidden;
}

/* Cabeçalho */
#pizza-table-heading {
  display: flex;
  align-items: center;
  background-color: #1a1a1a;
  color: #fcba03;
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 14px 20px;
}

/* Linhas */
.pizza-table-row {
  display: flex;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.2s;
}

.pizza-table-row:last-child {
  border-bottom: none;
}

.pizza-table-row:hover {
  background-color: #fafafa;
}

/* Colunas */
.col-id {
  width: 5%;
  font-weight: 700;
  color: #999;
  font-size: 13px;
}

.col {
  width: 19%;
  font-size: 14px;
  color: #333;
}

/* Opcionais como tags */
.opcionais {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.tag {
  background: #f0f0f0;
  color: #555;
  font-size: 11px;
  padding: 3px 8px;
  border-radius: 20px;
}

.none {
  color: #ccc;
}

/* Ações */
.actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.status-select {
  padding: 7px 10px;
  border-radius: 20px;
  border: none;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  appearance: none;
  text-align: center;
}

.status-solicitado {
  background-color: #fff3cd;
  color: #856404;
}

.status-producao {
  background-color: #cce5ff;
  color: #004085;
}

.status-finalizado {
  background-color: #d4edda;
  color: #155724;
}

.delete-btn {
  background: none;
  border: 1.5px solid #ddd;
  color: #aaa;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 13px;
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete-btn:hover {
  border-color: #e74c3c;
  color: #e74c3c;
  background-color: #fff5f5;
}

/* Loading */
.loading-state {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 60px;
  color: #888;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid #eee;
  border-top-color: #fcba03;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Empty state */
.empty-state {
  text-align: center;
  padding: 60px;
  color: #aaa;
}

.empty-icon {
  font-size: 48px;
  display: block;
  margin-bottom: 12px;
}
</style>