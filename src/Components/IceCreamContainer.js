import React from 'react'
import {connect, Connect} from 'react-redux'

import { buyIceCream } from './redux/IceCream/iceCreamActions'
CreamCo
function IceCreamContainer(props) {
  return (
    <div>

        <h2>NUmber of IceCreams - {props.numOfIceCreams}</h2>
        <button onClick={props.buyIceCream}> Buy IceCream</button>
    </div>
  )
}

const mapStateToProps =state =>{
    return{
        numOfIceCreams:state.numOfIceCreams
    }
}

const mapDispatchToProps=dispatch=>{
    return{
    
      buyIceCream:()=>dispatch(buyIceCream())
    } 

}



export default connect(mapStateToProps,mapDispatchToProps)( IceCreamContainer)
