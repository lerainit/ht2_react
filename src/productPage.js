import React,{PureComponent} from 'react'
import Card from './productCard'
import Modal from './Modal'
import  './App.css'
import App from './App'


class ProductPage extends PureComponent{



 render(){

 const {addCards,addFavorites} = this.props

     return(
<>
   
<h2>Added cart:{addCards}</h2>
  <h2>Added favorites:{addFavorites}</h2>
</>)
 }

}

export default ProductPage