export const getCategoriesRequest = () => ({
    type: 'GET_CATEGORIES'
});

export const getSubcategoriesRequest = (url) =>{
    return({
    type: 'GET_SUBCATEGORIES', url: url 
});}

