import React from 'react'
import {connect} from 'react-redux'
import {getProducts, deleteProduct} from '../../redux/actions/products'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CreateProductForm from './CreateProductForm';

class Product extends React.Component{
    static propTypes = {
        leads: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired,
        deleteLead: PropTypes.func.isRequired,
      };
   
    componentWillMount(){
        this.props.getProducts()
    }
    
    render(){
        const {deleteProduct} = this.props
        const productsList = this.props.products.map(product=>{
            return(
                <tr key={product.id} >
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td><button 
                            className="btn btn-danger"
                            onClick={ deleteProduct.bind(this,product.id)}
                                >Delete</button>
                    </td>
                </tr>
                )
        })
        return(
    <div className="container">

    <div className="row mt-3">
        <div className="col-12 col-md-5 col-lg-5">
            <CreateProductForm/>
        </div>
    <div className="col-12 col-md-7 col-lg-7 mt-4 ">

        <div className="card">
            <div className="card-header">
                    <h5 className="card-title">Products</h5>
                    {/* <hr/> */}
                    {/* <Link to="/products-create" className="btn btn-success w-100">Add New Product</Link> */}
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr className="table-info">
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Delete</th>
                               
                                
                            </tr>
                        </thead>
                        <tbody>
                           {productsList}
                        </tbody>
                    </table>
                        
                </div>
                

            </div>

        </div>

    </div>

</div>
</div>

        )
    }

}

// const ms2p= state=>({
    // products: state.products.products
// })

const ms2p = (state)=>{
    return{
        ...state.products
    }
}

// const md2p={...actions}

// export default Product
export default connect(ms2p,{getProducts, deleteProduct})(Product)

