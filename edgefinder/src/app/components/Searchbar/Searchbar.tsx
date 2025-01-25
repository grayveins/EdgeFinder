'use client'

import React, {useState, useEffect} from 'react';
import './Searchbar.css';

const Searchbar = () => {
    return (
        <div className="searchbar">
            <input type="text" placeholder="Search for a team" className="searchbar-input"/>
        </div>
    )
}

export default Searchbar;