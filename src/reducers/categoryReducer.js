const INITIAL_STATE = {
    categories: [],
    subcategories: [],
    customSubcategoryImg: [
            {id: '6940-716', imgId:'650e70a2009f8e56cad2993a9a2fb26169bd4d78'},
            {id: '6940-717', imgId:'b2b4ce8fab542c7ca0e2c00cc7301721b4a2306e'},
            {id: '6940-722', imgId:'1f8f51c5e18fade80850d4a11754a1d7d26cf4e9'},
            {id: '6940-723', imgId:'cf381dc2d3b51c8d063c5126ea8ba9486bdb228c'},
            {id: '6940-725', imgId:'184be8334677deff633b28fa7744aeb61d8135b4'},
            {id: '6940-6944', imgId:'6944'},
            {id: '6940-6960', imgId:'b1bea2081f13e80d9b005defc2b4a82658dfae13'},
            {id: '6940-7222', imgId:'0a6d980fbd042dd0a8952cd9e481eb419878d996'},
            {id: '6940-7224', imgId:'4aab7f56cf56dec6fbf9eb5175a0b10ac1f3ec35'},
            {id: '6940-7241', imgId:'1f5bbe639541626b7bcdac908ad160b574d471bd'},
            {id: '7221-851', imgId:'ac9c4f4bf3a837b0cbf01d6428c7fd98707b9991'},
            {id: '7221-853', imgId:'5571ea7564207926366bbc1f8d8d704c57d56dc1'},
            {id: '7221-855', imgId:'3cf0390619b00b082bcbf6d66df891c4d6b97827'},
            {id: '7221-1034', imgId:'c31681156c04fd237b4bdf102baf5a00ba6f0223'},
            {id: '7221-1263', imgId:'00a00b0f1c02956f69ec051a0ae795e939122660'}
        ]

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
      case 'CLEAR_SUBCATEGORIES':
          return {
              ...state,
              subcategories: []
          }
    default: 
         return state;
  }
 };
 
 export default categoryReducer;