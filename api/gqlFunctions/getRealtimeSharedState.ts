import getRealtimeSharedStateGql, { getRealtimeSharedStateResponse } from "../gql/getRealtimeSharedStateGql";
import MyApolloClient from "../MyApolloClient";

export const getRealtimeSharedState = async (url: string, actionId: string): Promise<getRealtimeSharedStateResponse> => {

    const { data } = await MyApolloClient.query({
        query: getRealtimeSharedStateGql,
        variables: { PK: "URL#" + url, SK: "ActionId#" + actionId }
    });
    return data?.getRealtimeSharedState
}