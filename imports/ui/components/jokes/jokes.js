import {Jokes} from '/imports/api/jokes/collection.js';
import './jokes.html';
import '../jokeForm/jokeForm.js';

Template.jokes.helpers({
    jokes:function(){
        var jokes = Jokes.find({},{sort: {createdAt: -1}});
        return jokes;
    }
})

Template.jokes.events({
    // "submit .joke-post": function(){
    //     event.preventDefault();
    //     var l = Ladda.create(document.querySelector('#joke'));
    //     l.start();
    //     l.setProgress(0.5);
    //     l.stop();
    //     l.toggle();
    //     l.isLoading();
    //     var jokeName = $("#jokeName").val();
    //     var jokePost = $("#jokePost").val();
    //     console.log(jokeName, jokePost);

    //     if (isNotEmpty(jokeName) &&
    //         isNotEmpty(jokePost)){
    //             alertify.confirm('Add Joke','You Want To Add This Joke', () =>{
    //             Meteor.call('addJokes', jokeName, jokePost);
    //             $('#jokeName').val("");
    //             $('#jokePost').val("");
    //             l.stop();
    //             Bert.alert("Your Joke Posted", "success", "growl-top-right");
    //             },() =>{
    //                 Bert.alert("something went wrong", "danger", "growl-top-right");
    //                 l.stop();
    //                 $('#jokeName').val("");
    //                 $('#jokePost').val("");
    //             });

    //         } else {
    //             Bert.alert("something went wrong", "danger", "growl-top-right");
    //             l.stop();
    //         }
    // }
});

 // Validation Rules
//  var isNotEmpty = function(val){
//     if (val!==''){
//         return true;
//     }
//     Bert.alert("Please fil in all fields", "danger", "growl-top-right");
//     return false;
// };