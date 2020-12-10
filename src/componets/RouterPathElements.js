import React from "react"
import {connect} from "react-redux";
import {Route} from "react-router-dom";
import {getSubcategoriesRequest} from "../redux/actions/actions";
import {idToPath} from "../helpers/helpers";
import RouterPathElement from "./RouterPathElement";

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

const mapStateToProps =(...state) => ({
    categories: state[0].categoryReducer.categories,
    subcategories: state[0].categoryReducer.subcategories ,
    customSubcategoryImg: state[0].categoryReducer.customSubcategoryImg
});
const mapDispatchToProps = dispatch => ({
    getSubcategories: (url) => dispatch(getSubcategoriesRequest(url)),
})
export default connect(mapStateToProps, mapDispatchToProps)(RouterPathElements)