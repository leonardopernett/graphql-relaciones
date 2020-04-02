const {books} = require('../database/book')
const {authors} = require('../database/author');
const {reviews} = require('../database/review');

const resolvers = {
    Query: {
       hello(){
           return "pong"
       },
       books:()=>{
         return books;
       },
       authors:()=>{
           return authors
       },
       reviews:()=>{
           return reviews
       }
    },

     Book:{
         author:({author})=>{
             return authors.find(a=>{
                 return a.id === author
             })
         },

         review:(parent)=>{
             return reviews.filter(review=> review.book === parent.id)
         }
     },

     Author:{
         book:(parent)=>{
             return books.filter(a=> a.author === parent.id)
         }
     },
     Review:{
        book:(parent)=>{
             return books.find(book =>book.id=== parent.book)
         } 
     }
    
}

module.exports = {
    resolvers
}