import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDonate, faFileContract, faMobile, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import './Member.css';

const Member = (props) => {
    // destucture of object
    const { img, name, role, age, district, donate } = props.member;

    return (
        <div className="member">
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <h3>Age: {age}</h3>
            <h3>Role: {role}</h3>
            <h3>District: {district}</h3>
            <h3>Donate: {donate}</h3>
            <button onClick={() => props.handleAddToCart(props.member)} className="button-member"> <FontAwesomeIcon icon={faDonate} /> Add to cart</button>
            <br />
            <a className="icon" href=""><FontAwesomeIcon icon={faMobile} /></a>
            <a className="icon" href=""><FontAwesomeIcon icon={faVoicemail} /></a>
        </div>


    );
};

export default Member;