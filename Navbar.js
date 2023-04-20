// import React from 'react';


// import cartI from './images/shopping-cart.png';


// const Navbar =(props) => {
      
//         return(
            
//             <div style={styles.nav}>
//                 <div style={styles.CartIconContainer}>
//                     <img style={styles.CartIcon}src={cartI} alt=''/>
//                     <span style={styles.cartCount}>3</span>
//                 </div>


//             </div>
//         );
//     }

// const styles={
//     CartIcon:{
//            height:32,
//            marginRight:20
//     },
//     nav:{
//         height:70,
//         background:'#4267b2',
//         display:'flex',
//         justifyContent:'flex-end',
//         alignItems:'center'

//     },
//     CartIconContainer:{
//         position:'relative'
//     },

//    cartCount: {
//     background:'yellow',
//     borderRedious:'50%',
//     padding:'4px 8px',
//     position:'absolute',
//     right:0,
//     top:-9

//     }
// }
// export default Navbar;

import React from 'react';
import cartI from './images/shopping-cart.png';

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img style={styles.cartIcon} src={cartI} alt="cart-icon" />
        <span style={styles.cartCount}> {props.count} </span>
      </div>
    </div>
  );
}

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20
  },
  nav: {
    height: 70,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '4px 8px',
    position: 'absolute',
    right: 0,
    top: -9
  }
};


export default Navbar;
