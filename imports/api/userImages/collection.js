import {Mongo} from 'meteor/mongo';


UserImages = new Mongo.Collection("UserImages");

UserImages.allow({
    insert: function(){
        return true;
    },

    update: function(userId, doc, fields, modifier){
        return true;
    }
});