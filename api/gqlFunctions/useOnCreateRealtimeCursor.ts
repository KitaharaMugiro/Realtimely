import { useSubscription } from "@apollo/client";
import onCreateRealtimeCursorGql, { onCreateRealtimeCursorResponse } from "../gql/onCreateRealtimeCursorGql";
import MyApolloClient from "../MyApolloClient";

export default (url: string): onCreateRealtimeCursorResponse => {
    const response = useSubscription(
        onCreateRealtimeCursorGql,
        { variables: { url: "URL#" + url }, client: MyApolloClient }
    );

    const createdRealtimeCursor = response?.data?.onCreateRealtimeCursor
    return createdRealtimeCursor
}