import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, addQuantity, substractQuantity } from './actions/cartActions';

const Cart = ({ items, removeItem, addQuantity, substractQuantity }) => {
  const handleAddQuantity = (id) => {
    addQuantity(id);
  };

  const handleSubstractQuantity = (id) => {
    substractQuantity(id);
  };

  const handleRemove = (id) => {
    removeItem(id);
  };

  let addedItems = items.length ?
    (
      items.map(item=>{
        return(
          <li className="collection-item avatar valign-wrapper" key={item.id}>
            <div className="item-img">
              <img src={item.img} alt={item.img} className="" width="100px" />
            </div>
            <div className="item-desc">
              <span className="title">{item.title}</span>
              <p>{item.desc}</p>
              <p><b>Price: {item.price}$</b></p>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              <div className="add-remove">
                <Link to="/cart"><i className="material-icons" onClick={() => handleAddQuantity(item.id)}>arrow_drop_up</i></Link>
                <Link to="/cart"><i className="material-icons" onClick={() => handleSubstractQuantity(item.id)}>arrow_drop_down</i></Link>
              </div>
              <button className="waves-effect waves-light btn pink remove" onClick={() => handleRemove(item.id)}>Remove</button>
            </div>

          </li>
        )
      })
    ) : (<p>Nothing.</p>)

  return (
    <div className="container">
      <div className="cart">
        <h5>You have ordered:</h5>
        <ul className="collection">
          {addedItems}
        </ul>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {dispatch(removeItem(id))},
    addQuantity: (id) => {dispatch(addQuantity(id))},
    substractQuantity: (id) => {dispatch(substractQuantity(id))},
  }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
