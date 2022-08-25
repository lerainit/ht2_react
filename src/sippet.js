//<h2>Added cart:{addCardsArr.length}</h2>
//<h2>Added favorites:{addFavoritesArr.length}</h2>
//{products.map(el =><Card  id ={el.id}  name= {el.name} price ={el.price} art ={el.art} url={el.url} backgroundColor={el.addFavorites === false?'green':'blue'} addFavorites={()=>{this.addtoFavorites(el.id)}} openModal ={()=>{this.openModal(el.id)}} ></Card>)}
//{isOpenModal && <Modal text = {text} backgroundColor ={backgroundColor} color ={color} handleClick={()=>{this.setState({isOpenModal:false})}}  addCart ={() =>{this.addCart(cardId)}}></Modal>}
/*
  if(!localStorage.getItem('products')){(async() => {const products = await fetch('productsJSON.json').then(response => response.json())


localStorage.setItem('products',JSON.stringify(products))})()}
 let addCardsArr =[]

if(!localStorage.getItem('addCards')){
localStorage.setItem('addCards',JSON.stringify(addCardsArr))
}
if(!localStorage.getItem('addFavorites')){
  localStorage.setItem('addFavorites',JSON.stringify([]))
  }*/
