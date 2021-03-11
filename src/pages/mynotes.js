import React, { useEffect } from 'react';

const MyNotes=()=>{
    useEffect(()=>{
        //update the document title
        document.title = 'My notes - notedly';
    });



return(
    <div>
       <h1>notedly</h1> 
       <p>These are my notes</p>
    </div>
);

};

export default MyNotes;
