import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Jokes } from "/imports/api/jokes/collection.js";
import SimpleSchema from 'simpl-schema';

if(Meteor.isServer){
    // console.log('xxx');
    // Meteor.methods({
    //     //Method for adding jokes
    //     addJokes: function(jokeName, jokePost){
    //         if(!Meteor.userId()){
    //             throw new Meteor.Error('not authorized');
    //         } else {
    //             var username = Meteor.user().username;
    //             var year = new Date().getFullYear();
    //             var month = new Date().getMonth() + 1;
    //             var day = new Date().getDate();
    //             var date = (month + "/"+day+"/"+year).toString();
    //             console.log(jokeName, jokePost);
    //             console.log(date);
    //             Jokes.insert({
    //                 jokeName: jokeName,
    //                 jokePost: jokePost,
    //                 author: username,
    //                 date: date,
    //                 createdAt: new Date(),
    //                 laughScore: 0,
    //                 frownScore: 0,
    //                 pukeScore: 0,
    //                 voted: [username],
    //                 userId: Meteor.userId()
    //             });
    //             console.log(date);
    //         }
    //     },
    // });
    export const jokeText = new ValidatedMethod({
        name: 'Jokes.insert',
        validate: new SimpleSchema({
          name: { type: String },
          post: { type: String }
        }).validator(),
        run(doc) {
          if (!Meteor.userId()) {
            throw new Meteor.Error('todos.updateText.unauthorized',
              'Cannot edit todos in a private list that is not yours');
          }
            var username = Meteor.user().username;
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var day = new Date().getDate();
            var date = (month + "/"+day+"/"+year).toString();
            Jokes.insert({
              jokeName: doc.name,
              jokePost: doc.post,
              author: username,
              date: date,
              createdAt: new Date(),
              laughScore: 0,
              frownScore: 0,
              pukeScore: 0,
              voted: [username],
              userId: Meteor.userId()
          });
        }
      });
}
