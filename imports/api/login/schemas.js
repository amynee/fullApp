SimpleSchema.extendOptions(['autoform']);
import SimpleSchema from 'simpl-schema';

export const loginSchema = new SimpleSchema({
    email: {
        type: String,
        label: "email",
        autoform: {
            placeholder: "Email",
            type: 'email',
            label: false
        }
    },
    password: {
        type: String, 
        label: "Password",
        autoform: {
            placeholder: "Password",
            type: 'password',
            label: false
        }
    }
})