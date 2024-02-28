import {gql} from "apollo-angular";

export const ActivitiesByZoneQuery = gql`
    query ActivitiesByZone($zone: String!) {
        activitiesByZone(zone: $zone) {
            id
            code
            name
            description
        }
    }
`;
