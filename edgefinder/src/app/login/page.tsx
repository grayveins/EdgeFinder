'use client'

import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import '../components/Logo/Logo.css';
import './login.css';
import { Logo } from '../components/Logo/Logo';

export const Login = () => {
    return (
        <main>
            <Logo />
            <div className="login">
                <h1 className="login-title">Login to EdgeFinder</h1>
                <form className="flex flex-col">
                    <input type="text" placeholder="Username" className="login-input"/>
                    <input type="password" placeholder="Password" className="login-input"/>
                    
                    <button type="submit" className="login-button">Login</button>
                    <Link href="/forgot-password" className="forgot-password">Forgot password?</Link>
                    <Link href="/signup" className="signup-button">Don't have an account? Sign up here.</Link>
                </form>
            </div>
        </main>

    )
}

export default Login;