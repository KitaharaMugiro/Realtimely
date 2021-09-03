import { gql } from "@apollo/client";

export default gql`
            mutation MyMutation($url:String!,  $actionIdAndUserId: String!, $actionId:String, $value: String, $name:String, $avator: String, $color: String) {
                createUserAction(input: {PK: $url, SK: $actionIdAndUserId, actionId: $actionId, value: $value, name: $name, avator: $avator, color: $color}) {
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