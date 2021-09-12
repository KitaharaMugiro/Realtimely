import { useSubscription } from "@apollo/client";
import onCreateRealtimeSharedStateGql, { onCreateRealtimeSharedStateResponse } from "../gql/onCreateRealtimeSharedStateGql";
import MyApolloClient from "../MyApolloClient";

export default (url: string, actionId: string): onCreateRealtimeSharedStateResponse => {
    const response = useSubscription(
        onCreateRealtimeSharedStateGql,
        { variables: { PK: "URL#" + url, SK: "ActionId#" + actionId }, client: MyApolloClient }
    );

    const createdSharedState = response.data?.onCreateRealtimeSharedState
    return createdSharedState
}