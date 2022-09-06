import { LocalStorage } from 'quasar'

export function addAssembly (state, assembly) {
  if (!assembly.quantity) {
    assembly.quantity = 1
  }
  if (state.products.find(p => p.id === assembly.id && p.amount === assembly.amount)) {
    state.products.map(p => p.quantity = p.quantity + assembly.quantity)
  } else {
    state.products.push(assembly)
  }

  calculateAmount(state)
}

export function deleteAssembly (state, id) {
  const i = state.products.map(p => p.id).indexOf(id)
  if (i > -1) {
    state.products.splice(i, 1)
  } else if (id == 0) {
    state.products = []
  }

  calculateAmount(state)
}

function calculateAmount (state) {
  let amount = state.products.reduce((a, p) => parseFloat(a) + parseFloat(p.amount) * p.quantity, 0.0)
  state.amount = amount
  state.vat_amount = amount / 117 * 100

  saveToStorage(state)
}

export function changeQtyAssembly (state, assembly) {
  if (!assembly.quantity) {
    assembly.quantity = 1
  }
  let cartAssembly = state.products.find(p => p.id === assembly.id && JSON.stringify(p.products.filter(p => p.pivot.main && p.pivot.product_id).slice().sort()) == JSON.stringify(assembly.mainProductsIds))
  if (cartAssembly) {
    cartAssembly.quantity = assembly.quantity
  }

  calculateAmount(state)
}

function saveToStorage (state) {
  let cartInStorage = {
    assemblies: state.products.map(a => {
      return {
        id: a.id,
        params: {
          assemblyProducts: a.products.filter(p => p.pivot.main).map(p => {
            return {
              id: p.id,
              pivot: {
                qty: p.pivot.qty,
                main: p.pivot.main,
              },
            }
          }),
          quantity: a.quantity,
        },
      }
    }),
  }
  LocalStorage.set('cart', cartInStorage)
}
