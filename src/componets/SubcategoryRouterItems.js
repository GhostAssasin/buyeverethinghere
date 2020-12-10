import React from "react"
import {connect} from 'react-redux'
import SubclassRouterLink from "./SubclassRouterLink";

class SubclassRouterLinks extends React.Component{
    render(){
         let items = this.props.subcategories.map((item, index) => {
             if(item !== null){
                 return (
                     <SubclassRouterLink
                         key = {index}
                         id = {item.id}
                         name = {item.name}
                         path = {this.props.path}
                         customSubcategoryImg = {this.props.customSubcategoryImg}
                         clearSubcategories = {this.props.clearSubcategories}
                     />
                 );
                 } else return null;
         });
        return(
        <div>{items}</div>
        );
    }
}




const mapStateToProps =(...state) => ({
    subcategoryId: state[0].categoryReducer.subcategoryId,
    subcategoryName: state[0].categoryReducer.subcategoryName,
    subcategories: state[0].categoryReducer.subcategories ,
    customSubcategoryImg: state[0].categoryReducer.customSubcategoryImg
});
export default connect(mapStateToProps, null)(SubclassRouterLinks)
