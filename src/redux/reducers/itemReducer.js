const INITIAL_STATE = {
    currentIndex: 0,
    items : [],

   
};

const itemReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
      case 'ITEMS_RECEIVED':
         return {
              ...state,
             items: action.items
         }

      case 'CLEAR_ITEMS':

          return {
              ...state,
              items: []
          }

    default: 
         return state;
  }
 };
 export default itemReducer;