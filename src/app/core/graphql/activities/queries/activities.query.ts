import {gql} from "apollo-angular";

export const ActivitiesQuery = gql`
    query Activities {
        activities {
            id
            name
            code
            description
        }
    }
`;
