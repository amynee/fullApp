import './signUp.html';
import {signupSchema} from '/imports/api/signup/schemas.js';

Template.login.helpers({
    signupSchema() {
        return signupSchema;
    }
});