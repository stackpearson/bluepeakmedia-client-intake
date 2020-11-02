export const addShot = shotInfo => {
    return {type: 'ADD_SHOT', payload: shotInfo}
}

export const removeShot = shotInfo => {
    return {type: 'REMOVE_SHOT', payload: shotInfo}
}

export const updateId = shotId => {
    return {type: 'UPDATE_ID', payload: shotId}
}