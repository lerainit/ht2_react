import React,{PureComponent} from 'react';
import './App.css';




class Modal extends PureComponent{
  
    render(){
  const {text,backgroundColor,color,handleClick,addCart}  = this.props 

return(
<>

<div className='modal' >
  <div className='modal_main_container' style={{backgroundColor,color}} text ={text}  >
 
<button className='close_btn' onClick ={handleClick}>X</button>

<p>{text}</p>
<button onClick ={addCart} >Add to cart</button>
</div>
</div>

</>
  ) 

}
}
export default Modal