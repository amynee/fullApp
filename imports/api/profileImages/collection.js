Images = new FS.Collection("Images",{
    stores: [new FS.Store.GridFS("Images")]
});

Images.allow({
    insert:function(userId, doc){
        return true;
    },

    update: function(userId,doc,fields,modifier){
        return true;
    },

    download: function(){
        return true;
    }
});