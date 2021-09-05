import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, split } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { getMainDefinition } from "@apollo/client/utilities";
import { AuthOptions, createAuthLink } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';

// ライブラリ化するとなるとここの部分が一気に難易度上がる・・

//もうちょっとまとめる
const API_KEY = "da2-rmjwhsc3pfavxdkfskutbi4baa"
const authInfo: AuthOptions = {
    type: "API_KEY",
    apiKey: API_KEY
}

const wssUrl = 'wss://yrfrr54drrejngccrpaw7gps5q.appsync-api.ap-northeast-1.amazonaws.com/graphql'
const wsLink = (process as any).browser ? ApolloLink.from([
    createAuthLink({ url: wssUrl, region: "ap-northeast-1", auth: authInfo }),
    createSubscriptionHandshakeLink({ url: wssUrl, region: "ap-northeast-1", auth: authInfo })
]) : null;

const httpLink = new HttpLink({
    uri: 'https://yrfrr54drrejngccrpaw7gps5q.appsync-api.ap-northeast-1.amazonaws.com/graphql'
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = wsLink ? split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
) : httpLink;

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            "x-api-key": API_KEY
        }
    }
});


const MyApolloClient = new ApolloClient({
    link: authLink.concat(splitLink),
    headers: { "x-api-key": API_KEY },
    cache: new InMemoryCache(),
});

export default MyApolloClient;

