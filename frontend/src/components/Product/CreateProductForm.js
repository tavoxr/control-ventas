import React from 'react'
import { reduxForm } from 'redux-form';
import {connect} from 'react-redux'
import {addProduct} from '../../redux/actions/products'
import {Link, Redirect, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types';
import swal from 'sweetalert';


class CreateProductForm extends React.Component{
  state = {
    name: '',
    price: '',

  };
  static propTypes = {
    addLead: PropTypes.func.isRequired,
  };
  onChange  = e => this.setState({
    [e.target.name]: e.target.value
  
  
  })

  clearFields=()=>{
    this.setState({ 
      name: '',
      price: '',
    })
  }

  onSubmit = e =>{
    e.preventDefault()
    const {name, price} = this.state
    const product = {name,price}
    // let re = new RegExp('?=(\d)*(\.\d{1}|\.\d{2})')
     
    // if(re.test(price)){
      this.props.addProduct(product)
      this.setState({name:'',price:''})
      
      
      this.props.history.push('/products')
    // }else{
      // swal({
        // title: "Good job!",
        // text: "You clicked the button!",
        // icon: "success",
      // });
    // }
    
  }


    render(){
      const {name, price} = this.state
        return(
          // <div className="container">
          //   <div className="row mt-4 " >
          //     <div className="col-12 col-md-6 col-lg-6 mx-auto">
              <div className="card card-body mt-4 mb-2 ">
            <h2>Add Product</h2>
            <form onSubmit={this.onSubmit}>
              
              <div className="mb-3">
                <label className="form-label " for="nameProduct">Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  onChange={this.onChange}
                  value={name}
                  id="nameProduct"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" for="price">Price</label>
                <input
                  className="form-control"
                  type="number"
                  step="0.01"
                  name="price"
                  onChange={this.onChange}
                  value={price}
                  id="price"
                />
              </div>
           
              <div className="mb-1">
                <button type="submit" className="btn btn-primary form-control mt-3">
                  Add New Product
                </button>
              </div>
              <div className="mb-3">
                <button type="submit" to="/products" className="btn btn-danger form-control mt-3" onClick={this.clearFields}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
          //     </div>
          //   </div>
          // </div>
            
        )
    }
}


export default connect(null, {addProduct})(withRouter(CreateProductForm))