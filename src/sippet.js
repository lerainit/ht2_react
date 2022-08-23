<h2>Added cart:{addCardsArr.length}</h2>
<h2>Added favorites:{addFavoritesArr.length}</h2>
{products.map(el =><Card  id ={el.id}  name= {el.name} price ={el.price} art ={el.art} url={el.url} backgroundColor={el.addFavorites === false?'green':'blue'} addFavorites={()=>{this.addtoFavorites(el.id)}} openModal ={()=>{this.openModal(el.id)}} ></Card>)}
{isOpenModal && <Modal text = {text} backgroundColor ={backgroundColor} color ={color} handleClick={()=>{this.setState({isOpenModal:false})}}  addCart ={() =>{this.addCart(cardId)}}></Modal>}
