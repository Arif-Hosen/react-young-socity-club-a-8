import React from 'react';
import './Header.css';

const Header = () => {
    return (
        // club header
        <div className="header">
            {/* club intro */}
            <div className="club-info">
                <h1>Young Socity Club</h1>
                <h3>This club work for young person. You can join with us and change our socity.</h3>
                <h2>Total Fund: 10 Million</h2>
            </div>
            {/* club menu */}
            <div className="club-menu">
                <nav>
                    <a href="/home">Home</a>
                    <a href="/activities">Activities</a>
                    <a href="/members">Member</a>
                    <a href="/about">About Us</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;