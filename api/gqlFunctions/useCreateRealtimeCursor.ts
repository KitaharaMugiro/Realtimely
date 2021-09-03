

import { useMutation } from "@apollo/client";
import createRealtimeCursorGql from "../gql/createRealtimeCursorGql";
import MyApolloClient from "../MyApolloClient";

export default () => {
    const [createRealtimeCursor] = useMutation(
        createRealtimeCursorGql, { client: MyApolloClient }
    )

    return (url: string, userId: string, x: number, y: number, name: string, avator: string, color: string) => {
        createRealtimeCursor(
            {
                variables:
                {
                    url: "URL#" + url, userId: "UserId#" + userId,
                    x, y, name, avator, color
                }
            })
    }
}