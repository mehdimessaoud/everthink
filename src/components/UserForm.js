import React, {useState} from 'react';
import styled from 'styled-components';

import Button from './Button';


const Wrapper=styled.div`
  
padding: 1em;
margin: 0 auto;
 top:-10px;
 left: -15px;
background: rgba(255,255,255,0.06);
padding: 3em;
height:95%;
border-radius: 20px;
border-left:1px solid rgba( 255, 255, 255, 0.3 );
border-top:1px solid rgba( 255, 255, 255, 0.3 );
-webkit-backdrop-filter:blur(10px);
backdrop-filter:blur(5px);
box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
text-align:center;
position:relative;
-webkit-transform: all 0.2s ease-in-out;

h2{
    font-weight:500;
    color: #fff;
    opacity: 0.7;
    font-size: 1.4rem;
    margin-top: 0;
    margin-bottom: 60px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2)
}
`;

const Form= styled.form`
 
 
 label{
    position:fixed;
    float: left;
    font-weight:500;
    color: #fff;
    opacity: 0.7;
    font-size: 1.4rem;
    margin-top: 0;
    margin-bottom: 60px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2)
 }

 ::placeholder{
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
}
input{
  ::placeholder{
    color:black;

  }
  outline:none;
    position:center;
    display: block;
    line-height: 2em;
    background: transparent;
    width: 200px;
    padding: 1em;
    margin-bottom:2em;
    border:none;
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
      text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
      border-radius:10px;
}

a {
    text-decoration: none;
    color: #ddd;
    font-size: 12px;
  
  }

  a:hover{
    text-shadow: 2px 2px 6px #00000040;
  
  }
  a:active{
    text-shadow:none
  }
p{
    font-weight:500;
    color: #fff;
    opacity: 0.7;
    font-size: 1.4rem;
    margin-top: 0;
    margin-bottom: 60px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2)
} 


`;

const UserForm= props=>{
    const [values, setValues] = useState();

    const onChange=event=>{
        setValues({
            ...values,
            [event.target.name]: event.target.value 
        });
    };

    return (
        <Wrapper>
        {/* Display the appropriate form header */}
        {props.formType === 'signup' ? <h2>Sign Up</h2> : <h2>Sign In</h2>}
        {/* perform the mutation when a user submits the form */}
        <Form
        onSubmit={e => {
        e.preventDefault();
        props.action({
        variables: {
        ...values
        }
        });
        }}
        >
        {props.formType === 'signup' && (
        <React.Fragment>
      
        <input
        required
        type="text"
        id="username"
        name="username"
        placeholder="username"
        onChange={onChange}
        />
        </React.Fragment>
        )}
         
        <input
        required
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        onChange={onChange}
        />
         
        <input
        required
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        onChange={onChange}
        />
        <Button type="submit">Submit</Button>
        </Form>
        </Wrapper>
        );
        };

export default UserForm;
