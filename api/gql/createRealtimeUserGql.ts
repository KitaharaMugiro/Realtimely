import { gql } from "@apollo/client";

export default gql`
            mutation MyMutation($url: String!, $userId: String!, $name:String, $avator: String, $color: String) {
                createRealtimeUser(input: {PK: $url, SK: $userId, name: $name, avator: $avator, color: $color}) {
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