import {Link} from "react-router-dom";
import {idToPath} from "../helpers/helpers";
import React from "react";

export default function RouterListItem (props) {
    const getSubcategory = () => {
        props.getSubcategories(props.category._links[0].href);
        props.clearSubcategories();
    }
    return(
        <li style = {{display: 'inline'}}>
            <Link
                onClick={getSubcategory}
                style = {{textDecoration: 'none'}}
                to={"/" + idToPath(props.name) }
            > | {props.name} | </Link>
        </li>
    );
}
