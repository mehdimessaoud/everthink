import React, {useState} from 'react';
import styled from 'styled-components';

import Button from './Button'; 

const Wrapper=styled.div`
    height: 100%;
`;

const Form= styled.form`
    height: 100%;
`;

const TextArea = styled.textarea`
    textarea:focus{
        outline: none;
    }
    ::placeholder{
        color:white;
    }
    width: 50%;
    height: 20%;
    position:center;
    display: block;
    line-height: 2em;
    background: transparent;
    outline: none;
    padding: 1em;
    margin-bottom:2em;
    border:none;
     border-left:1px solid rgba( 255, 255, 255, 0.3 );
      border-top:1px solid rgba( 255, 255, 255, 0.3 );
      -webkit-backdrop-filter:blur(5px);
      backdrop-filter:blur(15px);
      box-shadow: 4px 4px 60px  rgba(0,0,0,0.2);
      color: #fff;
      font-weight: 500;
      font-family:'Montserrat', sans-serif;
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      text-shadow: 2px 2px 4px white ;
      border-radius:20px;
`;

const NoteForm= props=>{
    const [values, setValues]= useState({ content: props.content || ''});
    const onChange= event=>{
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    return (
        <Wrapper>
            <Form
            onSubmit={e=>{
                e.preventDefault();
                props.action({
                    variables:{
                        ...values
                    }
                });
            }}
            >
                <TextArea
                required
                type="text"
                name="content"
                placeholder="Note content"
                values={values.content}
                onChange={onChange}
                />
                
                <Button type="submit" > Save </Button>
              

            </Form>
        </Wrapper>

    )
}

export default NoteForm;