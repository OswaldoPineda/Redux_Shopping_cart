import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions';

const Home = ({ items, addToCart }) => {
  const handleClick = (id)=>{
    addToCart(id);
    console.log('add', id);
  };

  const itemList = items.map(item=>(
        <div className="col s12 m4">
          <div className="card" key={item.id}>
            <div className="card-image">
              <img src={item.img} alt={item.title}/>
              <span className="card-title">{item.title}</span>
              <span onClick={()=>{handleClick(item.id)}} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></span>
            </div>

            <div className="card-content">
              <p>{item.desc}</p>
              <p><b>Price: {item.price}$</b></p>
            </div>
          </div>
        </div>
    ));

    return(
      <div className="container row">
        <h3 className="center">Our items</h3>
        <div className="box">
          {itemList}
        </div>
      </div>
    )
}

const mapDispatchToProps= (dispatch)=>{
return {
   addToCart: (id)=>{dispatch(addToCart(id))}
     }
};

const mapStateToProps = (state)=>{
  return {
    items: state.items
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
