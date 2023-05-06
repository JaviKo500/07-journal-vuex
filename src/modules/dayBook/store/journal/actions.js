import journalApi from "@/api/journalApi"

export const loadEntries = async( { commit } ) => {
    const {data} = await journalApi.get( '/entries.json' )
    if ( !data ) {
        commit('setEntries', [])
        return
    }
    const entries = [];
    for (const id of Object.keys( data )) {
        entries.push({
            id, 
            ...data[id]
        })
    }
    commit('setEntries', entries);
}

export const updateEntry = async({ commit }, entry  ) => {
    const { id, ...currentEntry } = entry
    await journalApi.put( `/entries/${id}.json`, currentEntry )
    commit('updateEntry', { id, ...currentEntry })
}

export const createEntry = async( { commit }, entry) => {
    const { data } = await journalApi.post('/entries.json', entry)
    const { name: id } = data
    commit('addEntry', { id, ...entry  })
    return id
}

export const deleteEntry = async( { commit }, id) => {
    await journalApi.delete(`/entries/${id}.json`)
    commit('deleteEntry', id )
}