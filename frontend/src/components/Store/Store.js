import React from 'react'
import {connect} from 'react-redux'
import {getAllUsersProducts} from '../../redux/actions/store'


class Store extends React.Component{
    
    componentWillMount(){
        this.props.getAllUsersProducts()
    }


    render(){
        const productsList = this.props.allUsersProducts.map(product=>{
            return(
                <tr key={product.id} >
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td><button 
                            className="btn btn-success"
                            // onClick={ deleteProduct.bind(this,product.id)}
                                >Add to Cart</button>
                    </td>
                    <td><button 
                            className="btn btn-danger"
                            // onClick={ deleteProduct.bind(this,product.id)}
                                >Delete</button>
                    </td>
                </tr>
                )
        })
        return(
            <div className="container">
                <div className="row mt-4">
                <div class="col-12 col-md-8 col-lg-8 mx-auto">
        <div class="card card-body  ">
            <h3>Store</h3>
            <hr/>
            
            <div class="table-responsive">
                <table class="table table-hover mt-2">
                    <thead>
                        <tr class="table-info text-center">
                            <th scope="col">Product</th> 
                            <th scope="col">Price    </th> 
                            <th scope="col">Add to Cart</th> 
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
        )
    }
}


const ms2p = (state)=>{
    return{
        ...state.allUsersProducts,
    
    }
}


export default connect(ms2p,{getAllUsersProducts})(Store)