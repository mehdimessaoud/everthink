import React, { useEffect } from 'react';
import {useQuery, gql} from '@apollo/client';

import noteFeed from '../components/NoteFeed';
import {GET_MY_NOTES} from '../gql/query';

const MyNotes=()=>{
    useEffect(()=>{
        //update the document title
        document.title = 'My notes - notedly';
    });



return(
    <div>
       <h1>Notedly</h1> 
       <p>These are my notes</p>
    </div>
);

};

export default MyNotes;
