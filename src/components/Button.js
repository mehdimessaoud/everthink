import styled from 'styled-components';
const Button = styled.button`
display: inline-block;
font-weight: 500;
font-family:'Montserrat', sans-serif;
text-shadow: 2px 2px 4px rgba(0,0,0,1);
padding: 10px;
border: none;
border-radius: 5px;
font-size: 18px;
color: #fff;
background-color: #0077cc;
cursor: pointer;
:hover {
opacity: 0.8;
}
:active {
background-color: #005fa3;
}
`;
export default Button;