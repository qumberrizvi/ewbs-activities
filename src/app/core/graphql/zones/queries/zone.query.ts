import {gql} from "apollo-angular";

export const ZoneQuery = gql`
    query Zone($slug: String!) {
        zone(slug: $slug) {
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
