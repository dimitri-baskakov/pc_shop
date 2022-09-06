export function setSections (state, sections) {
  state.sections = sections
}

export function setAssemblies (state, assemblies) {
  state.assemblies.data = assemblies.data.map(a => {
    let categories = []
    a.products.forEach(p => {
      if (!categories[p.root_category.id]) {
        categories[p.root_category.id] = []
      }
      if (p.status == 'available' || p.status && p.status.includes('order')) {
        categories[p.root_category.id].push(p.id)
      }
    })
    a.detectStatus = a.status === 'enabled' && !categories.find(c => c && c.length == 0)
    return a
  })
  state.assemblies.meta = assemblies.meta
  state.assemblies.links = assemblies.links
}

export function setAssembly (state, assembly) {
  let categories = []
  assembly.products.forEach(p => {
    if (!categories[p.root_category.id]) {
      categories[p.root_category.id] = []
    }
    if (p.status == 'available' || p.status && p.status.includes('order')) {
      categories[p.root_category.id].push(p.id)
    }
  })
  assembly.detectStatus = assembly.status === 'enabled' && !categories.find(c => c && c.length == 0)
  state.assembly = assembly
}

export function setAssemblyProperties (state, params) {
  // console.log(params)
  // const i = state.assemblies.map(p => p.id).indexOf(params.assemblyId)
  // Vue.set(state.assemblies, i, params)
  // Object.assign(state.assemblies[i], params.properties)

  state.assemblies.data.map(p => {
    // console.log(params)
    if (p.id == params.assemblyId) {
      for (const [key, value] of Object.entries(params.properties)) {
        p[key] = value
      }
      // Object.keys(params.properties.forEach((prop) => {
      //   // p[Object.key(prop)] = value
      //   console.log(prop)
      //   // console.log(value)
      // })
    }
    return p
  })
}

export function setAssemblyProductProperties (state, params) {
  state.assembly.products.map(p => {
    for (const [key, value] of Object.entries(params.properties)) {
      if (typeof value === "boolean" && p.root_category.id === params.product.root_category.id) {
        p.pivot[key] = false
      }
      if (p.id == params.product.id) {
        p.pivot[key] = value
      }
    }
    return p
  })
}

export function setClient (state, client) {
  state.client = client
}

export function setShowConfirmDelete (state, showConfirmDelete) {
  state.showConfirmDelete = showConfirmDelete
}

export function setOrder (state, order) {
  state.order = order
}
