 import React, {PureComponent} from 'react'
 import App from './App';

 class Card extends PureComponent{

    render(){
const {name,price,url,art,backgroundColor,addFavoritesFunc,openModal,id} = this.props

        return(
            <>
            
            <ul>
                <li><span>Name:</span>{name}</li>
                <li><span>Price:</span>{price}</li>
                <li><img className='image' src={url}/></li>
                <li><span>Art</span>{art}</li>
                <button className='favorites_btn' style={{backgroundColor}}  onClick = {()=>addFavoritesFunc(id)}>Add to favorites</button>
                <button  className='addCart_btn' onClick = {()=>{openModal(id)}}>Add cart</button>
            </ul>
            
            
            
            </>
        )
    }
 }

 export default Card;