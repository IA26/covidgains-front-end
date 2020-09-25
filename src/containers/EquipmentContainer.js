import React from 'react';
import EquipmentCard from './EquipmentCard'
import {Route, withRouter, Redirect} from 'react-router-dom'

const EquipmentContainer = (props) => {
  console.log(props.user)

  let arrayOfComponents = props.equipments.map( ( equipObj, index) => {
    return <EquipmentCard  equipment={equipObj} key={index} handlePurchaseEquipment={props.handlePurchaseEquipment} user={props.user}
    token={props.token}/>
  })

  return(
      <div>
        <div id="header" className="centered margin">
          <h1>Welcome to the gains, {props.user.username}</h1>
           <img src="https://cdn.discordapp.com/attachments/388021990348554255/715641598242979861/Sans_titre-2.png" alt="covid-gains"/>
          <h2>Here's a selection of our equipment</h2>
        </div>
        <div id="all-equipment" className="row row-cols-md-3 container">
            {arrayOfComponents}
        </div>
      </div>
  );
}

export default withRouter(EquipmentContainer);




