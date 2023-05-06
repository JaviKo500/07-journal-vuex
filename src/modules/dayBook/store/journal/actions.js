import journalApi from "@/api/journalApi"

export const loadEntries = async( { commit } ) => {
    const {data} = await journalApi.get( '/entries.json' )
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
    await journalApi.put( `entries/${id}.json`, currentEntry )
    commit('updateEntry', { id, ...currentEntry })
}

export const createEntry = async( /*{ commit }*/ ) => {
    
}
