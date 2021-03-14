import React from 'react';
import {Link } from 'react-router-dom';
import styled from 'styled-components';


const Nav=styled.nav`
position:relative;
color:white;
z-index:1;
    padding: 1em;
    background: transparent;
    top:70px;
    left:10px;
    @media(max-width:700px){
        padding-top: 54px;
    }

    @media(min-width:700px){
        
        position: fixed;
        width:220px;
        height: 80%;
         
    }
    border:none;
   border-left:1px solid rgba( 255, 255, 255, 0.3 );
    border-top:1px solid rgba( 255, 255, 255, 0.3 );
    -webkit-backdrop-filter:blur(15px);
    backdrop-filter:blur(15px);
    box-shadow: 4px 4px 60px  rgba(0,0,0,0.2);
    color: #fff;
    font-weight: 500;
    font-family:'Montserrat', sans-serif;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    text-shadow: 1px 1px 7px white;
    border-radius:20px;
`;

const NavList=styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    line-height: 2;
    color:white;
    a{
        text-decoration: none;
        font-weight:bold;
        font-size: 1.1em;
        color: white;
    }

    a.visited{
        color: #ddd;
        text-shadow: 2px 2px 6px #00000040;
    }

    a:hover,
    a:focus{
         color: #ddd;
        text-shadow: 2px 2px 6px #00000040;
    }

`

const Navigation = ()=>{
    return (
        <Nav>
            <NavList>
                <li>
                <span aria-hidden="true" role="img">
                🏠
                </span>
                    <Link to="/">Home</Link>                    
                </li>
                <li>
                <span aria-hidden="true" role="img">
                📓
                </span>
                    <Link to="/mynotes">Notes</Link>
                </li>
                <li>
                <span aria-hidden="true" role="img">
                🌟
                </span>
                    <Link to="/favorites">Favorites</Link>
                </li>
                <li>
                <span aria-hidden="true" role="img">
                📝
                </span>
                    <Link to="/new">New Note</Link>
                </li>
            </NavList>
        </Nav>
    )
}

export default Navigation;
