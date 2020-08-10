import {ProfileImages} from "./collection.js";


Meteor.publish("ProfileImages", function(){
    return ProfileImages.find();
});