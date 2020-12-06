import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import RouterListitems from './routerListItems';


class PageRouter extends React.Component{
    render(){         
        return(
            
            <Router>
                <RouterListitems/>
                <div>               
                    <Switch>

                    <Route path="">
                        main
                        </Route>
                        <Route path="/bakery">
                        bakery
                        </Route>

                        <Route path="/produce">
                        produce
                        </Route>

                        <Route path="/cheese">
                        cheese
                        </Route>

                        <Route path="/prepared_foods">
                        prepared_foods
                        </Route>

                        <Route path="/meat">
                        meat
                        </Route>

                        <Route path="/wine_beer_and_spirits">
                        wine_beer_and_spirits
                        </Route>

                        <Route path="/other_departments">
                        wine_beer_and_spirits
                        </Route>

                        <Route path="/seafood">
                        seafood
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}



export default PageRouter