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
font-weight: 700;
font-family:'Montserrat', sans-serif;
text-shadow: 1px 2px 7px  white;

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
