import './App.css';
import React, {Component} from 'react';
import Card from './productCard'
import Modal from './Modal';
import ProductPage from './productPage';





class App extends Component{
state = {
  
 isOpenModal:false,
 
products:JSON.parse(localStorage.getItem('products')),
text:'Are  you sure you want to add this product to cart?',
backgroundColor:'aqua',
color:'green',

cardId:null,
addCardsArr:[],
addFavoritesArr:[],



}

async componentDidMount(){

  const products = await fetch('productsJSON.json').then(response => response.json())


  localStorage.setItem('products',JSON.stringify(products))
}

addtoFavorites =(id) =>{
this.setState((current) =>{

const newState = {...current}
const index = current.products.findIndex(el => id ===el.id)
newState.products[index].addFavorites = true
newState.addFavoritesArr.push(newState.products[index])
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

<ProductPage addCards ={addCardsArr.length} addFavoritesPage={addFavoritesArr.length} products={products} openModal={this.openModal} addFavoritesFunc = {this.addtoFavorites}></ProductPage>

  {isOpenModal && <Modal text = {text} backgroundColor ={backgroundColor} color ={color} handleClick={()=>{this.setState({isOpenModal:false})}}  addCart ={() =>{this.addCart(cardId)}}></Modal>}


</div>




</>








)





}

  
}



export default App;
//<h2>Added cart:{addCardsArr.length}</h2>
 // <h2>Added favorites:{addFavoritesArr.length}</h2>
//{products.map(el =><Card  id ={el.id}  name= {el.name} price ={el.price} art ={el.art} url={el.url} backgroundColor={el.addFavorites === false?'green':'blue'} addFavorites={()=>{this.addtoFavorites(el.id)}} openModal ={()=>{this.openModal(el.id)}} ></Card>)}
 // {isOpenModal && <Modal text = {text} backgroundColor ={backgroundColor} color ={color} handleClick={()=>{this.setState({isOpenModal:false})}}  addCart ={() =>{this.addCart(cardId)}}></Modal>}
 //{products.map(({id,name,price,art,url,addFavorites}) =><Card  id ={id}  name= {name} price ={price} art ={art} url={url} backgroundColor={addFavorites === false?'green':'blue'} addFavorites={()=>{this.addtoFavorites(id)}} openModal ={()=>{this.openModal(id)}} ></Card>)}