import React from "react"
import {connect} from 'react-redux'
import {getSubcategoriesRequest} from '../actions/actions'




class SubclassRouterLinks extends React.Component{


    render(){

         let items = this.props.subcategories.map((item, index) => {
             if(item !== ''){ 

                 return (
                         <SubclassRouterLink key = {index} id = {item.id} name = {item.name}/>
                 );
                 } else return null;
         });
        return(
        <div>{items}</div>
        );
    }

}

class SubclassRouterLink extends React.Component{

    render() {
        const imgId = this.props.id.substr(this.props.id.indexOf('-')+1)
        console.log(   );
        return(
            <div style={{height: '200px', width: '200px'}}>
                <img style={{height: '150px', width: '150px'}} src={"https://assets-prd-weg.unataops.com/web/category_tile/" + imgId + ".jpg"} alt = {'error'}/>
                <div>{this.props.name}</div>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({getSubcategories: (url) => dispatch(getSubcategoriesRequest(url))})
const mapStateToProps =(...state) => ({subcategoryId: state[0].subcategoryId, subcategoryName: state[0].subcategoryName, subcategories: state[0].subcategories});
export default connect(mapStateToProps, null)(SubclassRouterLinks)
