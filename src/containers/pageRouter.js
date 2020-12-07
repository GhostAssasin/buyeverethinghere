import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import RouterListItems from '../componets/routerListItems';
import SubclassRouterLinks from "../componets/subcategoryRouterItems";


class PageRouter extends React.Component{
    render(){         
        return(
            
            <Router>
                <RouterListItems/>
                <div>               
                    <Switch>

                    
                        <Route exact path="/bakery">
                            <SubclassRouterLinks path="bakery"/>
                        </Route>

                        <Route exact path="/produce">
                            <SubclassRouterLinks path="produce"/>
                        </Route>

                        <Route exact path="/cheese">
                            <SubclassRouterLinks path="cheese"/>
                        </Route>

                        <Route exact path="/prepared_foods">
                            <SubclassRouterLinks path="prepared_foods"/>
                        </Route>

                        <Route exact path="/meat">
                            <SubclassRouterLinks path="meat"/>
                        </Route>

                        <Route exact path="/wine_beer_and_spirits">
                            <SubclassRouterLinks path="wine_beer_and_spirits"/>
                        </Route>

                        <Route exact path="/other_departments">
                            <SubclassRouterLinks path="other_departments"/>
                        </Route>

                        <Route exact path="/seafood">
                            <SubclassRouterLinks path="seafood"/>
                        </Route>
                        
                        <Route path="">
                        main
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}



export default PageRouter