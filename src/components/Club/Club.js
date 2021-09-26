import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Member from '../Member/Member';
import './Club.css'

const Club = () => {
    // state declare for members and cart
    const [members, setMembers] = useState([]);
    const [cart, setCart] = useState([]);
    // data load
    useEffect(() => {
        fetch('./club.json')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])
    // event handler 
    const handleAddToCart = (member) => {
        const newCart = [...cart, member];
        setCart(newCart);
    }
    return (
        <div className="club">

            <div className="club-member">
                {
                    members.map(member => <Member key={member.key}
                        member={member}
                        handleAddToCart={handleAddToCart}>
                    </Member>)
                }
            </div>
            <div className="club-cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Club;