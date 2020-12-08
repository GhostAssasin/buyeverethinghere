import React from "react"
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {clearSubcategoriesRequest, getCategoriesRequest, getSubcategoriesRequest} from '../actions/actions'

class RouterListItems extends React.Component{
    
    render(){
        let items = this.props.categories.map((item, index) => {
            if(item !== ''){
                return (
                    <RouterListItem
                        key = {index}
                        id = {item.id}
                        name= {item.name}
                        category = {item}
                        getSubcategories = {this.props.getSubcategories}
                        clearSubcategories = {this.props.clearSubcategories} />
                );
                } else return null;
        });
        return (
            <div style = {{backgroundColor: '#EEEEEE'}}>
                <nav>
                    <ul className="list-group"> {items} </ul>
                </nav>
            </div>
        ); 
        
    }

    componentDidMount(){
        this.props.getCategories();
     }
}

function RouterListItem (props) {
    const getSubcategory = () => {
        props.getSubcategories(props.category._links[0].href);
        props.clearSubcategories()}
      return(
        <li style = {{display: 'inline'}}>
          <Link
               onClick={getSubcategory}
              style = {{textDecoration: 'none'}}
              to={"/" + props.name.toLowerCase().replace(/\s/g, '_').replace(',', '').replace('&', 'and')}
          > | {props.name} | </Link>
        </li>     
      );
  }


const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(getCategoriesRequest()),
    getSubcategories: (url) => dispatch(getSubcategoriesRequest(url)),
    clearSubcategories: () => dispatch(clearSubcategoriesRequest())
})
const mapStateToProps =(...state) =>  ({categories: state[0].categories});
export default connect(mapStateToProps, mapDispatchToProps)(RouterListItems) 