import  React from 'react'
import '../../styles/dashboard.css'

class Dashboard extends React.Component{
    render(){
        return(
            <div className="container">
                <div class="row my-3">
    <div class="col-12 col-md-4">

        <div class="card text-center mb-3" id="total-orders">
            <div class="card card-header">
                <h5>Total Orders</h5>
            </div>
            <div class="card card-body">
                <h4></h4>

        </div>
        </div>
    </div>
    <div class="col-12 col-md-4">

        <div class="card text-center mb-3" id="orders-delivered">
            <div class="card card-header">
                <h5 class="card-title">Orders Delivered</h5>

            </div>
            <div class="card card-body">
                <h4></h4>

        </div>
        </div>
    </div>
    <div class="col-12 col-md-4">

        <div class="card text-center mb-3" id="orders-pending">
            <div class="card card-header" >
                <h5 class="card-title"> Orders Pending</h5>

            </div>
            <div class="card card-body">
                <h4></h4>
        </div>
        </div>
    </div>

</div>

<div class="row ">


    <div className="col-12  col-md-6 col-lg-4">
        <div className="card card-body mb-2 ">
            <h3>Customers</h3>
            {/* <hr style="margin: 2px 0 10px 0;"/> */}


             <a class="btn btn-primary  w-100"  href="">Create Customer</a>

            <div class="table-responsive">

            
            <table class="table table-hover mt-2">
                <thead>
                    <tr class="table-info text-center">
                        <th scope="col">Customer</th>
                        <th scope="col">Phone</th>
                    </tr>

                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
        </div>
    </div>

    <div class="col-12 col-md-6 col-lg-8">
        <div class="card card-body  ">
            <h3>Last 5 Orders</h3>
            {/* <hr style="margin: 2px 0 10px 0;"/> */}
            
            <div class="table-responsive">
                <table class="table table-hover mt-2">
                    <thead>
                        <tr class="table-info text-center">
                            <th scope="col">Product</th> 
                            <th scope="col">Date    </th> 
                            <th scope="col">Status</th> 
                            <th scope="col">Delete</th>
                            {/* <!-- <th scope="col">price</th> --> */}
                        </tr>
                    </thead>
                    <tbody>
                        
                        
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


export default Dashboard