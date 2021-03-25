import React from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
// import the Note component
import NoteForm from '../components/NoteForm';
// import the GET_NOTE query
import { GET_NOTE, GET_ME } from '../gql/query';
const EditNote = props => {
// store the id found in the url as a variable
const id = props.match.params.id;
// define our note query
const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });
const {error1, data: userdata} = useQuery(GET_ME);
// if the data is loading, display a loading message
if (loading) return 'Loading...';
// if there is an error fetching the data, display an error message
if (error) return <p>Error! Note not found</p>;
if(error1) return <p>{error.message} </p>;
// if successful, pass the data to the note component
if(userdata.me.id !== data.note.author.id)
{
    return <p> You cannot edit this note </p>
}
return <NoteForm note={data.note.content} />;
};
export default EditNote;