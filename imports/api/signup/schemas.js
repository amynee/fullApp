SimpleSchema.extendOptions(['autoform']);
import SimpleSchema from 'simpl-schema';

export const signupSchema = new SimpleSchema({
    username: {
        type: String,
        label: "username",
        autoform: {
            placeholder: "User Name",
            label: false
        }
    },
    email: {
        type: String,
        label: "email",
        autoform: {
            placeholder: "Email Adress",
            type: 'email',
            label: false
        }
    },
    password: {
        type: String, 
        label: "Password",
        autoform: {
            placeholder: "Choose Password",
            type: 'password',
            label: false
        }
    },
    confirmPassword: {
        type: String, 
        label: "Password",
        autoform: {
            placeholder: "Confirm Password",
            type: 'password',
            label: false
        }
    }
})