
const typeDefs = 
    ` 
      type Query {
          hello:String
          books:[Book]!
          authors:[Author]!
          reviews:[Review]!
      }

      type Book {
          id:ID!
          title:String!
          author:Author!
          review:[Review]!
      }

      type Author {
          id:ID!
          name:String!
          book:[Book]!
      }

      type Review {
          id:ID!
          text:String!
          book:Book!
          
      }

    `

module.exports = {
    typeDefs
}