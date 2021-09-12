import { gql } from "@apollo/client";

export default gql`
        subscription MySubscription($PK: String, $SK: String) {
            onCreateRealtimeSharedState(PK: $PK, SK: $SK) {
                PK
                SK
                actionId
                value
                updatedAt
            }
        }
        `
export type onCreateRealtimeSharedStateResponse = {
    PK: string
    SK: string
    actionId: string
    value: string
    updatedAt: string
}