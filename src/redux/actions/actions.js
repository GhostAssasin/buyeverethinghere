export const getCategoriesRequest = () => ({
    type: 'GET_CATEGORIES'
});

export const getSubcategoriesRequest = (url) =>{
    return({
    type: 'GET_SUBCATEGORIES', url: url 
});}

export const clearSubcategoriesRequest = () => ({
    type: 'CLEAR_SUBCATEGORIES'
});

export  const getItemsRequest = (id) => ({
    type: 'GET_ITEMS' , id: id
});

export  const getItemRequest = (id) => ({
    type: 'GET_ITEM' , id: id
});

