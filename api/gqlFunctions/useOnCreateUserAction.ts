import { useSubscription } from "@apollo/client";
import onCreateUserActionGql, { onCreateUserActionResponse } from "../gql/onCreateUserActionGql";
import MyApolloClient from "../MyApolloClient";

export default (url: string): onCreateUserActionResponse => {
    const response = useSubscription(
        onCreateUserActionGql,
        { variables: { url: "URL#" + url }, client: MyApolloClient }
    );

    const createdUserAction = response.data?.onCreateUserAction
    return createdUserAction
}