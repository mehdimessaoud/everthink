import React from 'react';
import Note from './Note';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const NoteWrapper= styled.div`
max-width: 500%;
margin:0 auto;
margin-bottom: 2em;
padding-bottom: 2em; 
color:white;
left:-50px;
font-weight:500;
color: #fff;
opacity: 0.7;
font-size: 1.4rem;
margin-top: 0;
margin-bottom: 60px;
text-shadow: 2px 2px 4px rgba(0,0,0,0.2)

`;

const Linko=styled.a`
:hover{
    color:white;
}

`


const NoteFeed = ({ notes }) => {
    return (
    <div>
  
    {notes.map(note => (
    <Link to={`note/${note.id}`} style={{textDecoration:'none'}}><Linko to={`note/${note.id}`}> 
    <NoteWrapper key={note.id}>
    <Note note={note} />
    
    </NoteWrapper>
    </Linko>
    </Link>
    ))}
    </div>
    );
    };

export default NoteFeed;
