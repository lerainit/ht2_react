 import React, {PureComponent} from 'react'
 import App from './App';

 class Card extends PureComponent{

    render(){
const {name,price,url,art,backgroundColor,addFavorites,openModal} = this.props

        return(
            <>
            
            <ul>
                <li><span>Name:</span>{name}</li>
                <li><span>Price:</span>{price}</li>
                <li><img className='image' src={url}/></li>
                <li><span>Art</span>{art}</li>
                <button style={{backgroundColor}}  onClick = {addFavorites}>Add to favorites</button>
                <button onClick = {openModal}>Add cart</button>
            </ul>
            
            
            
            </>
        )
    }
 }

 export default Card;