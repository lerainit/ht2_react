import './App.css';
import React, {Component} from 'react';
import Card from './productCard'
import Modal from './Modal';
import ProductPage from './productPage';
import initLocalStorage from './getProducts';

initLocalStorage()



class App extends Component{
state = {
  
 isOpenModal:false,
 
products:JSON.parse(localStorage.getItem('products')),
text:'Are  you sure you want to add this product to cart?',
backgroundColor:'cadetblue',
color:'green',

cardId:null,
addCardsArr:JSON.parse(localStorage.getItem('addCards')),
addFavoritesArr:JSON.parse(localStorage.getItem('addFavorites')),



}

async componentDidMount(){

  const products = await fetch('productsJSON.json').then(response => response.json())


  if(!localStorage.getItem('products')){localStorage.setItem('products',JSON.stringify(products))}
 


}
clearAll =()=>{
  localStorage.setItem('addCards',JSON.stringify([]))
localStorage.setItem('addFavorites',JSON.stringify([]))
  this.setState((current) =>{

  const newState = {...current}

newState.addCardsArr=[]
newState.addFavoritesArr=[]
return newState
})
let productsArr = JSON.parse(localStorage.getItem('products'))

 productsArr.forEach(el => el.addFavorites = false)


localStorage.setItem('products',JSON.stringify(productsArr))
this.setState({products:productsArr})
}


addtoFavorites =(id) =>{
this.setState((current) =>{

const newState = {...current}

const index = current.products.findIndex(el => id ===el.id)
if(newState.products[index].addFavorites === false){
newState.products[index].addFavorites = true
newState.addFavoritesArr.push(newState.products[index])

localStorage.setItem('products',JSON.stringify(newState.products))
localStorage.setItem('addFavorites',JSON.stringify(newState.addFavoritesArr))

}

return newState
})

}
openModal = (id) => {

  this.setState({isOpenModal:true,cardId:id})

}
addCart(id){
  console.log(id)
  this.setState((current) =>{

    const newState = {...current}
  
  const index =newState.products.findIndex(el => id === el.id)
  console.log(newState.products)
  newState.addCardsArr.push(newState.products[index])
  newState.isOpenModal=false
localStorage.setItem('addCards',JSON.stringify(newState.addCardsArr))
  console.log(newState.addCardsArr)
  return newState
})
}

render(){
const {text,backgroundColor,color,addCardsArr,addFavoritesArr,isOpenModal,cardId,products} = this.state


return(

<>

<div className='App'>

<ProductPage addCards ={addCardsArr.length} addFavoritesPage={addFavoritesArr.length} products={products} openModal={this.openModal} addFavoritesFunc = {this.addtoFavorites} clearAll={this.clearAll}></ProductPage>

  {isOpenModal && <Modal text = {text} backgroundColor ={backgroundColor} color ={color} handleClick={()=>{this.setState({isOpenModal:false})}}  addCart ={() =>{this.addCart(cardId)}}></Modal>}


</div>




</>








)





}

  
}



export default App;
