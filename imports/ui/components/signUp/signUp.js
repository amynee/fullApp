import './signUp.html';
import {$} from 'meteor/jquery'
import {signupSchema} from '/imports/api/signup/schemas.js';

Template.signup.helpers({
    signupSchema() {
        return signupSchema;
    }
});

Template.signup.events({
    'click #signButton'(){
        $('#signupForm').trigger('submit');
    }
});

AutoForm.addHooks('signupForm', {
    onSubmit(currentDoc) {
        this.event.preventDefault();
        let l = Ladda.create($('#signButton').get(0));
        l.start();
        Accounts.createUser({
            username: currentDoc.username,
            email: currentDoc.email,
            password: currentDoc.password,
            profile: {
                laughScore: 0,
                frownScore: 0,
                pukeScore: 0,
                voted: [],

            }
        }, function(err){
            if(err){
                Bert.alert(err.reason, "danger", "growl-top-right");
            } else{
                Bert.alert("Account Created! You Are Now Logged In", "success", "growl-top-right");
                FlowRouter.go("/jokes");
            }
        });
    }
});