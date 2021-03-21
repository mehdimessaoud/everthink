import React, { useEffect } from 'react';
import {useQuery, gql} from '@apollo/client';

import noteFeed from '../components/NoteFeed';
import {GET_MY_NOTES} from '../gql/query';
import NoteFeed from '../components/NoteFeed';

const MyNotes=()=>{
    useEffect(()=>{
        //update the document title
        document.title = 'My notes';
    });


    const {loading, error, data}= useQuery(GET_MY_NOTES);

    //if the data is large and taking too much to load our app will display a loading message
    if(loading) return 'Loading...';
    //if there is an error our app will display an error message
    if(error) return `Error! ${error.message}`;
    //if the query is successful and there are notes, return the feed of notes
    //else if the query is successful and there aren't notes, display a message
    if(data.me.notes.length !==0){
        return <NoteFeed notes={data.me.notes}/>;
    }else{
        return <p>No notes yet</p>
    }
    



};

export default MyNotes;
