import  React from 'react'
import '../../styles/dashboard.css'
import {connect} from 'react-redux'
import {getTotalOrders} from  '../../redux/actions/orders'

class Dashboard extends React.Component{

    componentWillMount(){
        this.props.getTotalOrders()

    }


    render(){

        const ordersList = this.props.totalOrders.totalOrders.map(order=>{
            return(
                <tr key={order.id} >
                    <td>{order.date_ordered}</td>
                    <td>{order.get_cart_items}</td>
                    <td>${order.get_cart_total}</td>

                    
                </tr>
                )
        })


        return(
            <div className="container">
              

    <div class="row mt-4">

   
    <div class="col-12 col-md-9 col-lg-9 mx-auto">
        <div class="card card-body  ">
            <h3>My Orders</h3>
            {/* <hr style="margin: 2px 0 10px 0;"/> */}
            
            <div class="table-responsive">
                <table class="table table-hover mt-2">
                    <thead>
                        <tr class="table-info text-center">
                            {/* <th scope="col">Product</th>  */}
                            <th scope="col">Date    </th> 
                            <th scope="col">Items</th> 
                            <th scope="col">Total</th>
                            {/* <!-- <th scope="col">price</th> --> */}
                        </tr>
                    </thead>
                    <tbody>
                        {ordersList}
                        
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
        totalOrders: state.totalOrders,
        
    }
}

export default connect(ms2p,{getTotalOrders})(Dashboard)