import {Jokes} from '/imports/api/jokes/collection.js';
import {removeJoke} from '/imports/api/jokes/methods.js';
import {Images} from '/imports/api/profileImages/collection.js';
import {UserImages} from '/imports/api/userImages/collection.js';
import { Template } from 'meteor/templating';
import './profile.html';

Template.profile.helpers({
    email(){
        // const user = Meteor.users.findOne({_id: Meteor.userId()}, {fields: {emails: 1}}); //Meteor.user();
        const user = Meteor.user({fields:{emails: 1}});
        if(!user) {
            Bert.alert("You are Not Logged in, Permession Denied", "danger", "growl-top-right");
            return false;
        } else {
            return user.emails[0].address;
        }
    },

    username(){
        const user = Meteor.user({fields:{username: 1}});
        if(!user) {
            Bert.alert("You are Not Logged in, Permession Denied", "danger", "growl-top-right");
            return false;
        } else {
            return user.username;
        }
    },

    userJokes: function(){
        var userId = Meteor.userId();
        var userJokes = Jokes.find({userId: userId}, {sort: {createdAt: -1}});
        return userJokes;
        
    },

    userLaughScore: function() {
        const userLaugh = Meteor.user({fields:{profile: 1}});
        return userLaugh.profile.laughScore;
    },

    userFrownScore: function() {
        const userfrown = Meteor.user({fields:{profile: 1}});
        return userfrown.profile.frownScore;
    },

    userPukeScore: function(){
        const userPuke = Meteor.user({fields:{profile: 1}});
        return userPuke.profile.pukeScore;
    },

    UserImages: function(){
        var username = Meteor.user().username;
        var userId = Meteor.userId();
        var URL = UserImages.findOne({username: username}, {userId: userId});
        return URL;
    },
    
});

Template.profile.events({

    "click #delete-joke": function() {
        var l = Ladda.create($('#delete-joke').get(0));
        l.start();
        alertify.confirm('Remove Joke','Are You Sure',() => {
            removeJoke.call({idJoke: this._id},(err)=>{
                if (err){
                    l.stop();
                    Bert.alert(err, "danger", "growl-top-right");
                } else {
                    l.stop();
                    Bert.alert("You are delete a joke", "success", "growl-top-right");
                }
            });
        }, function() {
            l.stop();
            Bert.alert("Cancel", "danger", "growl-top-right");
        });
    },

    "submit .edit-profile": function(event){
        event.preventDefault();
        var file = $("#profileImage").get(0).files[0];
        console.log(file);

        if (file) {
            fsFile = new FS.File(file);
            console.log(fsFile);
            Images.insert(fsFile, (err, result)=>{
                if(err){
                    throw new Meteor.Error(err);
                } else {
                    var imageLoc = '/cfs/files/ProfileImages/'+result._id;

                    UserImages.insert({
                        userId: Meteor.userId(),
                        username:Meteor.user().username,
                        image: imageLoc,
                    });

                    Bert.alert("Profile Uploade Successful!", "success","growl-top-right");
                }
            })
        }
    }
});