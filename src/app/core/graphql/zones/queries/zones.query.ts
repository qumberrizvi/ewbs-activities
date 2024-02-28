import {gql} from "apollo-angular";

export const ZonesQuery = gql`
    query Zones {
        zones {
            id
            name
            slug
            color
            logo {
                id
                url
                name
                createdAt
            }
        }
    }
`;
