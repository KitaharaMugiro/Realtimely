

import { useMutation } from "@apollo/client";
import createRealtimeUserGql from "../gql/createRealtimeUserGql";
import MyApolloClient from "../MyApolloClient";

export const useCreateRealtimeUser = () => {
    const [createRealtimeUser] = useMutation(
        createRealtimeUserGql, { client: MyApolloClient }
    )

    return (url: string, userId: string, name: string, avator: string, color: string) => {
        createRealtimeUser({
            variables:
            {
                url: "URL#" + url,
                userId: "UserId#" + userId,
                name: name,
                avator: avator,
                color: color

            }
        })
    }
}