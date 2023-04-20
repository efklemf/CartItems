// import React from 'react';
// import CartItems from './CartItems';

// const Cart=(props) =>{
    

 
//         const {products}=props;
//         // console.log(this.handleIncreaseQuantity);
//         // console.log(this.handleDecreaseQuantity);
//         return(
//             <div className='cart'>
          
//            {
//            products.map( (product) => {
//             return (
//              < CartItems 
//             product={product}
            
//              key={product.id}
//              onIncreaseQuantity={props.onIncreaseQuantity}
//              onDecreaseQuantity={props.onDecreaseQuantity}
//              onDeleteProduct={props.onDeleteProduct}
//               />
//             )

//            })}
//             </div>
//         );
//     }
   


// export default Cart;

import React from 'react';

import CartItems from './CartItems';

const Cart = (props) => {
  const { products } = props;
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          <CartItems
            product={product}
            key={product.id}
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            onDeleteProduct={props.onDeleteProduct}
          />
        )
      })}
    </div>
  );
}

export default Cart;