import React,{PureComponent} from 'react'
import Card from './productCard'
import Modal from './Modal'
import  './App.css'
import App from './App'


class ProductPage extends PureComponent{



 render(){

 const {addCards,addFavoritesPage,products,addFavoritesFunc,openModal} = this.props

     return(
<>
   
<h2>Added cart:{addCards}</h2>
  <h2>Added favorites:{addFavoritesPage}</h2>
  {products.map(({id,name,price,art,url,addFavorites}) =><Card  id ={id}  name= {name} price ={price} art ={art} url={url} backgroundColor={addFavorites === false?'green':'blue'} addFavoritesFunc={addFavoritesFunc} openModal ={openModal} ></Card>)}
</>)
 }

}

export default ProductPage