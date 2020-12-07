const INITIAL_STATE = {
    categories: [],
    subcategories: []
};

const categoryReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'CATEGORIES_RECEIVED':
         return {
              ...state,
              categories: action.json.categories
         }
     case 'SUBCATEGORY_RECEIVED':
          return {
               ...state,
               subcategoryId: action.json.id,
               subcategoryName: action.json.name,
               subcategories: action.json.categories
          }
    default: 
         return state;
  }
 };
 
 export default categoryReducer;