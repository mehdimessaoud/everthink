import React from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import styled from 'styled-components';


const StyledNote= styled.article`
    max-width: 800px;
    margin: 0 auto;
    height: 150px;
    padding: 1em;
    margin: 0 auto;
     
    background: rgba(255,255,255,0.06);
    padding: 3em;
    height:40%;
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

const Metadata= styled.div`
@media(min-width: 500px){
    display: flex;
    align-items:top;
}

`;

const MetaInfo= styled.div`
    padding-right:1em;
`;

const UserActions= styled.div`
    margin-left:auto;
`;



const Note= ({note}) =>{
    return(
        <StyledNote>
            <Metadata>
            <MetaInfo>
            <img 
                src={note.author.avatar}
                alt="{note.author.username} avatar"
                height="50px"
            />
            </MetaInfo>
            <MetaInfo>
                <em>By</em> {note.author.username} <br/>
                {format(note.createdAt, 'MMM Do YYYY')}
            </MetaInfo>
            <UserActions>
                <em>Favorites:</em> {note.favoriteCount}
            </UserActions>
            </Metadata>                    
            <ReactMarkdown source={note.content}/>
        </StyledNote>
    );
};

export default Note;