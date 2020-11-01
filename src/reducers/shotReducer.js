export const initialState = {
    shots: [
        {
            pictureId: 1,
            description: 'a description',
            notes: 'notes'
        }
    ]
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