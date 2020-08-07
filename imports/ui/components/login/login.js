import './login.html';
import {loginSchema} from '/imports/api/login/schemas.js';


Template.login.helpers({
    loginSchema() {
        return loginSchema;
    }
});

Template.login.events({
    'click #submitButton'(){
        $('#loginForm').trigger('submit');
    }
});

AutoForm.addHooks('loginForm', {
    onSubmit(currentDoc) {
        this.event.preventDefault();
        let l = Ladda.create($('#submitButton').get(0));
        l.start();
        l.setProgress(0.5);
        l.stop();
        l.toggle();
        l.isLoading();
        Meteor.loginWithPassword(currentDoc.email, currentDoc.password, function(err){
            l.stop();
            if(err){
                Bert.alert(err.reason, "danger", "growl-top-right");
            } else {
                FlowRouter.go("/jokes");
                Bert.alert("You are logged in", "success", "growl-top-right");
            }
        });
    }
});



