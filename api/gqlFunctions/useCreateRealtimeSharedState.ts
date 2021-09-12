

import { useMutation } from "@apollo/client";
import createRealtimeCursorGql from "../gql/createRealtimeCursorGql";
import createRealtimeSharedStateGql from "../gql/createRealtimeSharedStateGql";
import MyApolloClient from "../MyApolloClient";

export default () => {
    const [createRealtimeSharedState] = useMutation(
        createRealtimeSharedStateGql, { client: MyApolloClient }
    )

    return (url: string, actionId: string, value: string) => {
        createRealtimeSharedState(
            {
                variables:
                {
                    PK: "URL#" + url,
                    SK: "ActionId#" + actionId,
                    actionId: actionId,
                    value
                }
            })
    }
}