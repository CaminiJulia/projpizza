import { ref, onMounted } from 'vue'
import { pizzaService } from '../services/pizzaService'

export function usePizzaForm() {
  const massas = ref([])
  const sabores = ref([])
  const opcionaisdata = ref([])

  const nome = ref('')
  const massa = ref('')
  const sabor = ref('')
  const opcionais = ref([])

  const msg = ref('')
  const erro = ref('')
  const loading = ref(false)

  async function carregarIngredientes() {
    try {
      const data = await pizzaService.getIngredientes()
      massas.value = data.massas
      sabores.value = data.sabores
      opcionaisdata.value = data.opcionais
    } catch (e) {
      erro.value = 'Erro ao carregar ingredientes. Verifique se o servidor está rodando.'
    }
  }

  async function criarPizza(e) {
    e.preventDefault()

    if (!nome.value || !massa.value || !sabor.value) {
      erro.value = 'Preencha nome, massa e sabor antes de continuar.'
      return
    }

    loading.value = true
    erro.value = ''

    try {
      const pedido = {
        nome: nome.value,
        massa: massa.value,
        sabor: sabor.value,
        opcionais: [...opcionais.value],
      }

      const res = await pizzaService.criarPizza(pedido)
      msg.value = `Pedido nº ${res.id} realizado com sucesso!`
      setTimeout(() => (msg.value = ''), 3000)

      nome.value = ''
      massa.value = ''
      sabor.value = ''
      opcionais.value = []
    } catch (e) {
      erro.value = 'Erro ao criar pedido. Tente novamente.'
    } finally {
      loading.value = false
    }
  }

  onMounted(carregarIngredientes)

  return { massas, sabores, opcionaisdata, nome, massa, sabor, opcionais, msg, erro, loading, criarPizza }
}
