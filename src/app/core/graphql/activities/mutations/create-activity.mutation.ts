import {gql} from "apollo-angular";

export const CreateActivityMutation = gql`
    mutation CreateActivity($input: CreateActivityInput!) {
        createActivity(createActivityInput: $input) {
            id
            code
            name
            description
        }
    }
`;
