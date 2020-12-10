import React from "react";
import {Route} from "react-router-dom";
import {idToPath} from "../helpers/helpers";
import BaseItem from "./BaseItem";
import SubclassRouterLinks from "./SubcategoryRouterItems";

export default class RouterPathElement extends React.Component{
    componentDidMount() {
        this.props.getSubcategories(this.props.category._links[0].href)
    }
    render() {
        let items = this.props.subcategories.map((item, index) => {
            return(
                <Route key ={index} exact path = {this.props.path +  '/' + idToPath(item.name)}>
                    <BaseItem id = {item.id}/>
                </Route>
            );
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