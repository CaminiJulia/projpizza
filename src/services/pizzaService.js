import { api } from './api'

export const pizzaService = {
  async getIngredientes() {
    return api.get('/ingredientes')
  },

  async getPizzas() {
    return api.get('/pizzas')
  },

  async getStatus() {
    return api.get('/status')
  },

  async criarPizza(pedido) {
    return api.post('/pizzas', { ...pedido, status: 'Solicitado' })
  },

  async updateStatus(id, status) {
    return api.patch(`/pizzas/${id}`, { status })
  },

  async deletePizza(id) {
    return api.delete(`/pizzas/${id}`)
  },
}
