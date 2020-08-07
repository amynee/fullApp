import{Template} from 'meteor/templating';
import {jokeSchema} from '/imports/api/jokes/schemas.js';
import {$} from 'meteor/jquery';
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
        // let l = Ladda.create($('#submitButton').get(0));
        // l.start();
        // l.setProgress(0.5);
        // l.stop();
        // l.toggle();
        // l.isLoading();
        alertify.confirm('Add Joke','You Want To Add This Joke', () =>{
            Meteor.call('Jokes.insert', currentDoc, function (error, result) {
                if(error){
                    console.log(error);
                }else {
                    console.log('done');
                }
            });
            // l.stop();
            // Bert.alert("Your Joke Posted", "success", "growl-top-right");
            // },() =>{
            //     Bert.alert("something went wrong", "danger", "growl-top-right");
            //     // l.stop();
            // });
    });
}
});


        