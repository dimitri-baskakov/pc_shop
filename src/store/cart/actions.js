import { api } from "src/boot/axios"

export function addAssemblyToCart ({ commit }, assembly) {
  commit('addAssembly', assembly)
}

export function deleteAssemblyFromCart ({ commit }, id) {
  commit('deleteAssembly', id)
}

export function changeQtyAssembly ({ commit }, assembly) {
  commit('changeQtyAssembly', assembly)
}

export async function sendPreOrder ({ commit }, payload) {
  let res = await api.post('/offers', payload)
  commit('deleteAssembly', 0)
}

export async function getSelected ({ commit,  dispatch }, payload) {
  let res = await api.post('/assemblies/selected', payload)
  if (res && res.data && res.data.length) {
    res.data.forEach(a => {
      dispatch('addAssemblyToCart', a)
    })
  }
}
