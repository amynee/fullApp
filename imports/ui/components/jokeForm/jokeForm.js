import {Template} from 'meteor/templating';
import {jokeSchema} from '/imports/api/jokes/schemas.js';
import {$} from 'meteor/jquery';
import {insertJoke} from '/imports/api/jokes/methods.js';
import './jokeForm.html';

Template.jokeForm.helpers({
    jokeSchema() {
        return jokeSchema;
    }
});

Template.jokeForm.events({
    'click #postButton'(){
        $('#jokeForm').trigger('submit');
    }
});

AutoForm.addHooks('jokeForm', {
    onSubmit(currentDoc) {
        this.event.preventDefault();
        let l = Ladda.create($('#postButton').get(0));
        l.start();
        insertJoke.call({name: currentDoc.name, post: currentDoc.post}, function (error, result) {
            if(error){
                l.stop();
                Bert.alert("something went wrong", "danger", "growl-top-right");
                }else {
                l.stop();
                Bert.alert("Your Joke Posted", "success", "growl-top-right");
            }
    });
 }
});


        