import { gql } from "@apollo/client";

export default gql`
query MyQuery($url: String!) {
    queryRealtimeUser(PK: $url) {
        items {
            PK
            SK
            avator
            color
            name
            updatedAt
            deleteTime
        }
    }
}
`

export type queryRealtimeUserResponse = {
    PK: string
    SK: string
    avator: string
    color: string
    name: string
    updatedAt: string
    deleteTime: string
}[]