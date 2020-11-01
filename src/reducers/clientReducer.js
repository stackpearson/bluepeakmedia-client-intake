export const initialState = {
    client: []
}

export const clientReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_CLIENT':
            return {
                ...state,
                client: action.payload
            }

            default: return state;
    }
}