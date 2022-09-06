import { api } from "src/boot/axios"
import { LocalStorage, Notify } from 'quasar'

export async function getSections ({ commit }) {
  let res = await api.get('/sections')
  let sections = (res && res.data && res.data.data) || []
  commit('setSections', sections)
}

export async function getAssemblies ({ commit }, params) {
  let res = await api.get('/assemblies', { params: params })
  let assemblies = (res && res.data) || {}
  commit('setAssemblies', assemblies)
}

export async function getAssembly ({ state, commit }, params) {
  // console.log('state.assembly.id = ', state.assembly.id)
  let assemblyProducts = JSON.parse(JSON.stringify(state.assembly.products))
  if (state.assembly.id && params.product) {
    params.assemblyProducts = assemblyProducts.map(p => {
      if(typeof(params.main) != "undefined" && params.main !== null) {
        if (
          p.root_category.id === params.product.root_category.id &&
          (
            !p.pivot.required && !p.pivot.checkbox ||
            p.pivot.required && !p.pivot.checkbox && p.pivot.max_selectable_qty === 1
          )
        ) {
          p.pivot.main = false
        }
        if (p.id === params.product.id) {
          p.pivot.main = params.main
        }
      } else if (typeof(params.qty) != "undefined" && params.qty !== null) {
        if (p.id === params.product.id) {
          p.pivot.qty = params.qty
        }
      }
      p.pivot.root_category = p.root_category
      return p
    })
  } else if (assemblyProducts.find(p => p.pivot.main)) {
    params.assemblyProducts = assemblyProducts
  }
  // console.log('params', params)
  let res = await api.post('/assemblies/' + params.id, { params })
  let assembly = { products: [], amount: 0 }
  if (res && res.data && res.data.products && res.data.products.length) {
    assembly = res.data
  }
  if (!assembly.id) {
    this.$router.push('/404')
  }
  commit('setAssembly', assembly)
}

export function setAssemblyProperties ({ commit }, params) {
  commit('setAssemblyProperties', params)
}

export function setAssemblyProductProperties ({ commit }, params) {
  commit('setAssemblyProductProperties', params)
}

export async function getClient ({ commit }, params) {
  let res = null
  try {
    res = await api.get('/clients', { params: params })
  } catch (err) {
    if (err.indexOf('404') > -1) {
      LocalStorage.remove('token')
    }
  }
  let client = (res && res.data) || {}
  // console.log(client)
  commit('setClient', client)
}

export async function getOrderAssemblies ({ commit }, params) {
  let res = await api.get('/offers/' + params.id, { params: params })
  let order = (res && res.data) || {}
  // console.log(client)
  commit('setOrder', order)
}

export async function copyToClipboard ({ commit }, payload) {
  if (!navigator.clipboard) {
    let textArea = document.createElement("textarea")
    textArea.value = payload.text
    textArea.style.top = "0"
    textArea.style.left = "0"
    textArea.style.position = "fixed"
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    try {
      let successful = document.execCommand('copy')
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err)
    }
    document.body.removeChild(textArea)
    return
  }
  try {
    await navigator.clipboard.writeText(payload.text)
  } catch (err) {
    console.error('Failed to copy: ', err)
  }

  if (payload.message) {
    Notify.create(payload.message)
  }
}

export function setShowConfirmDelete ({ commit }, payload) {
  commit('setShowConfirmDelete', payload)
}

export async function sendMessage ({ commit }, contact) {
  let res = await api.post('/clients/send-message', { params: contact })
}

export async function loginClient ({ commit }, payload) {
  let res = await api.post('/clients/login', payload)
  if (!res.data.access_token) {
    Notify.create('incorrect credentials')
  }
}

export async function logoutClient ({ commit, router }, payload) {
  // let res = await api.post('/clients/logout', payload)
  LocalStorage.remove('token')
  this.$router.push('/')
}
