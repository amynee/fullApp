import {Jokes} from '/imports/api/jokes/collection.js';
import '../jokeForm/jokeForm.js';
import {countVote} from '/imports/api/jokes/methods.js';
import {userPointLaugh} from '/imports/api/jokes/methods.js';
import {laughVote} from '/imports/api/jokes/methods.js';
import {userPointFrown} from '/imports/api/jokes/methods.js';
import {frownVote} from '/imports/api/jokes/methods.js';
import {userPointPuke} from '/imports/api/jokes/methods.js';
import {pukeVote} from '/imports/api/jokes/methods.js';
import './jokes.html';


Template.jokes.helpers({
    jokes:function(){
        var jokes = Jokes.find({},{sort: {createdAt: -1}});
        return jokes;
    }
})

Template.jokes.events({

    "click #laugh": function(){
        var thisUser = Meteor.userId();
        var thisJoke = Jokes.findOne({_id: this._id})._id;
        console.log(thisJoke);
        var jokeAuthor = Jokes.findOne({_id: this._id}).userId;
        console.log(jokeAuthor);
        var Name= Meteor.user().username;
        var thisJokesVotes = Jokes.findOne({_id: this._id}, {voted: {$in: Name}}).voted;
        
        
        if(thisJokesVotes.indexOf(Name) > -1) {
             Bert.alert("You Cannot Vote Twice", "danger", "growl-top-right");
        } else {
 
            //  Meteor.call("countVote", thisJoke, Name);
            //  Meteor.call("userPointLaugh",jokeAuthor);
            //  Meteor.call("laughVote", thisUser, thisJoke);
            countVote.call({idJoke: thisJoke, votedName: Name});
            userPointLaugh.call({jokeAuthor});
            laughVote.call({user: thisUser, idJoke: thisJoke});
 
             Bert.alert("Your Vote Was Placed", "success" , "growl-top-right");
        }
 
        if (Name == thisJokesVotes) {
            Bert.alert("You Cannot Vote for Your Own Joke", "danger", "growl-top-right");
        }
     },
     "click #frown": function(){
         var thisUser = Meteor.userId();
        var thisJoke = Jokes.findOne({_id: this._id})._id;
        console.log(thisJoke);
        var jokeAuthor = Jokes.findOne({_id: this._id}).userId;
        console.log(jokeAuthor);
        var Name= Meteor.user().username;
        var thisJokesVotes = Jokes.findOne({_id: this._id}, {voted: {$in: Name}}).voted;
        
        
        if(thisJokesVotes.indexOf(Name) > -1) {
             Bert.alert("You Cannot Vote Twice", "danger", "growl-top-right");
        } else {
 
            //  Meteor.call("countVote", thisJoke, Name);
            //  Meteor.call("userPointFrown",jokeAuthor);
            //  Meteor.call("frownVote", thisUser, thisJoke);
            countVote.call({idJoke: thisJoke, votedName: Name});
            userPointFrown.call({jokeAuthor});
            frownVote.call({user: thisUser, idJoke: thisJoke});
 
             Bert.alert("Your Vote Was Placed", "success" , "growl-top-right");
        }
 
        if (Name == thisJokesVotes) {
            Bert.alert("You Cannot Vote for Your Own Joke", "danger", "growl-top-right");
        }
     },
 
 
     "click #puke": function(){
         var thisUser = Meteor.userId();
        var thisJoke = Jokes.findOne({_id: this._id})._id;
        var jokeAuthor = Jokes.findOne({_id: this._id}).userId;
        var Name= Meteor.user().username;
        var thisJokesVotes = Jokes.findOne({_id: this._id}, {voted: {$in: Name}}).voted;
        
        
        if(thisJokesVotes.indexOf(Name) > -1) {
             Bert.alert("You Cannot Vote Twice", "danger", "growl-top-right");
        } else {
 
            //  Meteor.call("countVote", thisJoke, Name);
            //  Meteor.call("userPointPuke",jokeAuthor);
            //  Meteor.call("pukeVote", thisUser, thisJoke);
            countVote.call({idJoke: thisJoke, votedName: Name});
            userPointPuke.call({jokeAuthor});
            pukeVote.call({user: thisUser, idJoke: thisJoke});
 
             Bert.alert("Your Vote Was Placed", "success" , "growl-top-right");
        }
 
        if (Name == thisJokesVotes) {
            Bert.alert("You Cannot Vote for Your Own Joke", "danger", "growl-top-right");
        }
     },
});