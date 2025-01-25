'use client'

import React from 'react';
import './Logo.css';
import Link from 'next/link';

export function Logo() {
  return (
    <div className="w-full bg-gray-800 p-4 sticky top-0 z-10"> 
        <Link className="logo-self" href="/">EdgeFinder</Link>
    </div>
    
  );
}