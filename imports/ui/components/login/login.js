import './login.html';
import {loginSchema} from '/imports/api/login/schemas.js';


Template.login.helpers({
    loginSchema() {
        return loginSchema;
    }
});

