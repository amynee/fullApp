import './profile.html';

Template.profile.helpers({
    email(){
        // const user = Meteor.users.findOne({_id: Meteor.userId()}, {fields: {emails: 1}}); //Meteor.user();
        const user = Meteor.user({fields:{emails: 1}});
        //console.log(user);
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
    }
});