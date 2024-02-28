import {gql} from "apollo-angular";

export const SearchActivitiesQuery = gql`
    query SearchActivities($keyword: String!, $zoneId: String) {
        searchActivities(keyword: $keyword, zoneId: $zoneId) {
            id
            code
            name
            description
        }
    }
`;
