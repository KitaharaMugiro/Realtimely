import { gql } from "@apollo/client";

export default gql`
            mutation MyMutation($url: String!, $userId: String!, $x:Float, $y: Float, $name:String, $avator: String, $color: String, $customInfoJson: String) {
                createRealtimeCursor(input: {PK: $url, SK: $userId, x: $x, y: $y, name: $name, avator: $avator, color: $color, customInfoJson: $customInfoJson}) {
                    PK
                    SK
                    x
                    y
                    name
                    color
                    avator
                    customInfoJson
                    updatedAt
                    deleteTime
            }          
        }
        `
