import {BUY_CAKE} from './ActionType'

const initialState ={
    numberOfCakes:0
}

export const cakeReducer = (state=initialState,action) =>{
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,numberOfCakes: state.numberOfCakes+1
            }
        default:
            return state    
    }
}

//export default cakeReducer