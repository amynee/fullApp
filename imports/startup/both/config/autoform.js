import SimpleSchema from 'simpl-schema';
import {Meteor} from 'meteor/meteor';

SimpleSchema.extendOptions(['autoform']);

SimpleSchema.defineValidationErrorTransform(error =>{
    const ddpError = new Meteor.Error(error.errorType, error.message);
    ddpError.error = 'validation-error';
    ddpError.details = error.details;
    return ddpError;
})