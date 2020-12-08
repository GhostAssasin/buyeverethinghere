import React from "react"
import {connect} from "react-redux";
import {Route} from "react-router-dom";
import SubclassRouterLinks from "./subcategoryRouterItems";
import {getSubcategoriesRequest} from "../actions/actions";


class RouterPathElements extends React.Component{
    render() {
        let items = this.props.categories.map((item, index) => {
            const path = '/' + item.name.toLowerCase().replace(/\s/g, '_').replace(',', '').replace('&', 'and') ;
                return (<RouterPathElement key = {index} id = {item.id} path = {path} category = {item} subcategories = {this.props.subcategories} getSubcategories = {this.props.getSubcategories} />);
        });
        return(
            <div>
                {items}
                <Route exact path = "/wishlist">

                </Route>

                <Route exact path = "/wishlist">

                </Route>

                <Route exact path="/">
                    Welcome page here
                </Route>
            </div>
        );
    }
}

class RouterPathElement extends React.Component{
    componentDidMount() {
        this.props.getSubcategories(this.props.category._links[0].href)
    }
    render() {
        let items = this.props.subcategories.map((item, index) => {
            const path = this.props.path +  '/' + item.name.toLowerCase().replace(/\s/g, '_').replace(',', '').replace('&', 'and') ;
            return (<RouterPathSubElement key = {index} id = {item.id} path = {path} />);
        });

        return(
            <div>
            <Route exact path = {this.props.path}>
                <SubclassRouterLinks path={this.props.path}/>
            </Route>
            {items}
            </div>
        );
    }
}

class RouterPathSubElement extends React.Component{
    render() {
        return(
            <Route exact path = {this.props.path}>
                {this.props.id}
            </Route>

        );
    }
}


const mapDispatchToProps = dispatch => ({getSubcategories: (url) => dispatch(getSubcategoriesRequest(url))})
const mapStateToProps =(...state) => ({categories: state[0].categories,  subcategories: state[0].subcategories , customSubcategoryImg: state[0].customSubcategoryImg});
export default connect(mapStateToProps, mapDispatchToProps)(RouterPathElements)