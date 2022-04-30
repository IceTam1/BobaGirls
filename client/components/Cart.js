import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import { fetchCart, deleteFromCart } from '../store/cart'

class Cart extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   cart: []
    // }
    this.deleteCartItem = this.deleteCartItem.bind(this);
  }
  
  async componentDidMount () {
    this.props.fetchCart()
  }

  deleteCartItem () {
    console.log("Cart!!!!");
  }

  render() {
    const { cart } = this.props
    console.log('cart', cart);
    return (
      <div>
        <h2>Cart:</h2>
          {
            cart.map(item => {
              return (
                  <div key={item.id}>
                    <ul>{
                      item.lineitems.map(line => {
                        return (
                          <li key={line.id}>{line.product.name}({line.quantity})
                            <button className='delete' type='delete' onClick={() => this.props.deleteProduct(line.id, line.quantity)}> Delete </button>
                          </li>
                        )
                      })
                    }
                    </ul>
                  </div>
              )
            })
          }  
      </div>
    )
  }
}

const mapState = (state) => state;

const mapDispatch = (dispatch) => ({
    fetchCart: (userId) => dispatch(fetchCart(userId)),
    deleteProduct: (lineitemId, quantity) => dispatch(deleteFromCart(lineitemId, quantity))
})

export default connect(mapState, mapDispatch)(Cart)