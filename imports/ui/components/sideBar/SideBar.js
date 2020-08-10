import './sideBar.html';

Template.sidebar.events({
    "click .logout": function(event){
        Meteor.logout(function(err){
            if(err){
                Bert.alert(err.reason, "danger", "growl-top-right");
            } else{
                FlowRouter.go('/login');
                Bert.alert("you Are Now Logged Out", "success", "growl-top-right");
            }
        });
    },
});
