import {gql} from 'apollo-server-express';

export const typeDefs = gql`
type Query {
  launches: [Launch]!
  launch(id: ID!): Launch
  me: User
}

type Mutation {
  bookTrips(launchIds: [ID]!): TripUpdateResponse!
  bookTrip(launchId: ID!): TripUpdateResponse!
  login(email: String): String
}

type Launch {
  id: ID!
  site: String
  mission: Mission
  rocket: Rocket
  isBooked: Boolean!
}

type Rocket {
  id: ID!
  name: String
  type: String
}

type User {
  id: ID!
  email: String!
  trips: [Launch]!
}

type Mission {
  name: String
  missionPatch(size: PatchSize): String
}

enum PatchSize {
  SMALL
  LARGE
}

type TripUpdateResponse {
  success: Boolean!
  message: String
  launches: [Launch]
}
`;
