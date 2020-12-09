import React from "react"
import {connect} from "react-redux";
import {Route} from "react-router-dom";
import SubclassRouterLinks from "./subcategoryRouterItems";
import {getSubcategoriesRequest} from "../redux/actions/actions";
import BaseItem from "./BaseItem";
import {idToPath} from "../helpers/helpers";


class RouterPathElements extends React.Component{
    render() {
        let items = this.props.categories.map((item, index) => {
                return(
                    <RouterPathElement
                        key = {index}
                        id = {item.id}
                        path = {'/' + idToPath(item.name)}
                        category = {item}
                        subcategories = {this.props.subcategories}
                        getSubcategories = {this.props.getSubcategories}
                    />);
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
            return(
                <RouterPathSubElement
                    key = {index}
                    id = {item.id}
                    path = {this.props.path +  '/' + idToPath(item.name)}
                />);
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
                <BaseItem id = {this.props.id}/>
            </Route>
        );
    }
}



const mapStateToProps =(...state) => ({
    categories: state[0].categoryReducer.categories,
    subcategories: state[0].categoryReducer.subcategories ,
    customSubcategoryImg: state[0].categoryReducer.customSubcategoryImg
});
const mapDispatchToProps = dispatch => ({
    getSubcategories: (url) => dispatch(getSubcategoriesRequest(url)),
})
export default connect(mapStateToProps, mapDispatchToProps)(RouterPathElements)