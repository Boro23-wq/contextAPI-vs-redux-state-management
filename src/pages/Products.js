import React, { Component } from 'react';

// importing components
import NavBar from '../components/NavBar';

// importing context
import ShopContext from '../context/shop-context';

// importing styles
import './styles/Products.css';

// Approach-1 (Using ShopContext.Consumer)
class ProductsPage extends Component {
  render() {
    return (
      <ShopContext.Consumer>
        {(context) => (
          <React.Fragment>
            <NavBar
              cartItemNumber={context.cart.reduce((count, curItem) => {
                return count + curItem.quantity;
              }, 0)}
            />
            <main className='products'>
              <ul>
                {context.products.map((product) => (
                  <li key={product.id}>
                    <div>
                      <strong>{product.title}</strong> - ${product.price}
                    </div>
                    <div>
                      <button
                        onClick={context.addProductToCart.bind(this, product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </main>
          </React.Fragment>
        )}
      </ShopContext.Consumer>
    );
  }
}

export default ProductsPage;
