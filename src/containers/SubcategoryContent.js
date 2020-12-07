import React from "react"
import SubcategoryRouterItems from '../componets/subcategoryRouterItems'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

class SubcategoryContent extends React.Component{

    render(){
        return(
            <Router>
                <div>             
                    <Switch>

                        {/* додати роутинг */}
                        <Route path="">
                            <SubcategoryRouterItems path = {this.props.path}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}


export default SubcategoryContent 
