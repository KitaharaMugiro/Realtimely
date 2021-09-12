import { gql } from "@apollo/client";

export default gql`
query MyQuery($PK: String!, $SK: String!) {
    getRealtimeSharedState(PK: $PK, SK:$SK) {
        PK
        SK
        actionId
        value
        updatedAt
    }
}
`

export type getRealtimeSharedStateResponse = {
    PK: string
    SK: string
    actionId: string
    value: string
    updatedAt: string
}