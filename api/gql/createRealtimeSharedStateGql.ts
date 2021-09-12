import { gql } from "@apollo/client";

export default gql`
            mutation MyMutation($PK:String!,  $SK: String!, $actionId:String, $value: String) {
                createRealtimeSharedState(input: {PK: $PK, SK: $SK, actionId: $actionId, value: $value}) {
                    PK
                    SK
                    actionId
                    value
                    updatedAt
            }
        }
        `