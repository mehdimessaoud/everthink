import {gql} from '@apollo/client';

const EDIT_NOTE = gql`
mutation updateNote($id: ID! , $content: String!){
    updataNote(id:$id,content: $content){
        id
        content
        createdAt
        favoriteCount
        favoritedBy{
            id
            username
        }
        author{
            username
            id
        }

    }
}

`;

export {EDIT_NOTE};
