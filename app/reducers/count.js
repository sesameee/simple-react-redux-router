import { INCREASE, DECREASE } from '../constants'

const initialState = {
  number: 1
}

const update = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        number: state.number + action.amount
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - action.amount
      };
    default:
      return state;
  }
};

export default update;
