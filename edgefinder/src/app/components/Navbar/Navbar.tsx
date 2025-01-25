'use client'

import React, {useState, useEffect} from 'react';
import './Navbar.css';
import Link from 'next/link';
import Searchbar from '../Searchbar/Searchbar';

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="logo">
          EdgeFinder
        </Link>
        <Link href="/about" className="navbar-link">
            About
        </Link>
        <Link href="/login" className="sign"> Signin </Link>
        <Link href="/signup" className="sign"> Signup </Link>
      </div>
      <div className="searchbar">
        <Searchbar />
      </div>

    </nav>
  );
}
