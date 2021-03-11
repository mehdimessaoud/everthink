// index.js
// This is the main entry point of our application
import React from 'react';
import ReactDom from 'react-dom';
import GlobalStyle from './components/GlobalStyle';
import {
    ApolloClient, 
    ApolloProvider,
    InMemoryCache,
    createHttpLink
    } from '@apollo/client';
import Pages from './pages';
import { setContext } from 'apollo-link-context';


const uri= "https://extraservices.herokuapp.com/api";
const httpLink= createHttpLink({uri})
const cache=new InMemoryCache();

const authLink= setContext((_, {headers})=>{
    return{
        headers:{
            ...headers,
            authorization: localStorage.getItem('token') || ''
        }
    };
});

const client= new ApolloClient({
    link: authLink.concat(httpLink), 
    cache,
    resolvers: {},
    connectToDevTools: true
});

const data={
    isLoggedIn: !!localStorage.getItem('token')
};

cache.writeData({data});
client.onResetStore(() => cache.writeData({ data }));
const App=()=>{
    return (
    <ApolloProvider client={client}>
        <GlobalStyle/>
        <Pages />  
    </ApolloProvider>
      
        
    );
}

ReactDom.render(<App />, document.getElementById('root'));
