import React from 'react';
import logo from '../img/logo.svg';
import styled from 'styled-components';
import { useQuery,gql } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom';
import ButtonAsLink from '../components/ButtonAsLink';
import Button from './Button'

const IS_LOGGED_IN= gql`
{
    isLoggedIn @client
}
`;

const UserState=styled.div`
    margin-left: auto;
`;

const StyledLink= styled.div`
display: inline-block;
color:red;
`
const HeaderBar= styled.header`
background: transparent;
    width: 100%;
    padding: 0.5em 1em;
    display: flex;
    height: 54px;
    position: fixed;
    align-items: center;
    margin-bottom:2em;
    border:none;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.25);
    z-index:1;
    border-left:1px solid rgba( 255, 255, 255, 0.3 );
    border-top:1px solid rgba( 255, 255, 255, 0.3 );
    -webkit-backdrop-filter:blur(5px);
    backdrop-filter:blur(15px);
    box-shadow: 4px 4px 60px  rgba(0,0,0,0.2);
    color: #fff;
    font-weight: 500;
    font-family:'Montserrat', sans-serif;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    font-weight:500;
    color: #fff;
    opacity: 0.7;
    font-size: 1.4rem;
    margin-top: 0;
    margin-bottom: 60px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2)
    border-radius:0px;
`;

const LogoText= styled.h1`
    margin: 0;
    padding: 0;
    display: inline;
    text-shadow: 0px 0px 4px white;
`;


const Logo= styled.img`
    top:700px;
`

const Header = props =>{
    
    
    const {data, client}= useQuery(IS_LOGGED_IN);
    return(
      <HeaderBar>
       
        <LogoText>Everthink</LogoText>
            <UserState>
                {data.isLoggedIn ? (
                   <ButtonAsLink
                    onClick={()=>{
                    localStorage.removeItem('token');
                    client.resetStore();
                    client.writeData({data: {isLoggedIn: false}});
                    props.history.push('/');
                    }
                    }
                    >
                        Logout
                    </ButtonAsLink>
                   
                  ):(
                    <p>
           
                 < Link to={'/signup'} style={{ textDecoration: 'none', color:'white' ,display:"inline-block"}}>Sign up</ Link>  |{' '}
                  < Link to={'/signin'} style={{ textDecoration: 'none' ,color:'white',display:"inline-block"}}>Sign in</ Link>
                       
             
              
                    </p>
                  )}
              
            </UserState> 
      </HeaderBar>
     
    )
}

export default withRouter(Header);
