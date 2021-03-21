import React from 'react';
import {useQuery , useMutation, gql} from '@apollo/client';

// import the Note component
import NoteForm from '../components/NoteForm';

//import the GET_NOTE query
import {GET_NOTE,GET_ME} from '../gql/query';
import {EDIT_NOTE} from '../gql/mutation';
import Note from '../components/Note';

const EditNote = props=>{
    //Store the id found in the url as a variable
    const id= props.match.params.id;

    //define our note query
const { loading, error, data}= useQuery(GET_NOTE, {variables: {id}});
const {data: userdata}= useQuery(GET_ME);


if (loading) return 'Loading...';
if (error) return `Error! ${error.message}`;
if(userdata.me.id !== data.note.author.id){
    return <p>You do not have access to edit this note</p>
}

return <NoteForm content={data.note.content} />;



};

export default EditNote;

