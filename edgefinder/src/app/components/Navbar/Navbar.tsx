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
            <Link className="navbar_item" href="/nba">
                NBA
            </Link>
            <Link className="navbar_item" href="/about">
                NFL
            </Link>
            <Link className="navbar_item" href="/about">
                NHL
            </Link>
            <Link className="navbar_item" href="/about">
                MLB
            </Link>
            <Link className="navbar_item" href="/about">
                NCAA
            </Link>
            <Link className="navbar_item" href="/about">
                More
            </Link>
        </div>

        <div className="flex w-full justify-end items-center">
            <div className="searchbar">
                <Searchbar />
            </div>
            <div className="">
                <Link className="navbar_sign" href="/login"> Login </Link>
                <Link className="navbar_sign" href="/signup"> Signup </Link>
            </div>
        </div>
    </nav>
  );
}
