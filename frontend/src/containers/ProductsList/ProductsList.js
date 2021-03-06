import React, {Fragment, Component} from 'react';
import {connect} from "react-redux";
import {loadProducts} from '../../store/actions/product-list';
import ProductCard from "../../components/ProductCard/ProductCard";

class ProductsList extends Component {

    componentDidMount() {
        this.props.loadProducts();
    }

    render() {

        return <Fragment>
            <div className='row'>
                {this.props.products.map(products=> {
                    return <div className ='col-xs-12 col-sm-6 col-lg-4' key={products.id}>
                        <ProductCard product={products}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);