import React from "react"
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {getCategoriesRequest} from '../actions/actions'

class RouterListItems extends React.Component{
    
    render(){
        console.log(this.props)
        let items = this.props.categories.map((item, index) => {
            if(item !== ''){ 
                return ( 
                    <RouterListItem key = {item.id}  id = {item.id} name= {item.name} />
                );
                } else return null;
        });
        return (
            <div style = {{backgroundColor: '#EEEEEE'}}>
                <nav>
                    <ul className="list-group"> {items} </ul>
                </nav>
            </div>
        ); 
        
    }

    componentDidMount(){
        this.props.getCategories();
     }
}

function RouterListItem (props) {
    
      return(
        <li style = {{display: 'inline'}}>
          <Link style = {{textDecoration: 'none'}} to={"/" + props.name.toLowerCase().replace(/\s/g, '_').replace(',', '').replace('&', 'and')}> | {props.name} | </Link>
        </li>     
      );
  }





const mapDispatchToProps = dispatch => ({getCategories: () => dispatch(getCategoriesRequest())})
const mapStateToProps =(...state) =>  ({categories: state[0].categories, });
export default connect(mapStateToProps, mapDispatchToProps)(RouterListItems) 