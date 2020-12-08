import React from "react"
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";

import RouterListItems from '../componets/routerListItems';
import RouterPathElements from "../componets/routerPathElements";


class PageRouter extends React.Component{
    render(){         
        return(
            <Router>
                <RouterListItems/>
                <div>               
                    <Switch>
                       <RouterPathElements/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default PageRouter