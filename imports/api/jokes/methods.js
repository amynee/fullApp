import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Jokes } from "/imports/api/jokes/collection.js";
import SimpleSchema from 'simpl-schema';

export const insertJoke = new ValidatedMethod({
    name: 'Jokes.insertJoke',
    validate: new SimpleSchema({
      name: { type: String },
      post: { type: String }
    }).validator(),
    run({name, post}) {
      console.log(name,post)
        var username = Meteor.user().username;
        var year = new Date().getFullYear();
        var month = new Date().getMonth() + 1;
        var day = new Date().getDate();
        var date = (month + "/"+day+"/"+year).toString();
        Jokes.insert({
          jokeName: name,
          jokePost: post,
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

export const removeJoke = new ValidatedMethod({
  name: 'Jokes.remove',
  validate: null,
  run({idJoke}) {
    if(!Meteor.userId()) {
            throw new Meteor.Error('not authorized');
        } else {
            Jokes.remove(idJoke);
        }
  }
});

export const countVote = new ValidatedMethod({
  name: 'Jokes.countVote',
  validate: new SimpleSchema({
    idJoke: { type: String },
    votedName: { type: String }
  }).validator(),
  run({idJoke, votedName}) {
    if(!Meteor.userId()) {
      throw new Meteor.Error('not authorized');
    } else {
      Jokes.update(idJoke,{$addToSet: { voted: votedName}});
    }
  }
});


export const userPointLaugh = new ValidatedMethod({
  name: 'Jokes.userPointLaugh',
  validate: new SimpleSchema({
    jokeAuthor: { type: String },
  }).validator(),
  run({jokeAuthor}) {
    if(!Meteor.userId()) {
      throw new Meteor.Error('not authorized');
    } else {
      Meteor.users.update({_id: jokeAuthor},{$inc: {'profile.laughScore': +1}});
    }
  }
});

export const laughVote = new ValidatedMethod({
  name: 'Jokes.laughVote',
  validate: new SimpleSchema({
    user: { type: String },
    idJoke: { type: String }
  }).validator(),
  run({user, idJoke}) {
    if(!user) {
      throw new Meteor.Error('not authorized');
    } else {
      Jokes.update(idJoke, {$inc: {laughScore: +1}});
    }
  }
});

export const userPointFrown = new ValidatedMethod({
  name: 'Jokes.userPointFrown',
  validate: new SimpleSchema({
    jokeAuthor: { type: String },
  }).validator(),
  run({jokeAuthor}) {
    if(!Meteor.userId()) {
      throw new Meteor.Error('not authorized');
    } else {
      Meteor.users.update({_id: jokeAuthor},{$inc: {'profile.frownScore': +1}});
    }
  }
});

export const frownVote = new ValidatedMethod({
  name: 'Jokes.frownVote',
  validate: new SimpleSchema({
    user: { type: String },
    idJoke: { type: String }
  }).validator(),
  run({user, idJoke}) {
    if(!user) {
      throw new Meteor.Error('not authorized');
    } else {
      Jokes.update(idJoke, {$inc: {frownScore: +1}});
    }
  }
});

export const userPointPuke = new ValidatedMethod({
  name: 'Jokes.userPointPuke',
  validate: new SimpleSchema({
    jokeAuthor: { type: String },
  }).validator(),
  run({jokeAuthor}) {
    if(!Meteor.userId()) {
      throw new Meteor.Error('not authorized');
    } else {
      Meteor.users.update({_id: jokeAuthor},{$inc: {'profile.pukeScore': +1}});
    }
  }
});

export const pukeVote = new ValidatedMethod({
  name: 'Jokes.pukeVote',
  validate: new SimpleSchema({
    user: { type: String },
    idJoke: { type: String }
  }).validator(),
  run({user, idJoke}) {
    if(!user) {
      throw new Meteor.Error('not authorized');
    } else {
      Jokes.update(idJoke, {$inc: {pukeScore: +1}});
    }
  }
});
