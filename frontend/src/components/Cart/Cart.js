import React from 'react'
import { Link } from 'react-router-dom'
// import '../../styles/navbar.css'
import {connect} from 'react-redux'
import {getItems} from '../../redux/actions/items'
import {getAllUsersProducts} from '../../redux/actions/store'
import  { getOrders, processOrder}  from '../../redux/actions/orders'


class Cart extends React.Component{

    componentWillMount(){
        const {getItems, getAllUsersProducts, getOrders} = this.props
            getItems()
            getAllUsersProducts()
            getOrders()
        // this.props.getItems()
        // this.props.getAllUsersProducts()
    }

    

    newOrder=()=>{
        const {orders} = this.props

        const order =  orders.orders
        console.log('order.total', orders.orders)
        this.props.processOrder(order)

    }
    render(){
        
        const {allUsersProduct, orders} = this.props    
        
        console.log(allUsersProduct)
        const items = this.props.items.map(item=>{
             

            return(
                <tr key={item.id}  className="text-center">
                    <td>{item.get_product_name}</td>
                    <td>{item.get_price}</td>
                    <td className="align-middle"><div class="d-flex flex-row justify-content-around">{item.quantity}<div class="d-flex flex-column justify-content-center"><i class="fas fa-sort-up"></i><i class="fas fa-sort-down"></i></div></div></td>
                    <td>{item.get_total}</td>
                </tr>
                )
        })

        return(
            <div className="container">
            <div className="row mt-3">
            <div className="col-12">
                <div className="card card-body ">
                    <div className="d-grid gap-2 d-md-block">
                    <Link to="/store" className="btn btn-outline-secondary btn-inblock"><i className="fas fa-arrow-left">  Continue Shopping in the Store</i></Link>
                    </div>
                    <br/>
                    <div className="table-responsive mt-3">
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th className="text-center" scope="col"><h5>Items: <strong>{orders.orders.get_cart_items}</strong></h5></th>
                                    <th className="text-center" scope="col"><h5>Total: <strong>${orders.orders.get_cart_total}</strong></h5></th>
                                    <th scope="col" class="text-center" ><button onClick={()=>this.newOrder()} href="{% url 'checkout' %}" class="btn btn-success btn-sm">Checkout</button></th>
                                </tr>
                            </thead>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        <div className="row mt-3">
            <div className="col-12">
                <div className="card card-body d-flex justify-content-center">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr className="text-center">
                                    {/* <th></th> */}
                                    <th scope="col">Item</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items}
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
        ...state.items,
        allUsersProduct: state.allUsersProducts,
        orders: state.orders,
        processOrder: state.processOrder,
        
    }
}


export default connect(ms2p,{getItems,getAllUsersProducts, getOrders, processOrder})(Cart)