import styled from 'styled-components';
const Button = styled.button`
display: inline-block;
font-weight: 500;
font-family:'Montserrat', sans-serif;
text-shadow: 0px 0px 4px white;
box-shadow: 0px 0px 4px #0077cc;
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