Meteor.publish('Users', function(){
    if(!Meteor.userId){
        // !this.userId refresh page
        throw Meteor.Error('not authorized');
    } else {
         return Meteor.users.find();
    }
});