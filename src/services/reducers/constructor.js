const initialState = {
  items: [],
};

export const constructorReducer = (state = initialState, action) => {
  return state;
  // switch (action.type) {
  //   case GET_INGREDIENTS_REQUEST: {
  //     return { ...state, itemsRequest: true };
  //   }
  //   case GET_INGREDIENTS_SUCCESS:
  //     console.log("INGRREDUCER", action.payload);
  //     return { ...state, items: action.payload };
  //   case GET_INGREDIENTS_FAILED: {
  //     return { ...state, itemsFailed: true, itemsRequest: false };
  //   }
  //   default:
  //     return state;
  // }
};
