import {UserImages} from "./collection.js";


Meteor.publish("UserImages", function(){
    return UserImages.find();
});