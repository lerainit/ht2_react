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
   
<header><h2 className='logo'>Fashion store</h2><div className='container'><img className='cart' src="https://toppng.com/uploads/preview/shopping-cart-11530997216xsrc2jr32q.png" alt="cart" /><h2>Added cart:{addCards}</h2>
 <img className='favorite_img' src="./star.png" alt="" /> <h2>Added favorites:{addFavoritesPage}</h2></div></header>
  {products.map(({id,name,price,art,url,addFavorites}) =><Card  id ={id}  name= {name} price ={price} art ={art} url={url}  fill={addFavorites === false?'#FFFF':'#FFFF00'} addFavoritesFunc={addFavoritesFunc} openModal ={openModal} ></Card>)}
</>)
 }

}

export default ProductPage