import React from 'react';

const Navbar = (props) =>
{
    return (
        <div className='navbar' style={{ backgroundColor: 'black' }}>
            <div style={{color:'#ff0072'}}>
                <h1>MAHALAXMI SHOP</h1>
            </div>
            
            {/* <div className="cart-icon-container">
                <button>
                    <i className="fas fa-shopping-cart" style={{ color: 'white' }}></i>
                    {props.count>0?(<span style={{ color: 'white' }}>{props.count}</span>):''}
                </button>
            </div> */}
            <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img style={styles.cartIcon} src="https://cdn-icons.flaticon.com/png/512/2838/premium/2838895.png?token=exp=1644583677~hmac=962dc806555ae8fe62078e4e0708312b" alt="cart-icon" />
        <span style={styles.cartCount}> {props.count} </span>
      </div>
    </div>
        </div>
    )
}
const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20
  },
  nav: {
    height: 60,
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


