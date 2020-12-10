import React from "react"
import {connect} from 'react-redux'
import {clearSubcategoriesRequest, getCategoriesRequest, getSubcategoriesRequest} from '../redux/actions/actions'
import RouterListItem from "./RouterListItem";


class RouterListItems extends React.Component{
    render(){
        const items = this.props.categories.map((item, index) => {
            return (
                    <RouterListItem
                        key = {index}
                        id = {item.id}
                        name= {item.name}
                        category = {item}
                        getSubcategories = {this.props.getSubcategories}
                        clearSubcategories = {this.props.clearSubcategories}
                    />
                );
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

const mapStateToProps =(...state) => ({
    categories: state[0].categoryReducer.categories
});
const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(getCategoriesRequest()),
    getSubcategories: (url) => dispatch(getSubcategoriesRequest(url)),
    clearSubcategories: () => dispatch(clearSubcategoriesRequest())
})
export default connect(mapStateToProps, mapDispatchToProps)(RouterListItems) 