const INITIAL_STATE = {
   categories: []
};

const categoryReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'CATEGORIES_RECEIVED':
         return {
              ...state,
              categories: action.json.categories
         }
    default: 
         return state;
  }
 };
 
 export default categoryReducer;