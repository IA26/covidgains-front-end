import React, { Component } from 'react'

class UserProf extends Component {


    // render() {
    //     console.log(this.props.user.orders)
    //     let orderObjName = this.props.user.orders.map(e => e.equipment_orders.map(equipObj => 
    //      equipObj.equipment.name))

    //      let orderDate = this.props.user.orders.map(user => user.timeStamp)
         
    //      console.log(orderObjName)
        
    //      if (this.props.user.orders.length === 0) {
    //         return <h2>You haven't ordered anything.</h2>
    //     } else {
    //        return <div>
    //                 <h1>Welcome to your profile ,{this.props.user.username}</h1>
    //                  <h1>Your previous orders are listed down below</h1>
    //                     <li>{orderObjName}, {orderDate}</li>
    //               </div>
    //     }
    // }

    // this.props.user.orders.map(o => <li> {o.timeStamp}, {o.equipment_orders....etc} </li>)
    
    render() {
        console.log(this.props.user.orders)
        
        let list = this.props.user.orders.map(o => 
            <li className="media list-element">
                <div className="order-image">
                    <img src={o.equipment_orders.map(e => e.equipment.image)} className="mr-3 profile-image" alt={o.equipment_orders.map(e => e.equipment.name)} />
                </div>
              <div className="media-body">
                <h5 className="mt-0 mb-1">{o.equipment_orders.map(e => e.equipment.name)}</h5> 
                {o.timeStamp}
              </div>
            </li>)
        
         if (this.props.user.orders.length === 0) {
            return <div className="centered margin">
                    <h2>You haven't ordered anything.</h2>
                    <h2>Go get those gains, buy some stuff.</h2>
                  </div>
        } else {
            return <div>
                    <div className="centered centered margin">
                        <h1>Welcome to your profile, {this.props.user.username}</h1>
                        <h2>Your previous orders are listed down below</h2>
                    </div>
                     <ul className="list-unstyled">
                         {list}
                     </ul>
                  </div>
        }
    }


}

export default UserProf;
