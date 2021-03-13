import React, {useEffect} from 'react';
import { useMutation, gql } from '@apollo/client';
import NoteForm from '../components/NoteForm';
import styled from 'styled-components';

const P=styled.p`
    color:red;

`
const NEW_NOTE= gql`
mutation newNote($content: String!){
    newNote(content: $content){
        id
        content
        createdAt
        favoriteCount
        favoritedBy{
            id
            username            
        }author{
            username
            id
        }
    }
}
`;
const NewNote = props=>{
    useEffect(()=>{
        document.title="New Note - EverNote";

    });

    const [data, {loading, error}]=useMutation(NEW_NOTE,{
        onCompleted: data=>{
            props.history.push(`note/${data.NewNote.id}`);
        }
    });

    return (
        <React.Fragment>
            {loading && <p>Loading...</p>}
            {error && <P> </P>}
            <NoteForm action={data}/>
            </React.Fragment>
    );
}

export default NewNote;
