export const initialState = {
    shots: [
        {
            pictureId: 1
            ,
            description: null,
            notes: null
        }
    ]
}

export const shotReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_SHOT':
            return {
                ...state,
                shots: [...state.shots, action.payload]
            }

        case 'REMOVE_SHOT':
            return {
                ...state,
                shots: state.shots.filter(shot => shot.pictureId !== action.payload)
            }

        case 'UPDATE_ID':
            case 'SOME_ACTION':
                return { 
                    ...state, 
                    shots: state.shots.map(
                        (shot, i) => i === action.payload.initialIdx ? {...shot, pictureId: action.payload.currentId}
                                                : shot
                    )
                 }

            default: return state;
    }
    
}