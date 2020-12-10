import React from "react"
import {connect} from "react-redux";
import {getItemsRequest, clearItemsRequest} from "../redux/actions/actions";

class BaseItem extends React.Component{
    componentDidMount() {
        this.props.clearItemsRequest();
        this.props.getItems(this.props.id);
    }

    render() {
        console.log(this.props)
        const items = this.props.items.map((item,index) => {
            return(
                <div key={index}>
                    <h4>{item.name}</h4>
                    price: {item.price}
                    rating: {item.rating}/5
                </div>


            );});
        return(
            <div>
                {items}
            </div>
        );
    }
}

const mapStateToProps =(...state) =>{
    //console.log(state);
    return({
        items: state[0].itemReducer.items
});}


const mapDispatchToProps = dispatch => ({
    clearItemsRequest: () => dispatch(clearItemsRequest()),
    getItems: (id) => dispatch(getItemsRequest(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(BaseItem)
