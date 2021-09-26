import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const cart = props.cart;

    let total = 0;
    let names = [];
    //loop through to get member object
    for (const member of cart) {

        total = total + member.donate;
        names.push(member.name);

    }

    return (

        <div className="cart">
            <h3>Members Added: {cart.length}</h3>
            <h3>Total Fund: $ {total}</h3>
            {
                names.map(name => <h4>Name: {name}</h4>)
            }
        </div>

    );
};

export default Cart;