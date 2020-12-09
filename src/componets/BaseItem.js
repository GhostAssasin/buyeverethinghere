import React from "react"
import {connect} from "react-redux";
import {getItemsRequest} from "../redux/actions/actions";

class BaseItem extends React.Component{
    componentDidMount() {
        this.props.getItems(this.props.id)
    }

    render() {
        //console.log(this.props)
        return(
            <div>

            </div>
        );
    }
}

const mapStateToProps =(...state) => ({
   //categories: state[0].categoryReducer.categories
});


const mapDispatchToProps = dispatch => ({
    getItems: (id) => dispatch(getItemsRequest(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(BaseItem)
