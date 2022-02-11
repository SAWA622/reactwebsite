import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'DATE CROWN Fard Dates',
          qty: 0,
          img: 'https://m.media-amazon.com/images/I/71Sb7dxAc0L._SL1500_.jpg',
          id: 1
        },
        {
          price: 999,
          title: 'Lion Layina Dates',
          qty: 0,
          img: 'https://rukminim1.flixcart.com/image/416/416/ky0g58w0/nut-dry-fruit/l/l/o/-original-imagabxnyxrbrhkz.jpeg?q=70',
          id: 2
        },
        {
          price: 999,
          title: 'Black Papa Wet Dates',
          qty: 0,
          img: 'https://5.imimg.com/data5/SELLER/Default/2021/8/QT/EI/LQ/12164861/129-500x500.jpg',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
  }
  handleDecreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // [{}]

    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })

    return cartTotal;
  }
  render () {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
           <div className="total-price-container">
                    <h3 className="total-price-heading">
                        Total: {this.getCartTotal()} <i>Rupees</i>
                    </h3>
                </div>
      </div>
    );
  }
}

export default App;
