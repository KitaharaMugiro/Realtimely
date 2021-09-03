import queryRealtimeUserGql, { queryRealtimeUserResponse } from "../gql/queryRealtimeUserGql";
import MyApolloClient from "../MyApolloClient";

export const listRealtimeUser = async (url: string): Promise<queryRealtimeUserResponse> => {

    const { data } = await MyApolloClient.query({
        query: queryRealtimeUserGql,
        variables: { url: "URL#" + url } //TODO: このロジックはAPI層に埋め込む
    });
    return data?.queryRealtimeUser.items
}