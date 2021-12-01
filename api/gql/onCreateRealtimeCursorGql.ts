import { gql } from "@apollo/client";

export default gql`
        subscription MySubscription($url: String!) {
            onCreateRealtimeCursor(PK: $url) {
                PK
                SK
                x
                y
                name
                avator
                color
                updatedAt
                deleteTime
                customInfoJson
            }
        }
        `
export type onCreateRealtimeCursorResponse = {
    PK: string
    SK: string
    x: number
    y: number
    name: string
    avator: string
    color: string
    updatedAt: string
    deleteTime: string
    customInfoJson: string
}