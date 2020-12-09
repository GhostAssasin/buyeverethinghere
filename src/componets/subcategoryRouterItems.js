import React from "react"
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {idToPath} from "../helpers/helpers";


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

class SubclassRouterLink extends React.Component{
    render() {
        let imgId = this.props.id.substr(this.props.id.indexOf('-')+1)
        if(this.props.path === '/meat' || this.props.path === '/seafood'){
            this.props.customSubcategoryImg.map((item) => (this.props.id === item.id) ? imgId = item.imgId : null);
        }
        return(
            <Link to = { this.props.path + '/' + idToPath(this.props.name)}>
                <div style={{height: '200px', width: '200px'}}>
                    <img
                        style={{height: '150px',width: '150px'}}
                        src={"https://assets-prd-weg.unataops.com/web/category_tile/" + imgId + ".jpg"}
                        alt = "error"
                        onError={(e)=>{e.target.onerror = null; e.target.src="https://assets-prd-weg.unataops.com/noimage.jpg"}}
                    />

                    <div>{this.props.name}</div>
                </div>
            </Link>
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
