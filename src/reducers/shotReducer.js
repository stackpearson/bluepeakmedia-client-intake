export const initialState = {
    shots: []
}

export const shotReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_SHOT':
            return {
                ...state,
                userServices: action.payload
            }

            default: return state;
    }
}