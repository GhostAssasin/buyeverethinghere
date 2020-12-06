const INITIAL_STATE = {
   
};

const itemReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case '':

         return {
              ...state,
              artists: action.json
         }
    default: 
         return state;
  }
 };
 export default itemReducer;