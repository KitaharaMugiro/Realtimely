import { useSubscription } from "@apollo/client";
import onCreateRealtimeUserGql, { onCreateRealtimeUserResponse } from "../gql/onCreateRealtimeUserGql";
import MyApolloClient from "../MyApolloClient";

export const useOnCreateRealtimeUser = (url: string): onCreateRealtimeUserResponse => {
    const response = useSubscription(
        onCreateRealtimeUserGql,
        { variables: { url: "URL#" + url }, client: MyApolloClient }
    );

    const createdRealtimeUser = response.data?.onCreateRealtimeUser
    return createdRealtimeUser
}