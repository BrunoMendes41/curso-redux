const INCREMENTAR = 'contador/INCREMENTAR'
const REDUZIR = 'contador/REDUZIR'

//action creators
export const incrementar = () => ({ type: INCREMENTAR })
export const reduzir = () => ({ type: REDUZIR })

const initialState = 0

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENTAR:
      return state + 1
    case REDUZIR: 
      return state - 1
    default:
      return state   
  }
}

export default reducer