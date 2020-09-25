  
import React, { Component } from 'react';

class EquipmentCard extends Component {

 state={
      equipments: []
     }
    
  handleClick = (e) => {
    console.log(this.props.equipment.id)
    let equipment_ids = this.props.equipment
    // console.log(equipment_ids);

    fetch("http://localhost:4001/orders", {
      method: "POST",
      headers: {
        "content-type": 'application/json',
        "Authorization": `bearer ${this.props.token}`
      },
      body: JSON.stringify({
        equipment_ids: equipment_ids
      })
    })
      .then(r => r.json())
      .then((newOrder) => {
        this.props.handlePurchaseEquipment(newOrder)
    })

}



renderCard = () => {
  console.log("hesdl")
}
  render() {
    // console.log(this.props.equipment.map (element => console.log))   
    let equipment = this.props.equipment
    let { name, image, price} = equipment

    
// console.log(this.props)

    return (
  <div className="col mb-4">
    <div className="card">
      <div style={{height: 300}}>
       <img src={image} className="card-img-top centered-image" alt={name} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
         <p className="card-text">Description is located here, don't mind me just taking a stroll around here, also hi {this.props.user.username}.</p>
         <h5 className="card-text centered">Price: ${price}</h5>
         <div className="text-center"> 
            <button className="btn btn-primary" onClick={this.handleClick}>Purchase this item</button>
         </div>
      </div>  
    </div>
  </div>
    );
  }

}

export default EquipmentCard;