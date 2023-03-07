const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "A Query to fetch all tracks for the homepage grid"
    tracksForHome: [Track!]!
  }
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Author type"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;
