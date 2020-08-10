import {Mongo} from 'meteor/mongo';
import { Index, MinimongoEngine } from 'meteor/easy:search';
export const Jokes = new Mongo.Collection('Jokes');

Jokes.allow({
    insert: function (userId, doc) {
        return true;
    },
    remove: function (userId, doc) {
        return true;
    }
});

