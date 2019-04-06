import React, {Component}, from 'react'
import {connect} from "react-redux"

import {loadProducts} from "../../store/actions/products-list";


class ProductsList extends Component {

    componentDidMount() {
        this.props.loadProducts();
    }

    render() {

        return <Fragment>
            <div className='row'>
                {this.props.products.map(products=> {
                    return <div className ='col-xs-12 col-sm-6 col-lg-4' key={product.id}>
                        <ProductCard product={product}/>
                    </div>
                })}
            </div>
        </Fragment>
    }
}

const mapStateToProps = (state) => state.productsList;
const mapDispatchToProps = (dispatch) => ({
    loadProducts: () => dispatch(loadProducts())
});

export default connect(mapStateToProps(), mapDispatchToProps)(ProductsList);