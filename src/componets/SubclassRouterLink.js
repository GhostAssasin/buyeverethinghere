import React from "react";
import {Link} from "react-router-dom";
import {idToPath} from "../helpers/helpers";

export default class SubclassRouterLink extends React.Component{
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