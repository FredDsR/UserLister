import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import home from '../assets/home.svg';
import list from '../assets/list.svg';
import create from '../assets/create.svg';

export default function Header() {
  return (
    <header id="main-header">
        <div className="header-content">
            <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
              <h1>User Lister</h1> 
            </Link>
            <div>
              <Link to="/">
                <img src={home} alt="Botão Home"/>
              </Link>
              <Link to="/user">
                <img src={list} alt="Botão Lista"/>
              </Link>
              <Link to="/user/:id">
                <img src={create} alt="Botão Adicionar"/>
              </Link>
            </div>
        </div>
    </header>
  );
}
