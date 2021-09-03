import { gql } from "@apollo/client";

export default gql`
        subscription MySubscription($url: String!) {
            onCreateRealtimeUser(PK: $url) {
                PK
                SK
                avator
                color
                name
                updatedAt
                deleteTime
            }
        }
        `
export type onCreateRealtimeUserResponse = {
    PK: string
    SK: string
    avator: string
    color: string
    name: string
    updatedAt: string
    deleteTime: string
}