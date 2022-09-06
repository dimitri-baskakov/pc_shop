export function sections (state) {
    return state.sections
}

export function mainActions (state) {
    return state.mainActions
}

export function mainRoutes (state) {
    return state.mainRoutes
}

export function assemblies (state) {
    return state.assemblies
}

export function assembly (state) {
    return state.assembly
}

export function assemblySections (state) {
    let sections = {}
    state.assembly.products.forEach(p => {
        if (!sections[p.root_category.name.he]) {
            sections[p.root_category.name.he] = []
        }
        sections[p.root_category.name.he].push(p)
    })
    return sections

    // let products = []
    // state.assembly.products.map(p => {
    //     products[p.root_category.id] = [...products[p.root_category.id] || [], p.id]
    // })
    // return products


    // return state.assembly.products.reduce((r, a) => {
    //     r[a.root_category.id] = [...r[a.root_category.id] || [], a.id]
    //     return r
    // })
}

export function client (state) {
    return state.client
}

export function showConfirmDelete (state) {
    return state.showConfirmDelete
}

export function order (state) {
    return state.order
}
