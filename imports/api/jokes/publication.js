import { Jokes } from "/imports/api/jokes/collection.js";

Meteor.publish('Jokes', function(){
    if(!Meteor.userId){
        // !this.userId refresh page
        throw Meteor.Error('not authorized');
    } else {
         return Jokes.find();
    }
});

