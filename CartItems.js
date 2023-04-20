// import React from 'react';



// const CartItems = (props) => {
    
//     const { price, title, qty } = props.product;
//       const {
//         product,
//         onIncreaseQuantity,
//         onDecreaseQuantity,
//         onDeleteProduct
//       } = props;
        
//         return(
            
//             <div className='cart-item'>
//                {this.props.jsx}

//                 <div className='left-block'> 
//                     <img alt ="Book" style={styles.image}/>
//                 </div>   
                
//                 <div className='right-block'>
//                     <div style={{fontSize:25}}>{title}</div>
//                     <div style={{color:'#777'}}>Rs {price}</div>
//                     <div style={{color:'#777'}}>Qty:{qty}</div>
                
//                     <div className='cart-item-actions'>
//                          {/* {this is button} */}
//                          <img alt='increase' className='action-icons' src={add}
//                          onClick={ ()=> onIncreaseQuantity(product)}
//                          />
                
//                          <img alt='decerase' className='action-icons' src={decrese}
//                          onClick={ ()=> onDecreaseQuantity(product)}
//                         //  onClick={this.decreaseQuantity}
//                          />

//                          <img alt='delete' className='action-icons' src={mol}
//                          onClick={ ()=> onDeleteProduct(product.id)}
//                          />
                        
//                     </div>
//                 </div>

//             </div>
//         );
//     }

// const styles={
//     image:{
//            height:110,
//            width:110,
//            borderRedius:4,
//            background:'#ccc'
//     }
// }
// export default CartItems;


// // import React from 'react';


// // const CartItems = (props) => {
// //   const { price, title, qty } = props.product;
// //   const {
// //     product,
// //     onIncreaseQuantity,
// //     onDecreaseQuantity,
// //     onDeleteProduct
// //   } = props;
// //   return (
// //     <div className="cart-item">
// //       <div className="left-block">
// //         <img style={styles.image} />
// //       </div>
// //       <div className="right-block">
// //         <div style={ { fontSize: 25 } }>{title}</div>
// //         <div style={ { color: '#777' } }>Rs {price} </div>
// //         <div style={ { color: '#777' } }>Qty: {qty} </div>
// //         <div className="cart-item-actions">
// //           {/* Buttons */}
// //           <img
// //             alt="increase"
// //             className="action-icons"
// //             src="{add}"
// //             onClick={() => onIncreaseQuantity(product)}
// //           />
// //           <img
// //             alt="decrease"
// //             className="action-icons"
// //             src="{decrese}"
// //             onClick={() => onDecreaseQuantity(product)}
// //           />
// //           <img
// //             alt="delete"
// //             className="action-icons"
// //             src="{mol}"
// //             onClick={() => onDeleteProduct(product.id)}
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // const styles = {
// //   image: {
// //     height: 110,
// //     width: 110,
// //     borderRadius: 4,
// //     background: '#ccc'
// //   }
// // }

// // export default CartItems;
import React from 'react';
import decrese from './images/minus-sign.png';
import add from './images/mol (2).png';
import mol from './images/mol (1).png';

const CartItems = (props) => {
  const { price, title, qty } = props.product;
  const {
    product,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteProduct
  } = props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={product.img} />
      </div>
      <div className="right-block">
        <div style={ { fontSize: 25 } }>{title}</div>
        <div style={ { color: '#777' } }>Rs {price} </div>
        <div style={ { color: '#777' } }>Qty: {qty} </div>
        <div className="cart-item-actions">
          {/* Buttons */}
          <img
            alt="increase"
            className="action-icons"
            src={add}
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            alt="decrease"
            className="action-icons"
            src={decrese}
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src={mol}
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItems;