import { gql } from "@apollo/client";

export default gql`
        subscription MySubscription($url: String!) {
            onCreateUserAction(PK: $url) {
                PK
                SK
                actionId
                value
                name
                avator
                color
                updatedAt
                deleteTime
            }
        }
        `
export type onCreateUserActionResponse = {
    PK: string
    SK: string
    actionId: string
    value: string
    name: string
    avator: string
    color: string
    updatedAt: string
    deleteTime: string
}