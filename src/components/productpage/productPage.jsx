import React,{PureComponent} from 'react'
import Card from '../productcard/productCard'
import Modal from '../modal/Modal'
import  '../../App.css'
import App from '../../App'
import PropTypes from 'prop-types'


class ProductPage extends PureComponent{



 render(){

 const {addCards,addFavoritesPage,products,addFavoritesFunc,openModal,clearAll} = this.props

     return(
<>
   
<header><h2 className='logo'>Fashion store</h2 ><button onClick ={clearAll}>Clear all</button><div className='container'><img className='cart' src="https://toppng.com/uploads/preview/shopping-cart-11530997216xsrc2jr32q.png" alt="cart" /><h2>Added cart:{addCards}</h2>
 <img className='favorite_img' src="./star.png" alt="" /> <h2>Added favorites:{addFavoritesPage}</h2></div></header>
  {products.map(({id,name,price,art,url,addFavorites}) =><Card key={id}  id ={id}  name= {name} price ={price} art ={art} url={url}  fill={addFavorites === false?'#FFFF':'#FFFF00'} addFavoritesFunc={addFavoritesFunc} openModal ={openModal} ></Card>)}
</>)
 }

}

ProductPage.propTypes={

  addCards: PropTypes.number,
products:PropTypes.array,
addFavoritesPage:PropTypes.number,
addFavoritesFunc:PropTypes.func.isRequired,
openModal:PropTypes.func.isRequired,
clearAll:PropTypes.func.isRequired

}
ProductPage.defaultProps ={
addCards:0,
addFavoritesPage:0

}


export default ProductPage