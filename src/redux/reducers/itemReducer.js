const INITIAL_STATE = {
    currentIndex: 0,

   
};

const itemReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
      case 'ITEMS_RECEIVED':


         return {
              ...state
         }

      case 'CLEAR_CURRENT_ITEMS':

          return {
              ...state
          }

    default: 
         return state;
  }
 };
 export default itemReducer;