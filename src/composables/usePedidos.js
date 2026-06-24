import { ref, onMounted } from 'vue'
import { pizzaService } from '../services/pizzaService'

export function usePedidos() {
  const pizzas = ref([])
  const status = ref([])
  const erro = ref('')
  const loading = ref(false)

  async function getPedidos() {
    loading.value = true
    erro.value = ''
    try {
      pizzas.value = await pizzaService.getPizzas()
    } catch (e) {
      erro.value = 'Erro ao carregar pedidos.'
    } finally {
      loading.value = false
    }
  }

  async function getStatus() {
    try {
      status.value = await pizzaService.getStatus()
    } catch (e) {
      erro.value = 'Erro ao carregar status.'
    }
  }

  async function updatePizza(event, id) {
    try {
      await pizzaService.updateStatus(id, event.target.value)
    } catch (e) {
      erro.value = 'Erro ao atualizar pedido.'
    }
  }

  async function deletePizza(id) {
    try {
      await pizzaService.deletePizza(id)
      await getPedidos()
    } catch (e) {
      erro.value = 'Erro ao cancelar pedido.'
    }
  }

  onMounted(async () => {
    await getPedidos()
    await getStatus()
  })

  return { pizzas, status, erro, loading, updatePizza, deletePizza }
}
